<template>
<div class="Home">
    <v-container>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
            <v-window>
            <v-window-item :value="1">
                <v-row>
                <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to Your Account</h4>
                    <h6 class="text-center grey--text">
                        Remember don't let empty fields
                    </h6>
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                        <v-text-field
                            label="Email"
                            v-model="email"
                            :rules="emailLoginRules"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-16"
                            required
                        />
                        <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            v-model="password"
                            :rules="PassLoginRules"
                            :type="show ? 'text' : 'password'"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="show = !show"
                            required
                />
                    <v-btn color="blue" dark block tile @click="loginUser()">Log in</v-btn>
                        <h5
                        class="text-center  grey--text mt-4 mb-3"
                        >Or Log in using</h5>
                        <div class="d-flex  justify-space-between align-center mx-16 mb-16">
                        <v-btn depressed outlined color="grey">
                        <v-icon color="red">fa-google</v-icon>
                        </v-btn>
                        </div>
                        </v-col>
                    </v-row>
                    </v-card-text>
                </v-col>
                <!-- link to register -->
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                        <h3 class="text-center">Don't Have an Account Yet?</h3>
                        <h6 class="text-center">
                        Let's get you all set up so you can start creating
                        your your first<br />
                        to do list of projects
                        </h6>
                    </v-card-text>
                    <div class="text-center">
                        <v-btn tile outlined dark to="/register">SIGN UP</v-btn
                        >
                    </div>
                    </div>
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
name: "Login",

data: () => ({
email: "",
    emailLoginRules: [
    (v) => !!v || "Email is required",
    (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    
    show: false,
    password: "",
    PassLoginRules: [
    (v) => !!v || "Password is required",
    (v) => (v && v.length >= 8) || "password must be contain more than 8 characters",
    ],
    props: {
    source: String,
},
}),
};
</script>

.<style scoped>
.v-application .rounded-bl-xl {
border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
border-bottom-right-radius: 300px !important;
}
</style>