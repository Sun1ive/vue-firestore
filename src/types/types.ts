interface Employee {
  name: string;
  id: string;
  dept: string;
  position: string;
}

interface DataEmployee extends Employee {
  employee_id: string;
}

export default DataEmployee;

