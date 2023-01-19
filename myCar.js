const vechiles = [];
cars[0]= "volvo";
cars[1]= "Tesla";
cars[2]= "BMW";




const vechile1 = {
    brand: "Tesla",
    model: "model 3",
    topSpeed: 240,
  driver: "torjus",
  age: 23,
    kilometresDriven: 60.000,
  registration: Date('2019-02-03'),
  capacity: 7,
  electric: true,
  carBattery: ["park", "nutreal", "drive",],
  drive: function () {
    vechile1.electric = !vechile1.electric;
  },
};

console.log(vechile1.name); 