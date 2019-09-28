<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black black--text text-xs-center">MANSA</div>

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
    background: url('http://127.0.0.1:8000/media/cover/yeah.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
