class Thermostat {
  constructor() {
    this.temp = 20;
    this.ecoMode = true;
    this.maxTemp = 25;
    this.minTemp = 10;
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    this.temp < this.maxTemp ? this.temp++ : this.temp;
  }

  down() {
    this.temp > this.minTemp ? this.temp-- : this.temp;
  }

  setTemp(temp) {
    this.temp = temp;
  }

  energyUsage() {
    if (this.temp < 18) {
      return "low usage";
    } else if (this.temp <= 25) {
      return "medium usage";
    } else {
      return "high usage";
    };
  }

  setPowerSavingMode(bool) {
    this.ecoMode = bool;
    this.#updateMaxTemp();
    this.#updateTemp();
  }

  checkMode() {
    if (this.ecoMode) {
      return `Power saving mode is turned on and max temp is ${this.maxTemp}`;
    } else {
      return `Power saving mode is turned off and max temp is ${this.maxTemp}`;
    };
  }

  reset() {
    this.temp = 20
  }


  // private methods

  #updateMaxTemp() {
    this.ecoMode ? this.maxTemp = 25 : this.maxTemp = 32;
  }

  #updateTemp() {
    if (this.temp > this.maxTemp) {
      this.temp = this.maxTemp;
    } 
  }

}

module.exports = Thermostat;