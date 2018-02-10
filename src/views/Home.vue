<template>
  <div class="home">
    <img src="../assets/logo.png">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Dashboard from '@/views/Dashboard.vue'; // @ is an alias to /src

@Component({
  components: {
    Dashboard,
  },
})
export default class Home extends Vue {}
</script>
