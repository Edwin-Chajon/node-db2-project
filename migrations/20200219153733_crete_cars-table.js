
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();

      tbl.decimal('vin').notNullable().index();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.decimal('mileage').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
