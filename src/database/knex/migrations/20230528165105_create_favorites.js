exports.up = knex =>
  knex.schema.createTable('favorites_dishes', table => {
    table.increments('id');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.integer('dish_id').notNullable().references('id').inTable('dishes').onDelete('CASCADE');

  });

exports.down = knex => knex.schema.dropTable('favorites_dishes');
