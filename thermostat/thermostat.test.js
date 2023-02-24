const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  describe("upon initialisation", () => {
    it("returns the correct starting temperature of 20", () => {
      let thermostat = new Thermostat();
      temp = thermostat.getTemperature();
      expect(temp).toBe(20);
    });
  });
});
