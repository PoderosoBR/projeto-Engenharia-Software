'use strict'

/*
|--------------------------------------------------------------------------
| PacienteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class PacienteSeeder {
  async run() {
    const user = await Factory.model('App/Models/Paciente').create()
    const usuario = await Database.table('pacientes')

  }
}

module.exports = PacienteSeeder
