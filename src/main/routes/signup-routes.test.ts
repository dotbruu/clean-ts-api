import request from "supertest";
import app from "../config/app";

describe("SignUp Routes", () => {
  test("Should return an accout on success", async () => {
    await request(app)
      .post("/api/signup")
      .send({
        name: "Bruno",
        email: "bruno@email.com",
        password: "123",
        passwordConfirmation: "123",
      })
      .expect(200);
  });
});
