const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} =  require('../models/models')
const jwt = require('jsonwebtoken')

// Role
const generateJWT = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class UserController {
  async registration(req, res, next) { //next = client
    const {email, password, role} = req.body

    // Verificam daca sunt corecte introduse email sau password
    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect e-mail or password'))
    }

    // Verificam daca exista asa utilizator pe server
    const candidate = await User.findOne({where: {email}})
    if (candidate) {
      return next(ApiError.badRequest('User with this e-mail already exist'))
    }

    // Generam un nou password unde:  .hash(parola, de cate ori se face hash la parola)
    const hashPassword = await bcrypt.hash(password,5)

    // Cream utilizatorul, ii dam parametrii de mai jos.
    const user = await User.create({email, role, password: hashPassword})

    // Cream pentru utilizator un cos (pentru a putea face cumparaturi, etc.).
    const basket = await Basket.create({userId: user.id})

    // Generam un nou token (secretKey este posibil de hardcodat, doar ca mai bine in .env)
    const token = generateJWT(user.id, user.email, user.role);
    return res.json({token})
  }

  async login(req, res, next) {
    const {email, password} = req.body
    // Cautam utilizatorul in DB
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.internal('User not found'))
    }
    // Comparam parolurile
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Invalid password'))
    }
    const token = generateJWT(user.id, user.email, user.role)
    return res.json({token})
  }

  async check(req, res) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }
}

module.exports = new UserController()