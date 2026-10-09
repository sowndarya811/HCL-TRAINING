
const form = document.getElementById("studentForm");

const table = document.getElementById("studentTable");

const search = document.getElementById("search");

const submitBtn = document.getElementById("submitBtn");

const noData = document.getElementById("noData");


let students =
    JSON.parse(localStorage.getItem("students")) || [];


let editIndex = -1;


/* DISPLAY STUDENTS */

function displayStudents(data = students) {

    table.innerHTML = "";


    if (data.length === 0) {

        noData.style.display = "block";

        return;
    }


    noData.style.display = "none";


    data.forEach((student, index) => {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${student.id}</td>

            <td>${student.name}</td>

            <td>${student.gender}</td>

            <td>${student.email}</td>

            <td>${student.department}</td>

            <td>${student.year}</td>

            <td>${student.section}</td>

            <td>${student.cgpa}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editStudent(${index})"
                >
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${index})"
                >
                    Delete
                </button>

            </td>

        `;


        table.appendChild(row);

    });
}


/* INSERT / UPDATE */

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const student = {

        id: document
            .getElementById("studentId")
            .value
            .trim(),

        name: document
            .getElementById("studentName")
            .value
            .trim(),

        gender: document
            .getElementById("gender")
            .value,

        dob: document
            .getElementById("dob")
            .value,

        email: document
            .getElementById("email")
            .value
            .trim(),

        phone: document
            .getElementById("phone")
            .value
            .trim(),

        department: document
            .getElementById("department")
            .value,

        year: document
            .getElementById("year")
            .value,

        section: document
            .getElementById("section")
            .value,

        cgpa: document
            .getElementById("cgpa")
            .value,

        address: document
            .getElementById("address")
            .value
            .trim()

    };


    /* INSERT */

    if (editIndex === -1) {

        const exists =
            students.some(
                item => item.id === student.id
            );


        if (exists) {

            alert("Student ID already exists.");

            return;
        }


        students.push(student);

        alert("Student inserted successfully.");

    }


    /* UPDATE */

    else {

        students[editIndex] = student;

        alert("Student updated successfully.");

        editIndex = -1;

        submitBtn.textContent =
            "Insert Student";
    }


    saveData();

    displayStudents();

    clearForm();

});


/* SAVE DATA */

function saveData() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


/* EDIT */

function editStudent(index) {

    const student = students[index];


    document.getElementById("studentId").value =
        student.id;

    document.getElementById("studentName").value =
        student.name;

    document.getElementById("gender").value =
        student.gender;

    document.getElementById("dob").value =
        student.dob;

    document.getElementById("email").value =
        student.email;

    document.getElementById("phone").value =
        student.phone;

    document.getElementById("department").value =
        student.department;

    document.getElementById("year").value =
        student.year;

    document.getElementById("section").value =
        student.section;

    document.getElementById("cgpa").value =
        student.cgpa;

    document.getElementById("address").value =
        student.address;


    editIndex = index;


    submitBtn.textContent =
        "Update Student";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* DELETE */

function deleteStudent(index) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this student?"
        );


    if (!confirmDelete) {

        return;
    }


    students.splice(index, 1);


    saveData();

    displayStudents();

}


/* SEARCH */

search.addEventListener("input", function() {

    const value =
        search.value
        .toLowerCase()
        .trim();


    const filtered =
        students.filter(student =>

            student.id
                .toLowerCase()
                .includes(value)

            ||

            student.name
                .toLowerCase()
                .includes(value)

            ||

            student.department
                .toLowerCase()
                .includes(value)

        );


    displayStudents(filtered);

});


/* CLEAR */

function clearForm() {

    form.reset();

    editIndex = -1;

    submitBtn.textContent =
        "Insert Student";

}


/* INITIAL DISPLAY */

displayStudents();
