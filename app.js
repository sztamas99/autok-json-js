const button = document.getElementById("button");
const result = document.querySelector(".result");

button.addEventListener("click", async () => {

    const res = await fetch("cars.json");
    const data = await res.json();

    console.log(data);

    let output = "";

    data.forEach(car => {

        output += `
            <div class='car'>
            <h3>${car.brand}</h3>
            <h5>${car.type}</h5>
            <h5>${car.factoryYear}</h5>
            </div>
        
        `;

    });

    result.innerHTML = output;
    document.body.style.height = "100%";
})