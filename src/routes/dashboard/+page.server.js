export function load( {cookies}) {
    const username = cookies.get('user');

    return {
        username: username || '손님'
    };
}
