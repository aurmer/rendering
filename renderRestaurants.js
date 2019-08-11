function renderRestaurantCard(restaurant) {
  return `<div class="restaurant-card">
    <h2 class="restaurant-name">${restaurant.name}</h2>
    <p class="restaurant-type">${restaurant.type}</p>
    <div class="restaurant-price">${"$".repeat(restaurant.priceRating)}</div>
  </div>`
}


function renderRestaurants(restaurants) {

    let finalHTML = restaurants.map(renderRestaurantCard).join('')

    return `
        <div class="text-center mt-5">
        ${finalHTML}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}
