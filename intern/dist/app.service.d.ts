import { InternType } from './Types/intern/intern.type';
import { InternRepository } from './intern-repository';
export declare class AppService {
    private _repository;
    constructor(_repository: InternRepository);
    findAll(): Array<InternType>;
    findOne(id: number): InternType | null;
}
