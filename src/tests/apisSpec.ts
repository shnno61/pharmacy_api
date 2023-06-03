import supertest from "supertest";
import app from "../server";
const request = supertest(app);

describe("Medicines handlers: ", () => {
  it("(/pharmacy/medicines/<medicine_name>/<number_of_units>) => show should return a medicine informations and status code to be 200 when valid input", async () => {
    const res = await request.get("/pharmacy/medicines/Aspirin/200/");

    expect(res.status).toBe(200);

    expect(res.body.status).toBe("available");
  });

  it("(/pharmacy/medicines/<medicine_name>/<number_of_units>) => show should return status code to be 404 when invalid input", async () => {
    const res = await request.get("/pharmacy/medicines/Aspirinoo/200/");

    expect(res.status).toBe(404);
  });

  it("(/pharmacy/medicines/<any incorrect path >) => show should return status code to be 500 when invalid url", async () => {
    const res = await request.get("/pharmacy/medicines/Aspirinoo/");

    expect(res.status).toBe(500);
  });
});
