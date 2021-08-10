
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pants').del()
    .then(function () {
      // Inserts seed entries
      return knex('pants').insert([
        {id: 1, item: 'jeans', size: 'L', specification: 'Levis', condition: 'Mint', Img: 'https://www.cultizm.com/media/image/f6/6b/ce/1955-501-RIGID-A9264-V2_015f1edfdabe436.jpg', price: 50},
      ]);
    });
};
