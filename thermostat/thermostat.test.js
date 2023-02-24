const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe("upon initialisation", () => {
    it("returns the correct starting temperature of 20", () => {
      expect(thermostat.getTemperature()).toBe(20);
    });
    it("has power saving mode turned on by default", () => {

      expect(thermostat.checkMode()).toBe('Power saving mode is turned on and max temp is 25');

    })
  });

  describe("up()", () => {
    it("increases the temperature by 1", () => {

      thermostat.up();
      expect(thermostat.getTemperature()).toBe(21);
    });

    it("when called twice, it increases the temp by 2", () => {

      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(22);
    });

    it("doesn't increase temp above max temp in eco mode", () => {

      thermostat.setPowerSavingMode(true);
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.up();
      };
      expect(thermostat.checkMode()).toBe('Power saving mode is turned on and max temp is 25');
      expect(thermostat.getTemperature()).toBe(25);
    })

    it("doesn't increase temp above max temp", () => {

      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 15 ; i++) {
        thermostat.up();
      };
      expect(thermostat.checkMode()).toBe('Power saving mode is turned off and max temp is 32');
      expect(thermostat.getTemperature()).toBe(32);
    })
  });

  describe("down()", () => {
    it("increases the temperature by 1", () => {

      thermostat.down();
      expect(thermostat.getTemperature()).toBe(19);
    });

    it("when called twice, it increases the temp by 2", () => {

      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(18);
    });

    it("doesn't decrease temp below min temp", () => {

      for (let i = 0 ; i < 15 ; i++) {
        thermostat.down();
      };
      expect(thermostat.getTemperature()).toBe(10);
    })
  });
  
  describe("setPowerSavingMode()", () => {
    it("turns power saving mode on", () => {

      thermostat.setPowerSavingMode(true);
      expect(thermostat.checkMode()).toBe('Power saving mode is turned on and max temp is 25');
    })

    it("turns power saving mode off", () => {

      thermostat.setPowerSavingMode(false);
      expect(thermostat.checkMode()).toBe('Power saving mode is turned off and max temp is 32');
    })
    
    it("sets maximum temperature to 25 when set to true", () => {

      thermostat.setPowerSavingMode(true);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      };
      expect(thermostat.getTemperature()).toBe(25);
    })

    it("reduces temperature to 25 when set to true", () => {

      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      };
      thermostat.setPowerSavingMode(true);
      expect(thermostat.getTemperature()).toBe(25);
    })
  })

  describe("reset()", () => {
    it("resets temperature to 20 after increasing", () => {
      for (let i = 0 ; i < 5 ; i++) {
        thermostat.up();
      };
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe(20);
    })

    it("resets temperature to 20 after decreasing", () => {
      for (let i = 0 ; i < 5 ; i++) {
        thermostat.down();
      };
      thermostat.reset();
      expect(thermostat.getTemperature()).toBe(20);
    })
  })

  describe("energyUsage()", () => {
    it("returns a message of low usage correctly", () => {

      thermostat.setTemp(18);
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.down();
        expect(thermostat.energyUsage()).toBe("low usage")
      };
    })

    it("returns a message of medium usage correctly", () => {

      thermostat.setTemp(25);
      for (let i = 0 ; i < 7 ; i++) {
        expect(thermostat.energyUsage()).toBe("medium usage")
        thermostat.down();
      };
    })

    it("returns a message of high usage correctly", () => {

      thermostat.setTemp(32);
      for (let i = 0 ; i < 7 ; i++) {
        expect(thermostat.energyUsage()).toBe("high usage")
        thermostat.down();
      };
    })
  })

});
