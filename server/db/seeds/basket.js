
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('basket').del()
    .then(function () {
      // Inserts seed entries
      return knex('basket').insert([
        {id: 1, item: 't-shirt', size: 'L', specification: 'nike running top', condition: 'well worn', Img: 'https://media.karousell.com/media/photos/products/2021/6/13/nike_run_t_shirt_1623564418_d92e0dc3_progressive.jpg', price: 5, brand: 'nike', Gender: 'M'},
        {id: 2, item: 'jeans', size: 'L', specification: 'Levis', condition: 'Mint', Img: 'https://www.cultizm.com/media/image/f6/6b/ce/1955-501-RIGID-A9264-V2_015f1edfdabe436.jpg', price: 50, brand: 'adidas', Gender: 'F'},
      ]);
    });
};
