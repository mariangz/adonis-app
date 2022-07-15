import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async signup({ request }: HttpContextContract) {
    const signupSchema = schema.create({
      name: schema.string(),
      email: schema.string({}, [rules.email()]),
      password: schema.string(),
      confirmPassword: schema.string(),
    })

    const signupValidation = await request.validate({
      schema: signupSchema,
      messages: {
        'name.required': 'Name is required',
        'email.required': 'Email is required',
        'password.required': 'Password is required',
        'confirmPassword.required': 'Password Confirmation is required',
      },
    })
  }
  public async login({ request }: HttpContextContract) {
    return request.all()
  }
}
