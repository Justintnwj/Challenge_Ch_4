import DataMobil from "/data/cars.json" assert { type: "json" };
import Car from "/scripts/Car.js";

const result = document.getElementById("result");

DataMobil.forEach((car) => {
  const newCar = new Car(car.model, car.manufacture);
  const newDiv = document.createElement("div");

  newDiv.innerHTML = newCar.render();
  result.appendChild(newDiv);
});
