import { test as base, request } from '@playwright/test';
import { OpenWeatherClient } from '../apis/open-weather/open-weather-client';
import { TvMazeClient } from '../apis/tv-maze/tv-maze-client';
import { AcademyPlanner } from '../apis/valori-academy-planner/valori-academyplanner';

type MyFixtures = {
    openWeatherClient: OpenWeatherClient;
    tvMazeClient: TvMazeClient;
    academyPlannerClient : AcademyPlanner;
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
    academyPlannerClient: async ({}, use) => {
        const context = await request.newContext({
            baseURL: process.env.VALORI_OUTSYSTEMS_BASE_URL,
        });
        await use(new AcademyPlanner(context));
        context.dispose();
    },
});
export { expect } from '@playwright/test';