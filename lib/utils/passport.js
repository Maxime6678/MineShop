import passport from 'koa-passport'
import passportLocal from 'passport-local'
import db from './database'

async function fetchUser(username, password) {
    let user = await db.get('users').find({
        username
    }).value()
    if (!user) return false
    if (user.password != password) return false
    return user
}

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    let user = await db.get('users').find({
        id
    })
    done(null, user)
})

passport.use(new passportLocal.Strategy(async (username, password, done) => {
    let user = await fetchUser(username, password)
    done(null, user)
}))