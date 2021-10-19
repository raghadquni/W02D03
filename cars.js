// constructor function

function Cars(make, model, colour, image, registrationNumber, price) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.registrationNumber = registrationNumber;
    this.price = price;
    this.editPrice = function(newPrice) {
        this.price=newPrice
        return newPrice

    }
    this.showAll = function(){
        console.log(`car is ${this.make} model ${this.model} colour is ${this.colour} image ${this.image}, registration Number of car is ${this.registrationNumber} and finally price is ${this.price}`);
    }

}

console.log("hi");

const car1 = new Cars("Honda", "Civic" , "black ", "image", 12345, 330000)

console.log(car1.price);

car1.showAll();

car1.editPrice(500000);
console.log(car1.price);
car1.showAll();











