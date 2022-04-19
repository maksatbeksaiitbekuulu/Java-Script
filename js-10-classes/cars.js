class Cars {
  constructor(carBrand, yearOfIssue, enginePower, carColor) {
    this.carBrand = carBrand;
    this.yearOfIssue = yearOfIssue;
    this.enginePower = enginePower;
    this.carColor = carColor;
  }
  showInfo() {
    return `
    Car brand:     ${this.carBrand}
    Year of issue: ${this.yearOfIssue} 
    Engine power:  ${this.enginePower} 
    Car color:     ${this.carColor} `;
  }
}
class ElectroCars extends Cars {
  constructor(carBrand, yearOfIssue, enginePower, carColor, batteryCapacity) {
    super(carBrand, yearOfIssue, enginePower, carColor);
    this.batteryCapacity = batteryCapacity;
  }

  promote() {
    super.showInfo();
    return `
    battery capacity ${this.batteryCapacity} 
    Electro сar ${this.carBrand}: Плюсы премиальных электромобилей — большой запас хода, отличная динамика и малые затраты на содержание`;
  }
}
const car = new Cars("Mercedes", "2019", "5.7", "black");
console.log(car.showInfo());

const ElectroCar = new ElectroCars(
  "Toyota",
  "2021",
  "5.7",
  "black",
  "70 кВт-ч"
);
console.log(ElectroCar.showInfo());
console.log(ElectroCar.promote());
