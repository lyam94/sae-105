/* Codé en français et en anglais*/
var container = document.createElement('div');
/* Donnée des artistes du site*/
var artists = [
    {
        id: 'LUV',
        titre: '~~ LUV RESVAL ~~',
        imgSrc: 'img/luv.png',
        description: "Luv Resval, était un rappeur et chanteur français né le 6 janvier 1997 et décédé le 21 octobre 2022. Originaire de l'Essonne (91), il s'est fait connaître pour son style unique mêlant rap, trap, poétique et une approche très imagée de l'écriture, souvent empreinte de références à l'imaginaire.",
        track: {
            titre: "TOUT S'EN VA",
            coverSrc: "img/tout s'en va.png",
            audioSrc: 'musiques/luv-resval-tout-sen-va-.mp3',
            spotifyLink: 'https://open.spotify.com/intl-fr/track/0cf1gWT1VpWrxxgjjIiH4V?si=bbb9d96d2c0848c5',
            desc_musique: "Dans Tout s’en va, Luv Resval explore les thèmes de la perte, du passage du temps et de l’éphémère. À travers des paroles poétiques et mélancoliques, il raconte l’histoire d’un homme qui observe tout ce qui l’entoure s’effacer progressivement, que ce soient les relations, les souvenirs ou même les moments de bonheur. J'aime cette musique, car LUV est un des plus grands rappeurs de notre génération, ses paroles transpercent les cœurs et donnent de l'émotion à n'importe qui. C'est pour cela que cette chanson est parfaite elle montre que tout s'en va sauf les souvenirs même face la mort..."
        }
    },
    {
        id: 'KYANA',
        titre: '~~ KYANA ~~',
        imgSrc: 'img/kyana.png',
        description: "Kyana est une chanteuse française, originaire du Val-de-Marne (94). Elle a commencé sa carrière musicale en 2022 et s'est rapidement fait remarquer pour son style unique et sa voix captivante. En juin 2023, elle a sorti son premier EP intitulé LUNA, qui comprend notamment le single P'tit cœur s'emballe. Ce projet a été bien accueilli et a contribué à élargir sa base de fans. Avec une présence croissante sur les plateformes de streaming et les réseaux sociaux, Kyana est considérée comme une artiste prometteuse de la nouvelle scène musicale française, à suivre de près dans les années à venir.",
        track: {
            titre: 'MAUVAIS CÔTÉ',
            coverSrc: 'img/mauvais cote.png',
            audioSrc: 'musiques/mauvais-cote_15.mp3',
            spotifyLink: 'https://open.spotify.com/intl-fr/album/2kYUcxZs9tgIfPLGrMMEvt?si=M9umMBzNTIaOgvjz4Mfzzw',
            desc_musique: "Dans Mauvais Côté, Kyana nous plonge dans un récit poignant où l’amour et la dualité des émotions prennent le dessus. L’histoire tourne autour d’une relation toxique et passionnée, où l’attirance pour quelqu’un révèle autant de douceur que de chaos. Cette musique me plait, car on y retrouve un rythme entrainant et qui donne envie de la chanter peu importe le sens des paroles "
        }
    },
    {
        id: 'NEPAL',
        titre: '~~ NEPAL ~~ ',
        imgSrc: 'img/nepal.png',
        description: "Népal, de son vrai nom Clément Di Fiore, était un rappeur, beatmaker et artiste français né le 18 octobre 1990 et décédé le 20 novembre 2019. Originaire du 14ᵉ arrondissement de Paris, il s'est fait connaître pour son univers unique, mêlant mélancolie, introspection et poésie dans ses textes. Il a marqué la scène du rap français grâce à son talent singulier et sa discrétion, préférant se concentrer sur son art plutôt que sur la médiatisation.",
        track: {
            titre: "LOVE 64",
            coverSrc: "img/love64.png",
            audioSrc: 'musiques/nepal-love64.mp3',
            spotifyLink: 'https://youtu.be/2BYGUATXJAs?si=LUo2YNRXLSvDBVNp',
            desc_musique: "Dans cette musique, on écoute Nepal faire la morale à un homme au sujet de sa copine. Il lui fait remarquer qu'il a changé quand il est avec ses amis et que de toute façon ce n'est qu'une boucle, qu'il reviendra dans 6 mois en leur démontrant que l'amour n'est qu'une fatalité. Que chaque relation finie en souvenir et n'aboutit jamais a quoi que ce soit. La musique ce fini sur l'appel de Nepal a son ami qui ne répond finalement plus du tout... Cette chanson est tout particulier pour moi, car les paroles qu'elle porte sont fortes et elle mon donnée l'envie de me tatouer la phrase de l'extrait."
        }
    },
    {
        id: 'STYLETO',
        titre: '~~ STYLETO ~~',
        imgSrc: 'img/styleto.png',
        description: "Styleto, est une chanteuse française née en 1998 et originaire de Lyon. Elle s'est d'abord fait connaître sur YouTube et Instagram, où elle partageait des moments de sa vie quotidienne ainsi que des reprises de chansons. Passionnée de musique depuis son enfance, Styleto a attiré l'attention avec sa reprise du titre Gaffe aux autres. Styleto est reconnu pour son timbre de voix unique et son style musical sensible et authentique, qui lui permet de captiver son public et de s'imposer comme une artiste prometteuse sur la scène.",
        track: {
            titre: "FAUT QUE TU M'AIME",
            coverSrc: "img/faut que tu m'aime.png",
            audioSrc: 'musiques/styleto-faut-que-tu-maimes-.mp3',
            spotifyLink: 'https://open.spotify.com/intl-fr/album/5kdVeFvP0n9f4xepbdPCt7?si=2_tXCdNbRr6B1CxhO0IseA',
            desc_musique: "Dans Faut que tu m’aimes, Styleto explore les méandres de l’amour, entre désir brûlant et doutes intimes. Elle raconte une histoire d’attachement et de quête de validation affective. Avec des paroles poignantes et un refrain accrocheur, le morceau met en lumière cette vulnérabilité universelle : le besoin d’être aimé pour ce que l’on est. Je n'ai pas besoin de m'expliquer, le titre par de lui-même cette chanson me pousse a aimer et me rend heureux à chaque écoute."
        }
    },
    {
        id: 'YNSS',
        titre: '~~ YNSS ~~ ',
        imgSrc: 'img/YNSS.png',
        description: "YNSS, de son vrai nom Yannis Regisseur, est un jeune chanteur talentueux, beatmaker et artiste français né le 9 février 2005. Originaire de Vitry-sur-Seine, et n'étant pas très connue, il fait de la musique pour lui et ses amis, uniquement, mêlant afrobeat et rap, il est capable de nous faire ressentir des émotions dans ses textes. Étant toujours à la recherche de la perfection dans la musique, il essaie de produire des sons de qualité ainsi que des prods marquante pour prouver que tout le monde peut y arriver également.",
        track: {
            titre: "SANS LENDEMAIN",
            coverSrc: "img/sans lendemain vinyle.png",
            audioSrc: 'musiques/sans lendemain.mp3',
            spotifyLink: 'https://open.spotify.com/intl-fr/track/3EuNRKolgMyusSN3S3Oo06?si=f0e6725f956948ea',
            desc_musique: "Dans cette musique, on suit l'histoire d'un jeune homme qui tombe amoureux d'une fille qu'il a vue sur les réseaux sociaux et qui souhaite envoyer un message à la jeune fille. Dans son message, il lui demande de devenir sa moitié en espérant que cette fille tombe amoureuse de lui et voudrait qu'elle ne le considérât pas comme une relation SANS LENDEMAIN. Cette chanson est unique, car c'est mon amie qui la produite et je le soutiens également dans tous les autres projets qu'il a pu entreprendre donc cette musique est sûrement le début d'une grande carrière. "
        }
    },
    {
        id: 'ANGELE',
        titre: '~~ ANGELE ~~ ',
        imgSrc: 'img/angele.png',
        description: "Angèle Van Laeken, plus connue sous son prénom de scène Angèle, est une chanteuse, auteure-compositrice et musicienne belge née le 3 décembre 1995 à Uccle, près de Bruxelles. Révélée en 2018 avec son premier album Brol, elle s’est rapidement imposée comme une figure incontournable de la pop francophone grâce à sa voix douce, son style unique et ses paroles à la fois légères et percutantes.",
        track: {
            titre: "TA REINE",
            coverSrc: "img/angele cover.png",
            audioSrc: 'musiques/angele-ta-reine.mp3',
            spotifyLink: 'https://open.spotify.com/intl-fr/track/3iXhLi33EpUfcOwasC8un1?si=27cb155eba4c4c5c',
            desc_musique: "Dans Reine, Angèle nous invite à découvrir une histoire d’amour empreinte de respect, de passion et d’admiration. Le morceau se concentre sur la célébration d’une femme unique, décrite comme une reine dans le cœur et l’esprit de l’artiste. À travers des paroles sincères et imagées, Angèle raconte une relation où la puissance des sentiments se mêle à la douceur des gestes et à l’importance de l’équilibre. Angèle est pour moi une des meilleures chanteuses francophones et revendique ouvertement de vrai sujet tel que son amour pour les femmes, le consentement ainsi que l'égalité entre les femmes et les hommes. Ce qui est pour moi des combats plus qu'intéressant et tout particulièrement dans la musique. "
        }
    },
];

