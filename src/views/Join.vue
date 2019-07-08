<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Join Form</v-toolbar-title>                
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid"
                            ref="form"
                            lazy-validation>
                            <v-text-field
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                            ></v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Passord"
                                type="password"
                                v-model="password"
                                id="password"
                                required
                                :rules="passwordRules"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary"
                            :disabled="!valid"
                            @click="submit">Join</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
// add data
export default {
    
}
</script>
