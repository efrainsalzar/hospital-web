<template>
    <v-container class="contenido">
        <v-row>
            <v-col cols="12">
                <div class="align-center mb-6">
                    <div class="green-line mr-4"></div>
                    <h1 class="text-h4 font-weight-bold">Pongase en contacto con Nosotros</h1>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <!-- Contact Information Section -->
            <v-col cols="12" md="5">
                <p class="text-body-1 mb-8">
                    Para consultas generales, información sobre nuestros servicios o coordinación de atención médica, le invitamos a comunicarse con nuestro equipo. Estamos comprometidos con brindarle una respuesta oportuna y de calidad.
                </p>

                <div class="contact-info">
                    <div class="d-flex align-center mb-4">
                        <v-btn icon color="white" class="green-bg mr-4">
                            <v-icon>mdi-phone</v-icon>
                        </v-btn>
                        <span>+45 677 8993000 223</span>
                    </div>

                    <div class="d-flex align-center mb-4">
                        <v-btn icon color="white" class="green-bg mr-4">
                            <v-icon>mdi-email-outline</v-icon>
                        </v-btn>
                        <span>contacto@hospital.com</span>
                    </div>

                    <div class="d-flex align-center mb-4">
                        <v-btn icon color="white" class="green-bg mr-4">
                            <v-icon>mdi-map-marker</v-icon>
                        </v-btn>
                        <span>Avenida Villar, Sucre - Bolivia</span>
                    </div>
                </div>
            </v-col>

            <!-- Form Section -->
            <v-col cols="12" md="7">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="name" label="Nombre" outlined background-color="rgb(248, 249, 250)"
                                hide-details="auto" class="rounded-lg"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-text-field v-model="email" label="Correo" outlined background-color="rgb(248, 249, 250)"
                                hide-details="auto" class="rounded-lg"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field v-model="subject" label="Asunto" outlined
                                background-color="rgb(248, 249, 250)" hide-details="auto"
                                class="rounded-lg"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-textarea v-model="message" label="Mensaje" outlined background-color="rgb(248, 249, 250)"
                                hide-details="auto" rows="5" class="rounded-lg"></v-textarea>
                        </v-col>

                        <v-col cols="12" class="text-center text-md-right">
                            <v-btn color="primary" x-large class="text-uppercase font-weight-bold px-8 send-button"
                                depressed @click="submitForm">
                                Enviar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            valid: true,
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                // Add your form submission logic here
                console.log({
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    message: this.message
                });

                // Reset form after submission
                this.$refs.form.reset();
            }
        }
    }
}
</script>

<style scoped>
.contenido {
    padding: 70px 0;
    max-width: 1200px;
}
.green-line {
    width: 60px;
    height: 4px;
    background-color: #20d34a;
}

.green-bg {
    background-color: #20d34a !important;
}

.send-button {
    background-color: #3f51b5 !important;
    color: white !important;
    border-radius: 4px;
}

.contact-info {
    font-size: 16px;
}

/* Responsive adjustments */
@media (max-width: 600px) {
    .green-line {
        width: 40px;
    }
}
</style>