const colors = {}

// Splash View
const splashScreen = true // recommended: for best behavior after refresh

// seção Olá
const greeting = {
    intro: "Olá atento usuário(a), este quem narra é",
    name: "Leandro Belfor",
    messageOne: "Um amante de tecnologia e também por fotos, venho atráves destas lentes",
    messageTwo: "demonstrar meus sentimentos, emoções e capturas de momento sobre o mundo e sobre mim.",
    messageThree: "Obrigado por também compartilhar a imersão no mundo da fotografia.",
    portraitLink:'images/vacations11.jpg',
    portraitLinkRed:'images/red.png',
    portraitLinkTwo: 'images/myself-behinthelake-bel.jpg',
    portraitLinkThree:'images/red1.jpg',
    portraitLinkFour:'images/blonde2.JPG',
    portraitLinkFive:'images/blonde3.jpg',
    portraitLinkSix:'images/colored1.jpg',
    portraitLinkSeven:'images/blonde4.jpg',
    portraitLinkEight:'images/red1.jpg',
    portraitLinkNine:'images/verde2.jpg',
    portraitLinkTen:'images/rede2.jpg',
    portraitLinkEleven:'images/verde7.jpg',
    portraitLinkTwelve:'images/colored1.jpg',
    portraitLinkThirteen:'images/blonde9.jpg',
    portraitLinkFourteen:'images/blonde10.jpg',
    portraitLinkFiveteen:'images/blondeblack1.jpg',
    portraitLinkSixteen:'images/blondeblack2.jpg',
    portraitLinkSeventeen:'images/colored3.jpg',
    portraitLinkEighteen:'images/colored2.jpg',
    portraitLinkNineteen:'images/blonde6.jpg',
    portraitLinkTwenty:'images/colored4.jpg',
}

const socialMedia ={
    github: "https://github.com/belforz",
    instagram:"https://instagram.com/belforz"
}

const backgroundSong = {
    musicLink: "audio/fourtet.mp3",
    playSong: "🔊 Tocar Música",
    pauseSong: "⏸️ Pausar Música"
}

