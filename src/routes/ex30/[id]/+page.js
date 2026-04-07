import { error, redirect } from '@sveltejs/kit';

export function load({params}) {
    if (params.id === 'old-post') {
        throw redirect(307, '/notice');
    }

    const posts = { '1' : {title: '안녕'}};
    const post = posts[params.id];

    if(!post) {
        throw error(404, {
            message: '찾으시는 게시글이 삭제되었거나 없습니다.'
        });
    }

    return { post };
}