import { AppService } from './app.service';
import { AuthBodyType } from './models/auth-body.type';
import { TokenType } from './models/token.type';
export declare class AppController {
    private _appService;
    constructor(_appService: AppService);
    login(body: AuthBodyType): TokenType | null;
    findAll(): Promise<Array<AuthBodyType>>;
}
