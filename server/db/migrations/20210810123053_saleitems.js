
exports.up = function(knex) {
    return knex.schema.createTable('salesitems', function(table) {
        table.increments('id').primary()
        table.string('item')
        table.string('size')
        table.string('specification')
        table.string('condition')
        table.string('Img')
        table.integer('price')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('salesitems')
};