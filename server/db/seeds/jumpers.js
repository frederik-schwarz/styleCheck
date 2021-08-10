
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jumpers').del()
    .then(function () {
      // Inserts seed entries
      return knex('jumpers').insert([
        {id: 1, item: 'jumper', size: 'S', specification: 'supreme', condition: 'dead stock', Img: 'https://images.stockx.com/images/Supreme-Box-Logo-Hooded-Sweatshirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1611195320', price: 100},
      ]);
    });
};
