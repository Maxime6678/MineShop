import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import debug from 'debug'

const adapter = new FileSync(path.resolve(process.cwd(), 'db.json'))
export const db = low(adapter)
export const init = function () {
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