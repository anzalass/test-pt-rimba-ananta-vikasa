const {
  createUser,
  getUserByID,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../services/userService");
const { client } = require("../config/db");

jest.mock("../config/db");

describe("User Service", () => {
  describe("createUser", () => {
    it("should create a user and return the user object", async () => {
      const userData = { name: "John", email: "john@example.com", age: 30 };

      const mockResult = { rows: [{ id: "some-uuid", ...userData }] };
      client.query.mockResolvedValue(mockResult);

      const result = await createUser(userData);
      expect(result).toEqual(mockResult.rows[0]);
      expect(client.query).toHaveBeenCalledWith(expect.any(String), [
        userData.name,
        userData.email,
        userData.age,
      ]);
    });

    it("should handle errors and return undefined if query fails", async () => {
      const userData = { name: "John", email: "john@example.com", age: 30 };

      client.query.mockRejectedValue(new Error("Database error"));

      try {
        const result = await createUser(userData);
      } catch (error) {
        expect(error.message).toBe("Database error");
      }
    });
  });

  describe("getUserByID", () => {
    it("should return the user if found", async () => {
      const userID = "some-uuid";
      const mockResult = {
        rows: [
          { id: userID, name: "John", email: "john@example.com", age: 30 },
        ],
      };
      client.query.mockResolvedValue(mockResult);

      const result = await getUserByID(userID);
      expect(result).toEqual(mockResult.rows[0]);
    });

    it("should throw an error if no user is found", async () => {
      const userID = "non-existent-uuid";
      client.query.mockResolvedValue({ rows: [] });

      const result = await getUserByID(userID);
      expect(result).toBeUndefined();
    });

    it("should handle errors and return undefined if query fails", async () => {
      const userID = "some-uuid";
      client.query.mockRejectedValue(new Error("Database error"));

      try {
        await getUserByID(userID);
      } catch (error) {
        expect(error.message).toBe("Database error");
      }
    });
  });

  describe("getAllUsers", () => {
    it("should return all users", async () => {
      const mockUsers = [
        { id: "some-uuid", name: "John", email: "john@example.com", age: 30 },
        {
          id: "another-uuid",
          name: "Jane",
          email: "jane@example.com",
          age: 25,
        },
      ];
      client.query.mockResolvedValue({ rows: mockUsers });

      const result = await getAllUsers();
      expect(result).toEqual(mockUsers);
    });

    it("should handle errors and return empty array if query fails", async () => {
      client.query.mockRejectedValue(new Error("Database error"));

      try {
        await getAllUsers();
      } catch (error) {
        expect(error.message).toBe("Database error");
      }
    });
  });

  describe("updateUser", () => {
    it("should update the user and return the updated user", async () => {
      const userID = "some-uuid";
      const updatedUserData = {
        name: "John Updated",
        email: "john.updated@example.com",
        age: 35,
      };

      const mockResult = { rows: [{ id: userID, ...updatedUserData }] };
      client.query.mockResolvedValue(mockResult);

      const result = await updateUser(userID, updatedUserData);
      expect(result).toEqual(mockResult.rows[0]);
    });

    it("should handle errors and return undefined if query fails", async () => {
      const userID = "some-uuid";
      const updatedUserData = {
        name: "John Updated",
        email: "john.updated@example.com",
        age: 35,
      };

      client.query.mockRejectedValue(new Error("Database error"));

      try {
        await updateUser(userID, updatedUserData);
      } catch (error) {
        expect(error.message).toBe("Database error");
      }
    });
  });

  describe("deleteUser", () => {
    it("should delete the user and return the deleted user", async () => {
      const userID = "some-uuid";
      const mockResult = {
        rows: [
          { id: userID, name: "John", email: "john@example.com", age: 30 },
        ],
      };
      client.query.mockResolvedValue(mockResult);

      const result = await deleteUser(userID);
      expect(result).toEqual(mockResult.rows[0]);
    });

    it("should handle errors and return undefined if query fails", async () => {
      const userID = "some-uuid";
      client.query.mockRejectedValue(new Error("Database error"));

      try {
        await deleteUser(userID);
      } catch (error) {
        expect(error.message).toBe("Database error");
      }
    });
  });
});
