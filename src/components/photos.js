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
    portraitLink:'images/F52C925F-812B-43AC-A1CA-3767AADD30EE.jpg',
    portraitLinkTwo: 'images/myself-behinthelake-bel.jpg',
    portraitLinkThree:'images/red1.jpg',
    portraitLinkFour:'images/blonde2.JPG',
    portraitLinkFive:'images/blonde3.jpg',
    portraitLinkSix:'images/colored.jpg',
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

// seção categorias de fotos
const photos = {
    landscapes: [
        { id: 1, title: 'Museum', description: 'Museum Through Lens', imageLink: 'images/world-buildings-nature-trianon-sp.jpg' },
        { id: 2, title: 'Ibirapuera', description: 'The Heart Of Sao Paolo', imageLink: 'images/landscape-vast-of-sunset-sp.jpg' },
        { id: 3, title: 'Sunset', description: 'Praia Grande View by Sunset', imageLink: 'images/IMG_4084.jpg' },
        { id: 4, title: 'From The Rio', description: 'Vou-de-voz', imageLink: 'images/IMG_2251.jpg' }
    ],
    emotions: [
        { id: 1, title: 'Tears of The Fallen Angel', description: 'Rain Trough The Night', imageLink: 'images/emotions-crying-of-the-fallen-angel-sp.jpg' },
        { id: 2, title: 'Blossom Era', description: 'Calmness', imageLink: 'images/emotions-flowers-blossom-sp.jpg' },
        { id: 3, title: 'Immension', description: 'Rain by the River', imageLink: 'images/emotions-vastness-of-the-mind.jpg' },
        { id: 4, title: 'Ballons', description: 'Up to the moon', imageLink: 'images/emotions-living-sp.jpg' }
    ],
    world: [
        { id: 1, title: 'As It Is', description: 'Whole', imageLink: 'images/world-center-of-the-heart-sp.jpg' },
        { id: 2, title: 'Humans History', description: 'Whole', imageLink: 'images/world-build-paulista-sunset-sp.jpg' },
        { id: 3, title: 'By The Sky', description: 'Whole', imageLink: 'images/world-sunset-by-the-park-sp.jpg' },
        { id: 4, title: 'Three Phases of Human History', description: 'Whole', imageLink: 'images/world-three-dimensions-of-life.jpg' }
    ],
    myself: [
        { id: 1, title: 'Younger', description: ':)', imageLink: 'images/myself-river-3.jpg' },
        { id: 2, title: 'Younger', description: ':)', imageLink: 'images/C067FB4D-5DF9-4F6E-8E2B-606F1AB3A6EB.jpg' },
        { id: 3, title: 'Younger', description: ':)', imageLink: 'images/7D08F6DD-91EC-4C6C-87BD-000B2FC02193.jpg' }
    ]
}

export { photos, splashScreen, greeting }
