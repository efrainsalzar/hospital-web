<template>
  <div class="users-container">
    <h2>Lista de Usuarios</h2>
    
    <!-- Indicador de carga -->
    <div v-if="loading" class="loading">
      Cargando usuarios...
    </div>
    
    <!-- Mensaje de error -->
    <div v-else-if="error" class="error">
      Error al cargar usuarios: {{ error }}
    </div>
    
    <!-- Tabla de usuarios -->
    <div v-else class="users-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDisplay',
  data() {
    return {
      users: [],
      loading: true,
      error: null
    }
  },
  mounted() {
    // Cargar los datos cuando el componente se monte
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        // La URL de tu API GraphQL
        const response = await fetch('http://localhost:4000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              {
                getUsers {
                  id
                  name
                  email
                }
              }
            `
          }),
        });

        const result = await response.json();
        
        // Verificar si hay errores en la respuesta
        if (result.errors) {
          throw new Error(result.errors[0].message);
        }
        
        // Guardar los usuarios en el estado del componente
        this.users = result.data.getUsers;
        this.loading = false;
      } catch (err) {
        console.error('Error fetching users:', err);
        this.error = err.message;
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
.users-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.loading, .error {
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.loading {
  background-color: #e8f4f8;
  color: #0288d1;
}

.error {
  background-color: #ffebee;
  color: #c62828;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f5f5f5;
  font-weight: bold;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>