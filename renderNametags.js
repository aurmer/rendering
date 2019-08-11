function renderNametag(name) {
  return `<div class="name-card">
    <div class="name-card-banner">
      Hello, my name is:
    </div>
    <div class="name-card-label">
      ${name}
    </div>
  </div>`
}


function renderNametagArray(nametags) {
  let finalHTML = nametags.map(renderNametag).join('')
  return `
      <div class="text-center mt-5">
        ${finalHTML}
      </div>
  `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametagArray(nametagsAbstraction);

}
