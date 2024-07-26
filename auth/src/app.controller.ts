import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { AuthBodyType} from './models/auth-body.type';
import { TokenType} from './models/token.type';

@Controller()
export class AppController {
  constructor(private _appService: AppService) {}

  @MessagePattern({ message: 'login' })
  login(body: AuthBodyType): TokenType | null{
    console.log('coucou du controle')
    return this._appService.login(body)
  }

  @MessagePattern({ message: 'findAll' })
  async findAll(): Promise<Array<AuthBodyType>>{
    console.log('coucou du controle')
    return await this._appService.findAll();
  }
}
