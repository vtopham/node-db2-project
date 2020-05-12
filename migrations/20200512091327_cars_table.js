
exports.up = function(knex) {
  return knex.scema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('VIN', 17)
        .notNullable();
    tbl.string('Make', 20)
        .notNullable();
    tbl.string('Model', 20)
        .notNullable();
    tbl.integer('Mileage')
        .notNullable();
    tbl.string('Title Status');
    tbl.string('Transmission Type');
  })
};

exports.down = function(knex) {
  return knex.schma.dropTableIfExists('cars');
};
