import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'

const adapter = new FileSync(path.resolve(process.cwd(), 'db.json'))
const db = low(adapter)

db.defaults({
        users: []
    })
    .write()

export default db