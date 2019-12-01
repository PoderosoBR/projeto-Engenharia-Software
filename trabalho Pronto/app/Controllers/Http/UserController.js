'use strict'

const User = use('App/Models/User')

class UserController {

    async login({ auth, request }) {
        const { email, password } = request.all();
        const usuario = await auth.attempt(email, password);

        return usuario;
    }


    async categoria({ params }) {
        const user = await User
            .query()
            .where('email', '=', ('email', params.email))
            .fetch()
        return user
    }

    async cadastro({ request }) {
        const userData = request.only(['nome', 'matricula', 'email', 'password', 'categoria'])
        const user = await User.create(userData)
        return user
    }
}

module.exports = UserController
