<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black black--text text-xs-center">MANSA</div>
             <vue-particles
      color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>

            <div class="display-2 font-weight-black white--text text-xs-center mb-3">First Earthly Audio Market</div>
            <div class="display-1 font-weight-bold white--text text-xs-center"><vue-typer text='Afrika At A Stream'></vue-typer></div>
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
    background: url('http://albvt.pythonanywhere.com/media/cover/IMG_20190901_063501.jpg') no-repeat center center ;
     background-size: cover;
    width: 100%;
    height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
