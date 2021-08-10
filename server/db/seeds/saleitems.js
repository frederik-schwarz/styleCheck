
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('salesitems').del()
    .then(function () {
      // Inserts seed entries
      return knex('salesitems').insert([
        {id: 1, item: 'shoes', size: 'M', specification: 'Adidas sneakers', condition: 'well worn', Img: 'https://pictures.depop.com/b0/3322179/669041722_df5b11ea09d747579ef450600e6227ae/P0.jpg', price: 10},
        {id: 2, item: 't-shirt', size: 'L', specification: 'nike running top', condition: 'well worn', Img: 'https://media.karousell.com/media/photos/products/2021/6/13/nike_run_t_shirt_1623564418_d92e0dc3_progressive.jpg', price: 5},
        {id: 3, item: 'jumper', size: 'S', specification: 'supreme', condition: 'dead stock', Img: 'https://images.stockx.com/images/Supreme-Box-Logo-Hooded-Sweatshirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1611195320', price: 100},
        {id: 4, item: 'jeans', size: 'L', specification: 'Levis', condition: 'Mint', Img: 'https://www.cultizm.com/media/image/f6/6b/ce/1955-501-RIGID-A9264-V2_015f1edfdabe436.jpg', price: 50},
      ]);
    });
};
