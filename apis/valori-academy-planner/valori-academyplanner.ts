import { APIRequestContext, APIResponse } from "@playwright/test";

export class AcademyPlanner {
    private readonly _context: APIRequestContext;

    constructor(context: APIRequestContext) {
        this._context = context;
    }
}