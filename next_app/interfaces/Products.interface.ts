export enum Categories {
    Digicore='digicore',
    HyperPop='hyperpop',
    SceneCore='scenecore',
    EDM='EDM',
    Pop10='2010 pop',
    House='house',
    Gecs100='100 gecs',
    HardHyperPop='hard hyperpop'
}

export interface Beat {
    id: number,
    name: string,
    price: number,
    prices: {
        MP3: number,
        Wav: number,
        Trackout: number
    },
    categories: Categories
}