/* code pour importer les datas dans l'html */
artists.forEach(artiste => {
    var block = document.createElement('div');
    block.className = 'BLOC';

    block.innerHTML = `
      <h2 id="${artiste.id}" class="etitre">${artiste.titre}</h2>
       
      <img src="${artiste.imgSrc}" alt="photo artiste"  class="img imgti">
      <p class="desc_artiste">${artiste.description}</p>
      <br><br><br>
      <h3 class="titre_sons">- ${artiste.track.titre} -</h3>
      <a href="${artiste.track.spotifyLink}" target="_blank" alt:"liens d'autre platformes ">
        <img src="${artiste.track.coverSrc}" alt="Cover" width="500" class="img imgun">
      </a>
      <nav class="volumeControl">
        <button class="playbutton">▶️</button>
        <input type="range" min="0" max="2" step="0.1" value="2" class="volume">🔊</input>
        <audio src="${artiste.track.audioSrc}"></audio>
        <p desc_musique>${artiste.track.desc_musique} </p>
      </nav>
      <br><br><br><br><br><br><br><br>
    
    `;
/* creation du code pour le boutton*/
    var playButton = block.querySelector('.playbutton');
    var audioPlayer = block.querySelector('audio');
    var volumeControl = block.querySelector('.volume');

    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = '💽';
        } else {
            audioPlayer.pause();
            playButton.textContent = '▶️';
        }
    });
    audioPlayer.addEventListener('ended', () => {
        playButton.textContent = '🔴';
    });

    volumeControl.addEventListener('input', () => {
        audioPlayer.volume = volumeControl.value;

    });

    container.appendChild(block);
});
/* importation du code dans le html*/
document.body.appendChild(container);