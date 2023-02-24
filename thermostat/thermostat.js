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
    if (this.temp < this.maxTemp) {
      this.temp++;
    };
  }

  down() {
    this.temp--;
  }

  setPowerSavingMode(bool) {
    this.ecoMode = bool;
    this.maxTemp = this.ecoMode ? 25 : 32;
    if (this.temp > this.maxTemp) {
      this.temp = this.maxTemp
    };
  }

  checkMode() {
    return this.ecoMode;
  }
}

module.exports = Thermostat;