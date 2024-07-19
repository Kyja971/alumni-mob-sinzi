import { AppService } from './app.service';
import { InternType } from './Types/intern/intern.type';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(): Array<InternType>;
    findOne(id: number): InternType;
}
