<template>
  <v-layout>
    <v-flex>
      <v-card
        flat
        tile
        class="green white--text"
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0 align--left">
          <h3>Useful Links</h3>
          <v-divider></v-divider>
          <span>
            <ul>
              <li>
                For Artists
              </li>
              <li>
                For Developers
              </li>
              <li>
                            <a href="/audio" style="text-decoration:none"> WebPlayer</a>
              </li>
              <li>
                <a href="/" style="text-decoration:none"> What is Mansaah</a>
              </li>
              <li>
                Black Culture
              </li>
              <li>
                Search Digital Museaum
              </li>
            </ul>
          </span>
<br />
<br />
          <span>
            <h3>Company</h3>
            <v-divider></v-divider>
            <ul>
              <li>
                <a href="/" style="text-decoration:none"> About</a>
               
              </li>
                <li>
                <a href="/" style="text-decoration:none"> Contact Us</a>
               
              </li>
              <li>
                
              </li>
              <li>
                Affiliates
              </li>
              <li>
                Mansaah Magazine
              </li>
              <li>
                Careers
              </li>
            </ul>
          </span>


        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text align--centre">
            <span> All rights reserved <a style="text-decoration:none" target="_blank" href="https://mansaah.com" > <strong>Laraa Inc.&copy; {{ new Date().getFullYear() }}</strong></a>
              <br />
              <h4>privacy policy</h4><h4>Terms and conditions</h4><h4><a href="/" style="text-decoration:none"> Letter from the C.E.O.</a></h4>
            </span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text align--centre">
            <span> This must be <a style="text-decoration:none" target="_blank" href="https://bihogoo.com" > <strong>Bihogo Inc.&copy; {{ new Date().getFullYear() }}</strong></a> </span>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  name:'footer',
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
}
</script>
<style>
</style>
