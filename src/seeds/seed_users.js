/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        { name: "Alice", email: "alice@example.com", age: 25 },
        { name: "Bob", email: "bob@example.com", age: 30 },
      ]);
    });
};
