import { test as base, request } from '@playwright/test';
import { OpenWeatherClient } from '../apis/open-weather/open-weather-client';
import { TvMazeClient } from '../apis/tv-maze/tv-maze-client';

type MyFixtures = {
    openWeatherClient: OpenWeatherClient;
    tvMazeClient: TvMazeClient;
};

export const test = base.extend<MyFixtures>({
    openWeatherClient: async ({}, use) => {
        const context = await request.newContext({
            baseURL: process.env.OPEN_WEATHER_BASE_URL,
          });

        await use(new OpenWeatherClient(context));
        context.dispose();
    },
    tvMazeClient: async ({}, use) => {
        const context = await request.newContext({
            baseURL: process.env.TV_MAZE_API_BASE_URL,
        });
    
        await use(new TvMazeClient(context));
        context.dispose();
    },
});
export { expect } from '@playwright/test';