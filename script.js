class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let students = [];
let editingIndex = -1;

const studentForm = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (editingIndex >= 0) {
        students[editingIndex] = new Student(name, age);
        editingIndex = -1;
    } else {
        students.push(new Student(name, age));
    }

    studentForm.reset();
    renderStudentList();
});

function renderStudentList() {
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${student.name} - ${student.age} anos 
            <button class="edit-btn" onclick="editStudent(${index})">Editar</button>
            <button class="delete-btn" onclick="deleteStudent(${index})">Excluir</button>`;
        studentList.appendChild(li);
    });
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    editingIndex = index;
}

function deleteStudent(index) {
    students.splice(index, 1);
}