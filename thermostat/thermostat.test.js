const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  describe("upon initialisation", () => {
    it("returns the correct starting temperature of 20", () => {
      let this_thermostat = new Thermostat();
      temp = this.thermostat.getTemperature();
      expect(temp).toBe(20);
    });
  });
});
