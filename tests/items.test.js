import request from "supertest";
import express from "express";
import itemsRoutes from "../src/routes/items.routes.js";

const app = express();
app.use(express.json());
app.use("/api/items", itemsRoutes);

describe("Items API", () => {
  let createdItemId;

  test("GET /api/items should return array", async () => {
    const res = await request(app).get("/api/items");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST /api/items should create item", async () => {
    const res = await request(app)
      .post("/api/items")
      .send({ name: "Test Item", description: "Test Description" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Test Item");
    createdItemId = res.body.id;
  });

  test("GET /api/items/:id should return item", async () => {
    const res = await request(app).get(`/api/items/${createdItemId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdItemId);
  });

  test("PUT /api/items/:id should update item", async () => {
    const res = await request(app)
      .put(`/api/items/${createdItemId}`)
      .send({ name: "Updated Item" });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Updated Item");
  });

  test("DELETE /api/items/:id should delete item", async () => {
    const res = await request(app).delete(`/api/items/${createdItemId}`);
    expect(res.statusCode).toBe(204);
  });

  test("GET deleted item should return 404", async () => {
    const res = await request(app).get(`/api/items/${createdItemId}`);
    expect(res.statusCode).toBe(404);
  });
});
