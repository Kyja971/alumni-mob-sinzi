import { InternType } from './Types/intern/intern.type';
export declare class InternRepository {
    private _interns;
    constructor();
    findAll(): Array<InternType>;
    findOne(id: number): InternType | null;
    private populate;
}
