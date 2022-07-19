import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async signup({ request }: HttpContextContract) {
    const signupSchema = schema.create({
      name: schema.string(),
      email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string({}, [rules.minLength(6)]),
      confirmPassword: schema.string(),
    })

    const signupValidation = await request.validate({
      schema: signupSchema,
      messages: {
        'name.required': 'Name is required',
        'email.required': 'Email is required',
        'email.unique': 'Email is already in use',
        'password.required': 'Password is required',
        'password.minLength': 'Min 6 characters are required',
        'confirmPassword.required': 'Password Confirmation is required',
      },
    })
    console.log(signupValidation)
    return request.all()
  }
  public async login({ request }: HttpContextContract) {
    const loginSchema = schema.create({
      email: schema.string({}, [rules.email()]),
      password: schema.string(),
    })

    const loginValidation = await request.validate({
      schema: loginSchema,
      messages: {
        'email.required': 'Email is required',
        'password.required': 'Password is required',
      },
    })
  }
}
