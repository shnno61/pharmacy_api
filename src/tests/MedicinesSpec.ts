import { Medicine } from "../models/medicines.models";
const medicine1 = new Medicine();
describe("Medicines models", () => {
  it("test the method show in class Medicines", () => {
    expect(medicine1.show).toBeDefined();
  });
  it("test the function show and should return an expected values", () => {
    return medicine1.show("Aspirin", 50).then((ress) => {
      expect(ress.manufacturer).toBe("Bayer");
    });
  });
});
