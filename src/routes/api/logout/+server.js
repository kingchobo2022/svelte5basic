import { json } from '@sveltejs/kit';

export function POST({ cookies }) {
    cookies.delete('user', { path: '/'} );

    return json( {success: true });
} 
