
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {'VIN': '12345', 'Make': "Ford", 'Model': "Taurus", 'Mileage': 100, 'Title Status': 'Salvaged', 'Transmission Type': 'Manual'},
        {'VIN': '67890', 'Make': "Honda", 'Model': "civic", 'Mileage': 200, 'Title Status': 'New', 'Transmission Type': 'Automatic'}
        
      ]);
    });
};
