<template>
  <div class="dashboard">
    <button @click="clickme">clickme</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Provide, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// @Component({
//   components: {},
// })

@Component
export default class Home extends Vue {
  @Provide()
  public foo: number = 1;

  @Emit()
  public clickme(): void {
    this.foo ++;
  }
}
</script>
