
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', table =>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000)
        table.string('content').notNull()
        table.integer('userId').references('id')
        .inTable('users')
        table.integer('categoryId').references('id')
        .inTable('categories')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles')
};
