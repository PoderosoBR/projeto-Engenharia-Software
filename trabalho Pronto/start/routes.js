'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const User = use('App/Models/User')


//login
Route.post('login', 'UserController.login').middleware('guest');

Route.get('categoria/:email', 'UserController.categoria')

Route.post('cadastro', 'UserController.cadastro')

//paciente
Route.get('paciente/listarId/:nome', 'PacienteController.listarIdPaciente')

Route.get('paciente/listar', 'PacienteController.listarPaciente')

Route.get('paciente/nome/:nome', 'PacienteController.buscarPaciente')

Route.put('paciente/atualizar/:nome', 'PacienteController.atualizarPaciente')

Route.post('paciente/cadastrar', 'PacienteController.cadastroPaciente')




Route.get('/login', ({ view }) => {
  return view.render('login')
})

Route.get('/registro', ({ view }) => {
  return view.render('cadastro')
})


Route.get('/paciente', ({ view }) => {
  return view.render('paciente')
})
