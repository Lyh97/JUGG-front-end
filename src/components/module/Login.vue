<template>
  <div style="height:100%;width: 100%; background-color: #eee;position: fixed;top: 0;left: 0; z-index: 999;">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
          <v-card class="elevation-12 pa-2">
            <v-card-media height="180" src="./static/DQMP.png"></v-card-media>
            <v-spacer></v-spacer>
            <v-card-text>
              <v-form>
                <v-text-field autocomplete="new-password" prepend-icon="contact_mail" name="E-mail" label="E-mail" type="text" v-model="formLabelLogin.email" v-validate="'required|email'" :error-messages="errors.collect('email')" data-vv-name="email" required></v-text-field>
                <v-text-field autocomplete="new-password" prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="formLabelLogin.password" v-validate="'required|max:9|min:7'" :error-messages="errors.collect('password')" data-vv-name="password" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn large block color="primary" @click="confirm()">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  $_veeValidate: {
    validator: "new"
  },
  data: () => ({
    showtxt: "",
    drawer: null,
    formLabelLogin: {
      email: "",
      password: ""
    },
    dictionary: {
      attributes: {
        email: "E-mail Address"
      },
      password: {
        required: () => "Name can not be empty",
        max: "The name field may not be less than 9 characters",
        min: "The name field may not be more than 7 characters"
      }
    }
  }),
  props: {
    source: String
  },
  methods: {
    confirm() {
      this.$validator.validateAll();
      this.$router.push("/dashboard");
    }
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  }
};
</script>
