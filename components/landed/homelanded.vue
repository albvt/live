<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-4 >
<div>
  <div class="display-1 font-weight-bold white--text text-xs-center"> <p>
    <vue-typer text='Music,Mixtapes,type-beats!!!!'></vue-typer>
  </p></div>
  <vue-particles
         color="#ffffff"
         :particleOpacity="0.7"
         linesColor="#ffffff"
         :particlesNumber="90"
         shapeType="circle"
         :particleSize="5"
         :linesWidth="2"
         :lineLinked="true"
         :lineOpacity="0.4"
         :linesDistance="150"
         :moveSpeed="3"
         :hoverEffect="true"
         hoverMode="grab"
         :clickEffect="true"
         clickMode="push"
       >
       </vue-particles>
</div>



        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'homelanded'
};
</script>

<style scoped>
.home-hero {
    background: url('http://kiliboid.pythonanywhere.com/media/media/audio-cassette-cassette-tape-1626481.jpg') no-repeat center center ;
    background-size: cover;
    width: 100%;
    height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

