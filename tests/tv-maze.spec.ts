import { APIRequestContext, test, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { TvMazeClient } from '../apis/tv-maze/tv-maze-client';

test('Checkid', async ({ TvMazeClient }) => {
    const response = await TvMazeClient.getShowInformation;
    const body = await response.text();
    expect(response.status()).toBe(StatusCodes.OK);
});