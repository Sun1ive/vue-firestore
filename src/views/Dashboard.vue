<template>
  <div class="dashboard">
    <h3>Dashboard</h3>
    <h1>{{ msg }}</h1>
    <button @click="changeMsg">Click</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dashboard extends Vue {
  private msg: string = 'Hello!';

  private changeMsg(): void {
    this.msg = 'World!';
  }
}
</script>
