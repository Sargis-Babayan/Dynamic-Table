const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "Engineering",
    role: { title: "Frontend Developer", level: "Mid" },
    contact: { email: "john.doe@example.com", phone: "123-456-7890" },
    skills: ["JavaScript", "React", "CSS"]
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    department: "Design",
    role: { title: "UI/UX Designer", level: "Senior" },
    contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
    skills: ["Figma", "Sketch", "Adobe XD"]
  },
  // Additional employee objects...
];

function generateTable() {
  const tableBody = document.getElementById("employeeTableBody");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Iterate over employees array
  employees.forEach(employee => {
    const row = document.createElement("tr");

    // Iterate over specified properties of each employee
    ['id', 'name', 'age', 'department', 'role', 'contact', 'skills'].forEach(property => {
      const cell = document.createElement("td");

      // Handle nested objects and arrays
      if (property === 'role') {
        cell.textContent = employee.role.title;
        row.appendChild(cell);

        const levelCell = document.createElement("td");
        levelCell.textContent = employee.role.level;
        row.appendChild(levelCell);
      } else if (property === 'contact') {
        const emailCell = document.createElement("td");
        emailCell.textContent = employee.contact.email;
        row.appendChild(emailCell);

        const phoneCell = document.createElement("td");
        phoneCell.textContent = employee.contact.phone;
        row.appendChild(phoneCell);
      } else if (property === 'skills') {
        cell.textContent = employee.skills.join(", ");
        row.appendChild(cell);
      } else {
        cell.textContent = employee[property];
        row.appendChild(cell);
      }
    });

    tableBody.appendChild(row);
  });
}