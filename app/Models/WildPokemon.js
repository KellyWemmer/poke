

export class WildPokemon {
    constructor({name, url}) {
        this.name = name
        this.url = url
    }

    get Template() {
        return `
        <div class="selectable no-select p-2 text-white border border-light m-2 rounded">
            <p onclick="app.wildPokemonsController.getActivePokemon('${this.url}')" class="mb-0 text-white"<b>${this.name}</b></p>
        </div>
        `
    }
}