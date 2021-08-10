
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('t-shirts').del()
    .then(function () {
      // Inserts seed entries
      return knex('t-shirts').insert([
        {id: 1, item: 't-shirt', size: 'L', specification: 'nike running top', condition: 'well worn', Img: 'https://media.karousell.com/media/photos/products/2021/6/13/nike_run_t_shirt_1623564418_d92e0dc3_progressive.jpg', price: 5},
      ]);
    });
};
