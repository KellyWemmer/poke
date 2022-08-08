import {ProxyState} from "../AppState.js"
import {wildPokemonsService} from "../Services/WildPokemonsService.js"
//import Pop


function _drawWildPokemons() {
    let template = ''

    ProxyState.wildPokemons.forEach(p => template += p.Template)

    document.getElementById('wildPokemons').innerHTML = `
    <div>
      ${template}
    </div>
    `
}

function _drawActivePokemon(){
  document.getElementById('activePokemons').innerHTML = ProxyState.activePokemon.Template
}

export class WildPokemonsController {
    constructor() {
      
      console.log('testing wild controller');
      
      ProxyState.on('wildPokemons', _drawWildPokemons)
      ProxyState.on('activePokemon', _drawActivePokemon)
      this.getPokemons()
    }

    async getPokemons() {
        try {
          await wildPokemonsService.getPokemons()
          console.log('Getting Pokemons from Service')
        } catch (error) {
          console.error('[Getting Pokemons]', error)
          Pop.error(error)
        }
      }

      async getActivePokemon(url){
        try {
          await wildPokemonsService.getActivePokemon(url)
        } catch (error) {
          console.error('[Getting Pokemons]', error)
          Pop.error(error)
        }
      }
    
}
