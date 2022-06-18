<template>
  <div class="">
    <div class="mt-5 d-flex flex-column justify-content-center align-items-center"> 
        <h1>Pokedex en Vue</h1>
        <PokemonList></PokemonList>
    </div>
  </div>
</template>

<script>
import PokemonList from '@/components/Pokemon-List.vue'

export default {
    components: { PokemonList }
}
</script>

<style>

</style>