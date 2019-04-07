import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import debug from 'debug'
import session from 'koa-session'
import selfRouter from './routers/self'
import passport from 'koa-passport'

const app = new Koa()

app.use(cors())
app.use(bodyParser())
app.keys = [process.env.KOA_SESSION_SECRET]
app.use(session({
    key: process.env.KOA_SESSION_KEY,
    domain: process.env.KOA_SESSION_DOMAIN
}, app))
import './utils/passport'
app.use(passport.initialize())
app.use(passport.session())
app.use(logger())
app.use(selfRouter.routes())

app.listen(process.env.KOA_PORT, () => debug('koa')('Server running on http://api%s', process.env.KOA_SESSION_DOMAIN))