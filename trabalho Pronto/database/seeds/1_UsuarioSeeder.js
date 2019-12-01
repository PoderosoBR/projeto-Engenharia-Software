'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class UsuarioSeeder {
  async run() {
    const user = await Factory.model('App/Models/User').create()
    const usuario = await Database.table('users')
 
  }
}

module.exports = UsuarioSeeder
