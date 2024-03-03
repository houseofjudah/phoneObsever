class Observer {
    constructor(callback) {
      this.callback = callback;
    }
  
    update(airtime) {
      this.callback(airtime);
    }
  }
  
  class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers(airtime) {
      this.observers.forEach(observer => observer.update(airtime));
    }
  }
  
  class Telephone extends Subject {
    constructor() {
      super();
      this.phoneNumbers = [];
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
      this.notifyObservers(`Phone number ${phoneNumber} added`);
    }
  
    removePhoneNumber(phoneNumber) {
      this.phoneNumbers = this.phoneNumbers.filter(num => num !== phoneNumber);
      this.notifyObservers(`Phone number ${phoneNumber} removed`);
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        console.log(`Dialling phone number ${phoneNumber}`);
      } else {
        console.log(`Phone number ${phoneNumber} not found`);
      }
    }

     
  }



  
  // Usage
  const telephone = new Telephone();
  
  const observer1 = new Observer(airtime => console.log(`Observer 1 : ${airtime}`));
  const observer2 = new Observer(airtime => console.log(`Observer 2 : ${airtime}`));
  
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  
  telephone.addPhoneNumber('09131918979');
  telephone.dialPhoneNumber('09131918979');
  telephone.removePhoneNumber('09131918979');
  telephone.dialPhoneNumber('09131918979');

  

    





















  