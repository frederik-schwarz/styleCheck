
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shoes').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoes').insert([
        {id: 1, item: 'shoes', size: 'M', specification: 'Adidas sneakers', condition: 'well worn', Img: 'https://pictures.depop.com/b0/3322179/669041722_df5b11ea09d747579ef450600e6227ae/P0.jpg', price: 10},
      ]);
    });
};
