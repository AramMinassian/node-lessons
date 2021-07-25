var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(brand, model) {
        this.basePrice = 10000;
        this.priceFactor = 1;
        this.brand = brand;
        this.model = model;
    }
    Car.prototype.getPrice = function () {
        return this.basePrice * this.priceFactor;
    };
    Car.prototype.getInfo = function () {
        console.log(this.brand + " " + this.model + ". Estimated price: " + this.getPrice() + "$");
    };
    return Car;
}());
var Decorator = (function () {
    function Decorator(car) {
        for (var key in car) {
            if (!car.hasOwnProperty(key))
                continue;
            this[key] = car[key];
        }
    }
    Decorator.prototype.getPrice = function () {
        return this.basePrice * this.priceFactor;
    };
    Decorator.prototype.getInfo = function () {
        console.log(this.brand + " " + this.model +
            ("" + (this.color ? ", color-" + this.color : "")) +
            ("" + (this.decoration ? ", decorated" : "")) +
            ("" + (this.doors ? ", doors-" + this.doors + ". " : ". ")) +
            ("Estimated price is " + this.getPrice() + "$"));
    };
    return Decorator;
}());
var CarWithEngineType = (function (_super) {
    __extends(CarWithEngineType, _super);
    function CarWithEngineType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.engineType = "oil-based";
        return _this;
    }
    CarWithEngineType.prototype.setEngineType = function (engineType) {
        this.engineType = engineType;
        if (engineType === "hybrid")
            this.priceFactor += 1;
    };
    return CarWithEngineType;
}(Decorator));
var CarWithEnginePower = (function (_super) {
    __extends(CarWithEnginePower, _super);
    function CarWithEnginePower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enginePower = 200;
        return _this;
    }
    CarWithEnginePower.prototype.setEnginePower = function (enginePower) {
        this.enginePower = enginePower;
        this.priceFactor += enginePower / 200;
    };
    return CarWithEnginePower;
}(Decorator));
var CarWithColor = (function (_super) {
    __extends(CarWithColor, _super);
    function CarWithColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = "gray";
        return _this;
    }
    CarWithColor.prototype.setColor = function (color) {
        this.color = color;
    };
    return CarWithColor;
}(Decorator));
var CarWithDoors = (function (_super) {
    __extends(CarWithDoors, _super);
    function CarWithDoors() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.doors = "regular";
        return _this;
    }
    CarWithDoors.prototype.setDoors = function (doors) {
        this.doors = doors;
        switch (doors) {
            case "scissors":
                this.priceFactor += 2;
                break;
            case "butterfly":
                this.priceFactor += 3;
                break;
            case "gull wing":
                this.priceFactor += 4;
                break;
            case "sliding":
                this.priceFactor += 3;
                break;
            case "suicide":
                this.priceFactor += 3;
                break;
        }
    };
    return CarWithDoors;
}(Decorator));
var CarWithDecoration = (function (_super) {
    __extends(CarWithDecoration, _super);
    function CarWithDecoration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decoration = false;
        return _this;
    }
    CarWithDecoration.prototype.setDecoration = function (decoration) {
        this.decoration = decoration;
        if (decoration)
            this.priceFactor += 1;
    };
    return CarWithDecoration;
}(Decorator));
var car = new Car("Toyota", "Corola");
var carWithColor = new CarWithColor(car);
carWithColor.setColor("yellow");
var carWithDoors = new CarWithDoors(car);
carWithDoors.setDoors("scissors");
var carWithColorAndEngineType = new CarWithEngineType(carWithColor);
carWithColorAndEngineType.setEngineType("hybrid");
console.log("--------------------------  Car  -----------------------------");
console.log(car);
car.getInfo();
console.log("--------------------------  carWithColor  -----------------------------");
console.log(carWithColor);
carWithColor.getInfo();
console.log("--------------------------  carWithDoors  -----------------------------");
console.log(carWithDoors);
carWithDoors.getInfo();
console.log("--------------------------  carWithColorAndEngine  -----------------------------");
console.log(carWithColorAndEngineType);
carWithColorAndEngineType.getInfo();
//# sourceMappingURL=index.js.map