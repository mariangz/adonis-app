import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async signup({ request, response }: HttpContextContract) {
    return response.json('Hello World')
  }
  public async login({ request, response }: HttpContextContract) {
    return response.json('Hello World')
  }
}
