function renderRadio(radioOption) {
  return `<div class="input-container"><input type="radio">${radioOption}</div>`
}

function renderField(field) {
  let fieldHTML =  `<p class="field-label">${field.label}</p>`

  if(field.type === "radio") {
    fieldHTML += field.options.map(renderRadio).join('')
  } else if(field.type === "text") {
    fieldHTML += `<textarea></textarea>`
  }

  return fieldHTML
}

function renderSurveyCard(survey) {
   let fieldsHTML = survey.fields.map(renderField).join('')

   return `<div class="survey-card">
    <form class="survey-form">
      <h2 class="survey-label">${survey.title}</h2>
      ${fieldsHTML}
      <input type="submit" value="${survey.submitButtonText}">
    </form>
   </div>`
}

function renderSurveys(surveys) {
  let finalHTML = surveys.map(renderSurveyCard).join('')
    return `
        <div class="text-center mt-5">
          ${finalHTML}
        </div>
    `
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}
