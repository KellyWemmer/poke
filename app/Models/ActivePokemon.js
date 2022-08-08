export class ActivePokemon {
    constructor(data) {
        this.img = data.sprites.other["official-artwork"].front_default//went to console and right clicked- get url
        this.name = data.name
        
    }

    get Template(){
        return`
        <h1>${this.name}</h1>
        <img src="${this.img}" alt="">
        `
    }
}