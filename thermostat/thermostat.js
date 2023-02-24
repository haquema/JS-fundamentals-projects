class Thermostat {
  constructor() {
    this.temp = 20;
    this.ecoMode = true
    this.maxTemp = 25
  }

  getTemperature() {
    return this.temp;
  }

  up() {
    this.temp < this.maxTemp ? this.temp ++ : this.maxTemp;
  }

  down() {
    this.temp--;
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