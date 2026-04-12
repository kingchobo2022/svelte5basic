import { json } from '@sveltejs/kit';
import { createSession, sessions } from '$lib/server/sessionStore';

export async function POST({ request, cookies }) {
    const { username } = await request.json();

    if(!username) return json( {success : false }, {status: 400});

    const sessionId = createSession(username);

    cookies.set('session_id', sessionId, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60
    });    

    return json({success: true});
}

export async function DELETE({ cookies }) {
    const sessionId = cookies.get('session_id');
    if(sessionId) {
        sessions.delete(sessionId);
        cookies.delete('session_id', {path: '/'});
    }
    return json({success: true});
}