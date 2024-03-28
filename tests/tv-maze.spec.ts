import { test, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';

test('Retrieve show', async ({ tvMazeClient }) => {
    const response = await tvMazeClient.getSerie('breaking bad');
    const body = await response.text();
    expect(response.status()).toBe(StatusCodes.OK);
});