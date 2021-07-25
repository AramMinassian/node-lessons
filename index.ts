type EngineType = "oil-based" | "hybrid"

type Color = "white" | "black" | "gray" | "silver" | "red" |
  "blue" | "brown" | "green" | "orange" | "gold" | "yellow" | "purple"

type Doors = "regular" | "scissors" | "butterfly" | "gull wing" | "sliding" | "suicide";


interface Vehicle {
  [key: string]: any;
  brand: string;
  model: string;
  basePrice: number;
  priceFactor: number;
  color?: Color;
  engineType?: EngineType;
  enginePower?: number;
  doors?: Doors;
  decoration?: boolean;
}


// -------------- Basic Car Class -------------- //

class Car implements Vehicle {
  brand: string;
  model: string;
  basePrice = 10000;
  priceFactor = 1;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
  getPrice() {
    return this.basePrice * this.priceFactor;
  }

  getInfo() {
    console.log(
      `${this.brand} ${this.model}. Estimated price: ${this.getPrice()}$`
    )
  }
}

// -------------- Basic Decorator Class -------------- //

class Decorator implements Vehicle {
  [key: string]: any;
  brand: string;
  model: string;
  basePrice: number;
  priceFactor: number;
  color?: Color;
  engineType?: EngineType;
  enginePower?: number;
  doors?: Doors;
  decoration?: boolean

  constructor(car: Vehicle) {
    for (let key in car) {
      if (!car.hasOwnProperty(key)) continue;
      this[key] = car[key];
    }
  }

  getPrice() {
    return this.basePrice * this.priceFactor;
  }

  getInfo() {
    console.log(
      `${this.brand} ${this.model}` +
      `${this.color ? `, color-${this.color}` : ""}` +
      `${this.decoration ? ", decorated" : ""}` +
      `${this.doors ? `, doors-${this.doors}. ` : ". "}` +
      `Estimated price is ${this.getPrice()}$`
    )
  }
}


// -------------- Engine Type Adding Decorator Class -------------- //

class CarWithEngineType extends Decorator {
  engineType: EngineType = "oil-based";

  setEngineType(engineType: EngineType) {
    this.engineType = engineType;
    if (engineType === "hybrid") this.priceFactor += 1;
  }
}

// -------------- Engine Power Adding Decorator Class -------------- //

class CarWithEnginePower extends Decorator {
  enginePower = 200;

  setEnginePower(enginePower: number) {
    this.enginePower = enginePower;
    this.priceFactor += enginePower / 200;
  }
}

// -------------- Color Adding Decorator Class -------------- //

class CarWithColor extends Decorator {
  color: Color = "gray";

  setColor(color: Color) {
    this.color = color;
  }
}

// -------------- Door Adding Decorator Class -------------- //

class CarWithDoors extends Decorator {
  doors: Doors = "regular";

  setDoors(doors: Doors) {
    this.doors = doors;
    switch (doors) {
      case "scissors": this.priceFactor += 2;
        break;
      case "butterfly": this.priceFactor += 3;
        break;
      case "gull wing": this.priceFactor += 4;
        break;
      case "sliding": this.priceFactor += 3;
        break;
      case "suicide": this.priceFactor += 3;
        break;
    }
  }
}

// -------------- Decoration Adding Decorator Class -------------- //

class CarWithDecoration extends Decorator {
  decoration = false;

  setDecoration(decoration: boolean) {
    this.decoration = decoration;
    if (decoration) this.priceFactor += 1;
  }
}




// -------------- *testing* -------------- //


let car = new Car("Toyota", "Corola");

let carWithColor = new CarWithColor(car);
carWithColor.setColor("yellow");

let carWithDoors = new CarWithDoors(car);
carWithDoors.setDoors("scissors");

let carWithColorAndEngineType = new CarWithEngineType(carWithColor);
carWithColorAndEngineType.setEngineType("hybrid");


console.log("--------------------------  Car  -----------------------------");
console.log(car);
car.getInfo();


console.log("--------------------------  carWithColor  -----------------------------");
console.log(carWithColor);
carWithColor.getInfo();


console.log("--------------------------  carWithDoors  -----------------------------");
console.log(carWithDoors);
carWithDoors.getInfo()


console.log("--------------------------  carWithColorAndEngine  -----------------------------");
console.log(carWithColorAndEngineType);
carWithColorAndEngineType.getInfo();















