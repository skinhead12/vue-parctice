<template>
  <div class="Home">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-card class="elevation-6 mt-10">
            <v-window>
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" md="6" class="blue rounded-br-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h3 class="text-center">Alredy Signed up?</h3>
                        <h6 class="text-center">
                          Log in to your account so you can continue building
                          and<br />
                          editing your projects
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark to="/login">Log in</v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Sign Up for an Account</h4>
                      <h6 class="text-center grey--text">
                        Remember don't let empty fields
                      </h6>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-row>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="First Name"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                class="mt-4"
                                :rules="firstNameRules"
                                required
                              />
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                label="Last Name"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                class="mt-4"
                                :rules="lastNameRules"
                                required
                              />
                            </v-col>
                          </v-row>
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            :rules="SignRules"
                            v-model="user.email"
                            required
                          />
                          <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            :rules="SignPassRules"
                            v-model="user.password"
                            :type="show1 ? 'text' : 'password'"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show1 = !show1"
                            required
                          />
                          <v-btn
                            color="blue"
                            dark
                            block
                            tile
                            @click="createUser(user)"
                            >Sign up</v-btn
                          >
                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Log in using
                          </h5>
                          <div
                            class="d-flex justify-space-between align-center mx-16 mb-16"
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">fa-google</v-icon>
                            </v-btn>
                          </div>
                          <!-- End Sign Up -->
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Register",

  data: () => ({
    user: {
          email: "",
          password: "",
      },
    firstNameRules: [(v) => !!v || "Name is required"],
    lastNameRules: [(v) => !!v || "Last Name is required"],
    SignRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    show1: false,
    SignPassRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "password must be contain more than 8 characters",
    ],
    props: {
      source: String,
    },
  }),
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>