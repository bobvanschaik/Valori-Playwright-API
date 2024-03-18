import { APIRequestContext, test, expect } from '@playwright/test';
import { TvMazeClient } from '../apis/tv-maze/tv-maze-client';

test('Checkid', async ({ TvMazeClient }) => {
    const response = await TvMazeClient;
    const body = await response.text();
    expect(response.status()).toBe(StatusCodes.OK);
});