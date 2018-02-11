<template>
  <div class="dashboard">
    <ul class="collection with-header">
      <li class="colliection-header">
        <h4>Employees</h4>
      </li>
      <li 
        v-for="employee in employees"
        :key="employee.id"
        v-text="employee.name"
        class="collection-item"
      />
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DataEmployee from '@/types/types.ts';
import db from '@/config/firebaseInit.ts';

@Component
export default class Dashboard extends Vue {
  private employees: DataEmployee[] = [];

  private async created() {
    const response = await db.collection('employees').get();
    response.forEach(doc => {
      const data: DataEmployee = {
        id: doc.id,
        employee_id: doc.data().employee_id,
        name: doc.data().name,
        dept: doc.data().dept,
        position: doc.data().position,
      };
      this.employees.push(data);
    });
  }
}
</script>
