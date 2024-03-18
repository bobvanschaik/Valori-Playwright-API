import { APIRequestContext } from "@playwright/test";

export class TvMazeClient {
    private readonly _context: APIRequestContext;
    
    constructor(context: APIRequestContext) {
        this._context = context;
    }

    async getSerie(name: string) {
        return await this._context.get(`/search/shows?q=${name}`);
    }

    async getShowInformation(id: number) {
        return await this._context.get(`/lookup/shows?imdb=${id}`);
    }
}