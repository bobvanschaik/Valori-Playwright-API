import { APIRequestContext, test, expect } from '@playwright/test';

const APPID = '969437dd660b6c2251c86d58ae2458c5';
const Cities = [
    { city: 'Utrecht', expectedText: 'Provincie Utrecht' },
    { city: 'Amsterdam', expectedText: 'Amsterdam' }

let apiContext: APIRequestContext;

test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        baseURL: 'https://api.openweathermap.org'
    });
});

test.afterAll(async ({ }) => {
    await apiContext.dispose();
  });

test('Opdracht 2', async () => {
    const response = await apiContext.get(`/data/2.5/weather?q=Utrecht&appid=${APPID}`);
    
    expect(response.status()).toBe(200);
    
    const body = await response.text();
    expect(body).toContain('Provincie Utrecht');
});

test('Opdracht 3', async () => {
    const response = await apiContext.get(`/data/2.5/weather?q=Amsterdam&appid=${APPID}`);
    
    expect(response.status()).toBe(200);
    
    const body = await response.text();
    expect(body).toContain('Amsterdam');
});

const cities = [
    {name: 'Utrecht', id: 1234},
    {name: 'Amsterdam', id:4321}
    // Den Haag, {correcte id hier}
    //Groningen, {correcte id hier}
];
for (const city of cities) {
    test(`testing with ${city.name})`, async () => {
    });

}
