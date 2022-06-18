<template>
  <!-- Button trigger modal -->


  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{pokemonSelected.name.toUpperCase()}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex">
          <div>
            <img id="pokemon-image" :src="pokemonSelected.imagen" alt="">
          </div>
          <div class="stats-container">
            <p>Nombre: {{pokemonSelected.name}}</p>
            <p>HP: {{pokemonSelected.hp}}</p>
            <p>ATAQUE: {{pokemonSelected.ataque}}</p>
            <p>DEFENSA: {{pokemonSelected.defensa}}</p>
            <p>VELOCIDAD: {{pokemonSelected.velocidad}}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Volver</button>
        </div>
      </div>
    </div>
  </div>

  <div class="pokemon-container">
    <div v-for="pokemon of pokemonList" :key="pokemon.name" class="card" style="width: 18rem;">
      <a @click="getPokemon(pokemon)" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">

        <img src="https://pbs.twimg.com/profile_images/1510267023170932738/DU17z4wo_400x400.jpg" class="card-img-top"
          alt="Imagen Pokemon">
        <div class="card-body">
          <p class="card-text">{{pokemon.name.toUpperCase()}}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return{
      pokemonList: [],
      pokemonSelected:{
        "name": "",
        "imagen": "https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png",
        "hp": 0,
        "ataque":0,
        "velocidad":0,
        "defensa":0,
      }
    }
  },
  methods: {
    async getPokemon(pokemon){
      await axios.get(pokemon.url).then((resp) => {
        let pokemon = resp.data
        this.pokemonSelected['name'] = pokemon.name.toUpperCase()
        this.pokemonSelected['imagen'] = pokemon['sprites']['other']['official-artwork']['front_default']
        this.pokemonSelected['hp'] = pokemon['stats'][0].base_stat
        this.pokemonSelected['ataque'] = pokemon['stats'][1].base_stat
        this.pokemonSelected['velocidad'] = pokemon['stats'][2].base_stat
        this.pokemonSelected['defensa'] = pokemon['stats'][3].base_stat

        console.log(resp.data)
      })
    }
  },
  async mounted(){
      await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0").then((resp) => {
        this.pokemonList = resp.data['results']
        // console.log(this.pokemonList[1])
      })
  },
  components:{
    
  }

}
</script>

<style>
.card{
 width: 180px !important;
 margin: 12px;
}
.pokemon-container{
  display: flex;
  justify-content: center;
  max-width: 1100px;
  flex-wrap: wrap;
}

#pokemon-image{
  width: 220px !important;
}

.stats-container{

}
</style>