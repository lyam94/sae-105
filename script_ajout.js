/*codé en francais et en anglais */

const uploadImageDiv = document.getElementById("uploadImage");
const fileUpload = document.getElementById("fileUpload");

fileUpload.addEventListener("change", getImage, false);

function getImage() {
    console.log("images", this.files[0]);
    const imageToProcess = this.files[0];

    // Crée un nouvel élément image
    let newImg = new Image();
    newImg.src = URL.createObjectURL(imageToProcess);

    // Ajoute un gestionnaire d'événements pour attendre que l'image soit chargée
    newImg.onload = () => {
        const originalWidth = newImg.width;
        const originalHeight = newImg.height;

        // Redimensionner l'image à 50% de sa taille originale
        newImg.width = originalWidth * 0.5;
        newImg.height = originalHeight * 0.5;

        // Mettre à jour les styles du conteneur pour centrer l'image
        uploadImageDiv.style.display = "flex";
        uploadImageDiv.style.justifyContent = "center";
        uploadImageDiv.style.alignItems = "center";
        uploadImageDiv.style.border = "1px solid "; // Exemple de bordure
        uploadImageDiv.style.width = "100%"; // Exemple : largeur du conteneur
        uploadImageDiv.style.height = "400px"; // Hauteur du conteneur
        uploadImageDiv.style.position = "relative";
        uploadImageDiv.style.overflow = "hidden"; // Coupe l'image si elle dépasse

        // Ajoute l'image redimensionnée au conteneur
        uploadImageDiv.innerHTML = ""; // Efface tout contenu précédent
        uploadImageDiv.appendChild(newImg);

        // Appelez la fonction de traitement de l'image
        processImage();
    };
}

document.getElementById('contributionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const album = document.getElementById('album').value;
    const audioURL = document.getElementById('audioURL').value;

    // Prévisualiser les informations saisies
    document.getElementById('previsualisation_titre').textContent = `Titre: ${title}`;
    document.getElementById('previsualisation_artiste').textContent = `Artiste: ${artist}`;
    document.getElementById('previsualisation_album').textContent = `Album: ${album}`;

    const audioPreview = document.getElementById('audioPreview');
    audioPreview.src = audioURL;

    // Valider l'URL audio (15 secondes max)
    const audio = new Audio(audioURL);
    audio.addEventListener('loadedmetadata', function() {
        if (audio.duration > 15) {
            alert("L'extrait audio dépasse les 15 secondes autorisées.");
        } else {
            // Si la durée est correcte, envoyer les données au service web
            submitData({ title, artist, album, audioURL });
        }
    });
});

function submitData(data) {
    // Utiliser fetch pour envoyer les données au service web
    fetch('https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Votre contribution a été envoyée avec succès !');
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'envoi des données.');
    });
}
