export function load( {params} ) {
    const blogPosts = {
        '1' : { title: '스벨트 5가 좋은 이유', content: '룬($state)이 너무 편해요'},
        '2' : { title: '타입스크립트 입문', content: '빨간 줄이 이제 안 무서워요.'}
    };

    const post = blogPosts[params.id];

    return {
        post: post || { title: '없는 글', content: '내용이 없습니다.' }
    };
}