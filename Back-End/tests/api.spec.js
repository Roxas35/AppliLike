import supertest from "supertest";
import { app } from "../Routes/Connexion";

describe("API", () => {
  test("Renvoi une rêquete 200 avec comme message : Hello World", (done) => {
    supertest(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: "Hello World !" });
        done();
      });
  });

  test("Renvoi un rêquete 200 avec Envoie OK", (done) => {
    supertest(app)
      .post("/")
      .send()
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: "POST OK!" });
        done();
      });
  });
});
