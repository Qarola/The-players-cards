const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Player, conn } = require("../../src/db.js");

const agent = session(app);
const player = {
  name: "Me encanta desarrollar",
  status: "Me encanta desarrollar",
};

describe("Player routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );

  beforeEach(() => Player.sync({ force: true }));

  describe("GET /players", () => {
    it("should get 200", () => {
      agent.post("/add").send(player); // agent library...simula los request.
      agent.get("/players").expect(200);
    }).timeout(10000);
  });
  describe("GET /players?name=abc", () => {
    it("should get 200", () =>
      agent.get("/players?name=desarrollo").expect(200)).timeout(10000);
  });
  describe("POST /add", () => {
    it("should get 200", () => {
      agent
        .post("/add")
        .send({ name: "desarrollo", status: "aplicaciones web" })
        .expect(200);
    }).timeout(10000);
  });
});
