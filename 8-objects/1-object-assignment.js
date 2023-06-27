// 1. Create an object for your dream vehicle
//    Give it a minimum of 6 key-value pairs
//    This object should contain many datatypes (string, number, boolean, null, array)
const dreamVehicle = {
    make: "Lamborghini",
    model: "Revouleto",
    year: 2023,
    isElectric: false,
    features: ["turbocharged engine", "all-wheel drive", "carbon fiber body"],
    owner: null,
    isTurnedOn: false
  };
  
  // 2. Using dot-notation, log to the console 3 properties from the previous object
  console.log(dreamVehicle.make);
  console.log(dreamVehicle.model);
  console.log(dreamVehicle.year);
  
  // 3. Using bracket-notation, log to the console 3 properties from the previous object
  console.log(dreamVehicle["isElectric"]);
  console.log(dreamVehicle["features"]);
  console.log(dreamVehicle["owner"]);
  
  // 4. Try and log a property that doesn't already exist - what output do we get?
  console.log(dreamVehicle.color); // Output: undefined
  
  // 5. Add a new key-value pair to the vehicle
  dreamVehicle.color = "black";
  
  // 6. Using bracket-notation, update a property on the vehicle
  dreamVehicle["year"] = 2024;
  
  // 7. Using dot-notation, update a property on the vehicle
  dreamVehicle.owner = "Josh";
  
  // 8. Create a method for turning your vehicle on
  dreamVehicle.turnOn = function() {
    if (!this.isTurnedOn) {
      this.isTurnedOn = true;
      console.log("The vehicle is now turned on");
    } else {
      console.log("The vehicle is already on");
    }
  };
  
  // 9. Create a method for turning your vehicle off
  dreamVehicle.turnOff = function() {
    if (this.isTurnedOn) {
      this.isTurnedOn = false;
      console.log("The vehicle is now turned off");
    } else {
      console.log("The vehicle is already off");
    }
  };
  
  // 10.
  //     a. Check if your vehicle is on (it should be off)
  console.log("Vehicle status:", dreamVehicle.isTurnedOn ? "On" : "Off");
  
  //     b. Start your vehicle
  dreamVehicle.turnOn(); // Output: The vehicle is now turned on.
  
  //     c. Check if your vehicle is on (it should be on)
  console.log("Vehicle status:", dreamVehicle.isTurnedOn ? "On" : "Off");
  
  //     d. Stop your vehicle
  dreamVehicle.turnOff(); // Output: The vehicle is now turned off.
  
  //     e. Check if your vehicle is on (it should be off)
  console.log("Vehicle status:", dreamVehicle.isTurnedOn ? "On" : "Off");
  