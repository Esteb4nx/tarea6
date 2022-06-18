<template>
  <v-app>
    <v-main>
      <HeaderComponent></HeaderComponent>
      <router-view />
      <FooterComponent></FooterComponent>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from './components/Header-Component.vue'
import FooterComponent from './components/Footer-Component.vue'
export default {
  components:{ HeaderComponent, FooterComponent }
}
</script>

<style>

</style>
