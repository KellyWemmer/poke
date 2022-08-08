import {ProxyState} from "../AppState.js";
import { ActivePokemon } from "../Models/ActivePokemon.js";
import {WildPokemon} from "../Models/WildPokemon.js";
import {wildPokemonApi} from "../Services/AxiosService.js";

class WildPokemonsService {
    
    async getPokemons() {
        debugger
        let res = await wildPokemonApi.get('/pokemon')
        console.log('get Wild Pokemons response', res)

        ProxyState.wildPokemons = res.data.results.map(p => new WildPokemon(p))

        
    }

    async getActivePokemon(url){
        const res = await wildPokemonApi.get(url)
        console.log(res.data);
        ProxyState.activePokemon = new ActivePokemon(res.data)
    }
}

export const wildPokemonsService = new WildPokemonsService()

