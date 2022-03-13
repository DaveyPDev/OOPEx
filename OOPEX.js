class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log('Beep!')
    }
    toString() {
        console.log(` My first vehicle was a ${this.year} ${this.make} ${this.model} `)
    }
}
class Car extends Vehicle{
   numWheels() {
       console.log(4)
   }
        
}

class Motorcycle extends Vehicle {
    revEngine() {
        console.log(' VROOM!!! ')
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
     
    }

  
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return 'Only Vehicles allowed!'
        }
        if(this.vehicles.length >= this.capacity) {
            return 'Sorry we"re full'
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle added!'
    }
    
}