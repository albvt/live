<template>
  <v-container
  fluid
  grid-list-md
  pa-2
  >
    <v-layout
    align-center
    justify-center
    row
    >
      <v-flex
      xs12
      sm6
      md12
      lg7
      xl6
      offset-sm3
      >
      <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                <div>Welcome to Mansa</div>
                <p class="display-1 text--primary">
                  •Afrika•On•Stream
                </p>
              </v-card-text>
              <span>continue with</span>
              <googleauth></googleauth>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" >
                            <v-text-field prepend-icon="mdi-account-outline" name="username" label="username" type="email"
                                          v-model="username" :rules="usernameRules" required >
                            </v-text-field>
                            <v-text-field prepend-icon="mdi-lock" name="password" label="Password" type="password"
                                          data-cy="signinPasswordField" v-model="password"
                                          :rules="passwordRules" required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" :disabled="!valid" @click="submit" data-cy="signinSubmitBtn">continue</v-btn>
                          <v-spacer></v-spacer>
                          <v-btn color="teal" text to="/register" >sign up</v-btn>
                    </v-card-actions>
                </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import googleauth from './googleauth.vue'
export default{
  components:{googleauth},
  name:"auth",
  data() {
        return {
            valid: false,
            username: '',
            password: '',
            usernameRules: [
                v => !!v || 'username is required',
                v => /.+@.+/.test(v) || 'username must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters'
            ]
        };
    },
    methods:{
      submit() {
          
                }

    }

}
</script>
<style>
</style>
