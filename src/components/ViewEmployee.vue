<template>
  <div class="ViewEmployee">
    <ul class="collection-with-header">
      <li class="collection-header">
        <h4>{{ name }}</h4>
      </li>
      <li class="collection-item">EmployeeID: {{ employeeId }}</li>
      <li class="collection-item">Dept: {{ dept }}</li>
      <li class="collection-item">Position: {{ position }}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button class="btn red" @click="deleteEmployee">Delete</button>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import db from '@/config/firebaseInit.ts';

@Component
export default class ViewEmployee extends Vue {
  private employeeId: string = '';
  private name: string = '';
  private dept: string = '';
  private position: string = '';

  private async created() {
    const response = await db
      .collection('employees')
      .where('employee_id', '==', this.$route.params.id)
      .get();
    response.forEach(doc => {
      (this.employeeId = doc.data().employee_id),
        (this.name = doc.data().name),
        (this.dept = doc.data().dept),
        (this.position = doc.data().position);
    });
  }

  private async deleteEmployee() {
    if (confirm('Are you sure?')) {
      const res = await db
        .collection('employees')
        .where('employee', '==', this.$route.params.id)
        .get();
      res.forEach(doc => doc.ref.delete());
      this.$router.push('/');
    }
  }

  @Watch('$route')
  private async fetchData() {
    const res = await db
      .collection('employees')
      .where('employee', '==', this.$route.params.id)
      .get();
    res.forEach(doc => {
      this.employeeId = doc.data().employee_id;
      this.name = doc.data().name;
      this.position = doc.data().position;
      this.dept = doc.data().dept;
    });
  }
}
</script>
