import db from '@mineshop/database'
import debug from 'debug'

let data = {
    methods: {
        async fetchByCredential(username, password) {
            debug('core:user')('fetch user with %o', {
                username,
                password
            })
            let user = await db.get('users').find({
                username
            }).value()
            if (user.password != password) return false
            return user
        },
        async fetchById(id) {
            id = parseInt(id)
            debug('core:user')('fetch user with %o', {
                id
            })
            return await db.get('users').find({
                id
            }).value()
        },
        async fetchServers(id) {
            id = parseInt(id)
            debug('core:user')('fetch servers with %o', {
                owner: id
            })
            return await db.get('servers').filter(x => x.owner === id).value()
        },
        async create(username, password, email) {
            let users = await database.db.get('users')
            let user = users.find({
                username
            }).value()
            if (user) return {
                status: false,
                message: 'Username is already taken !'
            }
            user = users.find({
                email
            }).value()
            if (user) return {
                status: false,
                message: 'Email is already taken !'
            }
            await users.push({
                id: users.size() + 1,
                username,
                password,
                email
            }).write()
            return {
                status: true,
                message: null
            }
        },
        async editEmail(id, email) {
            id = parseInt(id)
            let users = db.get('users')
            let user = users.find({
                email
            }).value()
            if (user && user.id != id) return {
                status: false,
                message: 'Email is already taken !'
            }
            await db.get('users').find({
                id
            }).assign({
                email
            }).write()
            return {
                status: true,
                message: null
            }
        }
    }
}

export default data.methods