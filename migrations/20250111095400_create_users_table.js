/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()")); // ID dengan UUID
    table.string("name").notNullable(); // Kolom 'name'
    table.string("email").unique().notNullable(); // Kolom 'email' dengan unique constraint
    table.integer("age"); // Kolom 'age'
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Kolom 'created_at'
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
