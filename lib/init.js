import db from './index'
import debug from 'debug'

export default function () {
    db.defaults({
            users: [{
                id: 1,
                username: 'admin',
                email: 'admin@mineshop.com',
                password: 'pass'
            }],
            servers: [{
                id: 1,
                name: 'MineShop',
                plan: 1,
                owner: 1
            }]
        })
        .write()

    debug('core:db')('database loaded!')
}