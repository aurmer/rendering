function renderCircle(circle) {
  return `<div class="circle" style="background-color:${circle.color};height:${circle.radius}px;width:${circle.radius}px;"></div>`
}


function renderCircles(circles) {
  let finalHTML = circles.map(renderCircle).join("")

    return `
        <div class="text-center mt-5 circle-container">
          ${finalHTML}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}
