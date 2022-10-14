// exports.up = (knex) =>
//   knex.schema.createTable("urls", (table) => {
//     table.text("url").unique().notNullable();
//   });

exports.up = function (knex) {
  return knex.schema.createTable("urls", function (table) {
    table.increments("id");
    table.text("url").notNullable();
    table.float("shortString").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("urls");
};
