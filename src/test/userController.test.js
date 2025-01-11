const request = require("supertest");
const express = require("express");
const app = express();

const userService = require("../services/userService");
jest.mock("../services/userService");

app.use(express.json());

const userController = require("../controller/userController");
app.post("/users", userController.createUser);
app.get("/users", userController.getUsers);
app.get("/users/:id", userController.getUserByID);
app.put("/users/:id", userController.updateUser);
app.delete("/users/:id", userController.deleteUser);

describe("User Controller", () => {
  it("should create a new user", async () => {
    const newUser = {
      name: "John Doe",
      email: "john@example.com",
      age: 25,
    };

    userService.createUser.mockResolvedValue({
      id: "123",
      ...newUser,
    });

    const response = await request(app).post("/users").send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
    expect(response.body.age).toBe(newUser.age);
  });

  it("should get all users", async () => {
    const users = [
      { id: "123", name: "John Doe", email: "john@example.com", age: 25 },
      { id: "124", name: "Jane Doe", email: "jane@example.com", age: 28 },
    ];

    userService.getAllUsers.mockResolvedValue(users);
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(users);
  });

  it("should get a user by ID", async () => {
    const user = {
      id: "123",
      name: "John Doe",
      email: "john@example.com",
      age: 25,
    };

    userService.getUserByID.mockResolvedValue(user);

    const response = await request(app).get("/users/123");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(user);
  });

  it("should return 404 if user not found", async () => {
    userService.getUserByID.mockResolvedValue(null);

    const response = await request(app).get("/users/123");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "User not found");
  });

  it("should update a user", async () => {
    const updatedUser = {
      name: "John Updated",
      email: "johnupdated@example.com",
      age: 26,
    };

    userService.updateUser.mockResolvedValue({
      id: "123",
      ...updatedUser,
    });

    const response = await request(app).put("/users/123").send(updatedUser);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedUser.name);
    expect(response.body.email).toBe(updatedUser.email);
    expect(response.body.age).toBe(updatedUser.age);
  });

  it("should return 404 if user to update not found", async () => {
    userService.updateUser.mockResolvedValue(null);

    const response = await request(app)
      .put("/users/123")
      .send({ name: "New Name" });
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "User not found");
  });

  it("should delete a user", async () => {
    userService.deleteUser.mockResolvedValue({ id: "123" });

    const response = await request(app).delete("/users/123");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty(
      "message",
      "User deleted successfully"
    );
  });

  it("should return 404 if user to delete not found", async () => {
    userService.deleteUser.mockResolvedValue(null);

    const response = await request(app).delete("/users/123");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message", "User not found");
  });
});
