<template>
    <v-container fluid class="contenido-primary">
    <v-container class="contenido py-0">
      <v-row>
        <v-col cols="12" class="mb-6">
          <h2 class="text-h4 font-weight-bold">Nuestros Servicios Destacados</h2>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col
          v-for="(service, index) in services"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center mb-4"
        >
            <v-card-item class="service-card text-center px-10 d-flex flex-column">
              <v-icon :icon="service.icon" size="x-large"class="icon-card py-15 "></v-icon>
              <v-card-title class="text-center text-subtitle-1 font-weight-bold pt-10">
                {{ service.title }}
              </v-card-title>
            
              <v-card-text class="text-center text-body-2 pt-5">
                {{ service.description }}
              </v-card-text>
            </v-card-item>
        </v-col>
      </v-row>
    </v-container>
</v-container>
  </template>
  
  <script setup>
  const props = defineProps({
    services: {
      type: Array,
      default: () => [
        {
          icon: 'mdi-hand-heart',
          title: 'Chequeos Gratuitos',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.',
        },
        {
          icon: 'mdi-chart-line',
          title: 'Exámenes de Detección',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.',
        },
        {
          icon: 'mdi-medical-bag',
          title: 'Servicios RMI',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.',
        },
        {
          icon: 'mdi-tooth',
          title: 'Odontología',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.',
          
        },
        {
          icon: 'mdi-baby',
          title: 'Neonatología',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.',
          
        },
        {
          icon: 'mdi-test-tube',
          title: 'Bioquímica',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.',
          
        }
      ]
    }
  });
  </script>
  
  <style scoped>
  .contenido-primary {
    padding: 70px 0;
  }
  .contenido {
    max-width: 1200px;
  }
  .service-card {
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    height: 400px;
    width: 350px;
    transition:0.6s ease, transform 0.6s ease;
  }
  .icon-card {
    color: rgb(102, 194, 105);
    font-size: 60px;
    border-bottom: rgb(102, 194, 105) 5px solid;
  }
  
  .service-card:hover {
    background-color: #283593;
    color: white; 
    transform: scale(1.02); 
  }
  </style>