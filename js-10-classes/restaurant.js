

// class Restaurant {
//   constructor(name, cusineType) {
//     this.name = name;
//     this.cusineType = cusineType;
//     this.served = 0;
//   }

//   showInfo() {
//     return `${this.name} is a restaurant of ${this.cusineType} meal.`;
//   }

//   isOpen() {
//     let currentHour = new Date().getHours();
//     let currentDay = new Date().getDay();

//     if (currentDay === 6 || currentDay === 0) {
//       return `${this.name} is closed`;
//     } else {
//       if (currentHour >= 9 && currentHour < 22) {
//         return `${this.name} is open`;
//       } else {
//         return `${this.name} is closed`;
//       }
//     }
//   }
//   serve() {
//     return (this.served += 1);
//   }
//   setServed(num) {
//     return (this.served += num);
//   }
//   showTotalServed() {
//     return `Show total served: ${this.served} `;
//   }
// }

// const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");
// console.log(beshBarmak.showInfo());
// console.log(beshBarmak.isOpen());

// console.log(beshBarmak.serve());
// console.log(beshBarmak.setServed(10));
// console.log(beshBarmak.showTotalServed());
