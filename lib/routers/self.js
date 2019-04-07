import Router from 'koa-router'
import passport from 'koa-passport'

const router = new Router({
    prefix: '/self'
})

let obj = [{
        type: "html",
        data: {
            "#alert-box": "Erreur de connexion"
        }
    },
    {
        type: "removeClass",
        data: {
            "#alert-box": "is-error is-success"
        }
    },
    {
        type: "addClass",
        data: {
            "#alert-box": "is-error"
        }
    },
    {
        type: "show",
        data: {
            '#alert-box': true
        }
    }

]

let obj2 = {
    type: "location",
    data: "http://dasboard.mineshop.com"
}

router.post('/login', async (ctx) => {
    if (!ctx.request.body.username) return ctx.body = obj
    if (!ctx.request.body.password) return ctx.body = obj
    return passport.authenticate('local', (err, user, info, status) => {
        if (user === false) {
            return ctx.body = obj
        } else {
            return ctx.body = obj2
        }
    })(ctx)
})

export default router