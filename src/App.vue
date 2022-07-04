<template>
  <v-app>
    <v-main>
      <v-toolbar>
        <v-toolbar-title> Client Orchestrator </v-toolbar-title>
        <v-btn> Adicionar </v-btn>
      </v-toolbar>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">ID Público</th>
            <th class="text-left">Diretório</th>
            <th class="text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="robot in robots" :key="robot.name">
            <td>{{ robot.name }}</td>
            <td>{{ robot.publicId }}</td>
            <td>{{ robot.directory }}</td>
            <td>
              <v-btn icon >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn icon >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      robots: [
        {
          name: "Cotas",
          publicId: "Baixa CNH",
          directory:
            "C:/Users/Pedro Souza/Documents/ProjetosUiPath/PrimeiroProjetoUiPath",
        },
      ],
    };
  },
};
</script>

<style>
</style>