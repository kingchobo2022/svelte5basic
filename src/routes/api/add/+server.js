import { json } from '@sveltejs/kit';

export async function POST( { request }) {
    const { a, b} = await request.json();

    const result = a + b;

    return json( { sum: result });
}