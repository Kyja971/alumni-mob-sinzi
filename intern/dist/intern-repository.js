"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternRepository = void 0;
const common_1 = require("@nestjs/common");
let InternRepository = class InternRepository {
    constructor() {
        this._interns = [];
        this.populate();
    }
    findAll() {
        return this._interns;
    }
    findOne(id) {
        const result = this._interns.find((intern) => intern.id === id);
        return result ? result : null;
    }
    populate() {
        this._interns.push({
            id: 1,
            lastname: 'Jacky',
            firstname: 'hoton',
            occupation: 'Développeur',
            company: {
                id: 1,
                name: 'Aelion',
            },
            poe: {
                id: 1,
                name: 'POEC dev Mobile',
                beginAt: new Date(2024, 5, 24),
                endAt: new Date(2024, 8, 24),
            },
        });
        this._interns.push({
            id: 2,
            lastname: 'Rachid',
            firstname: 'Test',
            occupation: 'Tech lead',
            company: {
                id: 2,
                name: 'Aelion',
            },
            poe: {
                id: 2,
                name: 'POEC dev Test',
                beginAt: new Date(2022, 7, 24),
                endAt: new Date(2023, 8, 24),
            },
        });
    }
};
exports.InternRepository = InternRepository;
exports.InternRepository = InternRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], InternRepository);
//# sourceMappingURL=intern-repository.js.map