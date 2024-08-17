const cars = [
    { name: "Tesla Model S", cost: 79999, length: 4970 },
    { name: "Nissan Leaf", cost: 31499, length: 4480 },
    { name: "Chevrolet Bolt EV", cost: 36620, length: 4165 },
    { name: "BMW i3", cost: 44450, length: 4011 },
    { name: "Audi e-tron", cost: 65995, length: 4901 }
];

function displayCars(carArray) {
    const carList = document.getElementById('carList');
    carList.innerHTML = ''; // Clear existing content

    carArray.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <h2>${car.name}</h2>
            <p><strong>Cost:</strong> $${car.cost.toLocaleString()}</p>
            <p><strong>Length:</strong> ${car.length} mm</p>
        `;
        carList.appendChild(carCard);
    });
}

function compareCars(property) {
    const sortedCars = [...cars].sort((a, b) => a[property] - b[property]);
    displayCars(sortedCars);
}

// Initial display
displayCars(cars);

// Sorting buttons (optional)
// Uncomment to add sorting buttons for user interaction

// const sortButtons = document.createElement('div');
// sortButtons.innerHTML = `
//     <button onclick="compareCars('cost')">Sort by Cost</button>
//     <button onclick="compareCars('length')">Sort by Length</button>
// `;
// document.body.insertBefore(sortButtons, document.getElementById('carList'));
