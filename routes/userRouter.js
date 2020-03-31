const express = require("express")
const userRouter = express.Router();



userRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Contenr-Type", 'text/plain')
    next()

  }) // dont add semi-colon
  .get((req, res, next) => {
    res.end('user get requset')
  })
  .post((req, res, next) => {
    res.end('user post request')
  })

  .put((req, res, next) => {
    res.statusCode = 403
    res.end('put operation not supported')
  })

  .delete((req, res, next) => {
    res.end('deleting all users')
  }); // add semi-colon at the end

// for users/id
userRouter.route('/:userId')
  .get((req, res, next) => {
    res.end(`user/ ${userId}`)
  })

  .post((req, res, next) => {
    res.statusCode = 403
    res.end('operation not supported')
  })

  .put((req, res, next) => {
    res.write('updating the user' + '\n')

    res.end(`user updation ${userId}`)
  })

  .delete((req, res, next) => {
    res.end(`will delete user with an id ${userId}`)
  })



module.exports = userRouter;