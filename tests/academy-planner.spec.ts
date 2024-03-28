import { get } from 'http';
import { expect, test } from './my-test';
import { StatusCodes } from 'http-status-codes';

test('Retrieve Training', async ({ academyPlannerClient }))
    const

    async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // Adjust headers as needed
                // Additional headers if required
            },
            // You can add other options like credentials, mode, etc. here
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}