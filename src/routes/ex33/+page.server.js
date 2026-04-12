import { sessions } from "$lib/server/sessionStore";

export function load({ cookies }) {
    const sessionId = cookies.get('session_id');
    const session = sessions.get(sessionId);

    return {
        username : session ? session.username: null
    };
}
