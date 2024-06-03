/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {}

  signup() {
    return { msg: 'Signup' };
  }

  signin() {
    return { msg: 'Signin' };
  }
}
