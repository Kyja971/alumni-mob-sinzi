import { AuthBodyType } from './models/auth-body.type';
import { TokenType } from './models/token.type';
import { AccountEntity } from './models/account-entity';
import { Repository } from 'typeorm';
export declare class AppService {
    private _repository;
    constructor(_repository: Repository<AccountEntity>);
    login(body: AuthBodyType): Promise<TokenType | null>;
}