// seção categorias de fotos
const photos = {

    landscapes: [
        { id: 1, title: 'Museum', description: 'Museum Through Lens', imageLink: 'images/world-buildings-nature-trianon-sp.jpg' },
        { id: 2, title: 'Ibirapuera', description: 'The Heart Of Sao Paolo', imageLink: 'images/landscape-vast-of-sunset-sp.jpg' },
        { id: 3, title: 'Sunset', description: 'Praia Grande View by Sunset', imageLink: 'images/IMG_4084.jpg' },
        { id: 4, title: 'From The Rio', description: 'Praia Grande Evening', imageLink: 'images/IMG_4101.jpg' },
        { id: 5, title: 'From The Rio', description: 'Trees of Life', imageLink: 'images/IMG_1801.jpg' },
        { id: 6, title: 'From The Rio', description: 'Happy Together', imageLink: 'images/IMG_7008.jpg' },
        { id: 7, title: 'From The Rio', description: 'Vou-de-voz', imageLink: 'images/IMG_2251.jpg' },
        { id: 8, title: 'From The Rio', description: 'Goodbye', imageLink: 'images/landscape-river-bel.jpg' },
       
    ],
    emotions: [
        { id: 1, title: 'Tears of The Fallen Angel', description: 'Rain Through The Night', imageLink: 'images/emotions-crying-of-the-fallen-angel-sp.jpg' },
        { id: 2, title: 'Blossom Era', description: 'Calmness', imageLink: 'images/emotions-flowers-blossom-sp.jpg' },
        { id: 3, title: 'Immension', description: 'Rain by the River', imageLink: 'images/emotions-vastness-of-the-mind.jpg' },
        { id: 4, title: 'Ballons', description: 'Capitalism', imageLink: 'images/IMG_2600.jpg' },
        { id: 5, title: 'Ballons', description: 'Solitude', imageLink: 'images/Ultralight_IMG_8789.jpg' },
        { id: 6, title: 'Ballons', description: 'Last Time', imageLink: 'images/emotions-goodbye-sp.jpg' },
        { id: 7, title: 'Ballons', description: 'Roots of', imageLink: 'images/IMG_9773.jpg' },
        { id: 8, title: 'Ballons', description: 'Up to the moon', imageLink: 'images/emotions-living-sp.jpg' },
    ],
    world: [
        { id: 1, title: 'As It Is', description: 'As It is', imageLink: 'images/world-center-of-the-heart-sp.jpg' },
        { id: 2, title: 'Humans History', description: 'Majestation', imageLink: 'images/IMG_2053.jpg' },
        { id: 3, title: 'By The Sky', description: 'Love is everything', imageLink: 'images/IMG_5881.jpg' },
        { id: 4, title: 'Three Phases of Human History', description: 'Rust', imageLink: 'images/IMG_4116.jpg' },
        { id: 5, title: 'Three Phases of Human History', description: 'Banespa', imageLink: 'images/world-banespa-sp.jpg' },
        { id: 6, title: 'Three Phases of Human History', description: 'Like IT is', imageLink: 'images/IMG_2946.jpg' },
        { id: 7, title: 'Three Phases of Human History', description: 'Day or Night?', imageLink: 'images/IMG_7913.jpg' },
        { id: 8, title: 'Three Phases of Human History', description: 'Past & Future', imageLink: 'images/IMG_2822.jpg' },
    ],
    special: [
        { id: 1, title: 'Mutual', description: 'Shared connections', imageLink: 'images/copacabana-view.jpg' },
        { id: 2, title: 'Lady Gaga', description: 'Paws Up', imageLink: 'images/gaga.jpg' },
        { id: 3, title: 'Over the Horizon', description: 'Energies', imageLink: 'images/copabaca-people.jpg' },
        { id: 4, title: 'FA', description: 'Creative resilience', imageLink: 'images/fa.jpg' },
        { id: 5, title: 'Christ the Redeemer', description: 'Faith and hope', imageLink: 'images/cristo.jpg' },
        { id: 6, title: 'Polaroid', description: 'Timeless nostalgia', imageLink: 'images/imensidao.jpg' },
        { id: 7, title: 'Gávea and Lagoon', description: 'Harmony of contrasts', imageLink: 'images/gavea-lagoa.jpg' },
        { id: 8, title: 'Always', description: 'Shared guardianship', imageLink: 'images/museu.jpg' },
    ],
    
}

const photosBW ={
    BW: [
        // { id: 1, title: '', description: 'Museum Through Lens', imageLink: 'images/bw-1.jpg' },
        { id: 2, title: '', description: 'Threes', imageLink: 'images/bw-2.jpg' },
        { id: 3, title: '', description: 'Landscape', imageLink: 'images/bw-3.jpg' },
        { id: 4, title: '', description: 'Buildings', imageLink: 'images/bw-4.jpg' },
        { id: 5, title: '', description: 'Nature', imageLink: 'images/bw-5.jpg' },
        { id: 6, title: '', description: 'Crying of Falling Angel', imageLink: 'images/bw-10.jpg' },
        { id: 7, title: '', description: 'Immensity', imageLink: 'images/bw-7.jpg' },
        { id: 8, title: '', description: 'Sun by the River', imageLink: 'images/bw-8.jpg' },
        { id: 9, title: '', description: 'A Dizzy Rio', imageLink: 'images/bw-9.jpg' },
        // { id: 10, title: '', description: 'Up to the Sky', imageLink: 'images/bw-10.jpg' },
        ]
    }

const photosPolaroid = {
        polaroids: [
            { id: 1, title: 'On The Lake', description: 'Alan Sambista 23 anos de Lady Gaga', imageLink: 'images/polaroid1.jpg' },
            { id: 2, title: 'Muniz', description: 'Smiles', imageLink: 'images/mutualp.PNG' },
            { id: 3, title: 'All in One', description: 'A Farewell', imageLink: 'images/polaroid2.jpg' },
            { id: 4, title: 'Cristo The Redeemer', description: ':)', imageLink: 'images/cristo-polaroid.jpg' },
           
        ]
    }
    

    


export { photos,photosBW, splashScreen, greeting, socialMedia, photosPolaroid, backgroundSong }
