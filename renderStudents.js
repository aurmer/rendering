

function presentText(isPresent) {
  if(isPresent)
    return "Present"
  else
    return "Absent"
}

function renderStudentCard(student) {
  return `<div class="student-card ${presentText(student.isPresent).toString().toLowerCase()}">
    <h2>${student.name}</h2>
    <span class="status">${presentText(student.isPresent)}</span>
  </div>`
}

function renderStudents(students) {
  let finalHTML = students.map(renderStudentCard).join('')

    return `
        <div class="text-center mt-5">
        <h1>Roll Call!</h1>
          <div class="student-card-container">
            ${finalHTML}
          </div>
        </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}
