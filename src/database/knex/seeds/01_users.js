exports.seed = async function (knex) {

  await knex('users').del();
  await knex('users').insert([
    {
      name: 'First User',
      email: 'user@email.com',
      password: '$2a$10$q2u7xgVso1sHzfe4mBdKeu495O17Z307AXgaA9Ou.fBPeBZhGQEBO',
      admin: false,
    },
    {
      name: 'First Adm',
      email: 'adm@email.com',
      password: '$2a$10$q2u7xgVso1sHzfe4mBdKeu495O17Z307AXgaA9Ou.fBPeBZhGQEBO',
      admin: true,
    },
  ]);
};