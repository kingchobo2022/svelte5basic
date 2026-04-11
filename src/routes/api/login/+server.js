import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const { username } = await request.json();

    // 쿠키 저장
    cookies.set('user', username, {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 24
    });

    return json({ success: true });
}
