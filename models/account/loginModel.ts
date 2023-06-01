import { Schema, models, model } from "mongoose"

const loginModel = new Schema({
  email: String,
  password: String,
})

const Login = models.Login || model("account", loginModel)

export default Login
