import { json } from '@sveltejs/kit';

// GET 방식으 로 요청이 들어오면 실행합니다.
export function GET() {
    const data = {
        message: "반갑습니다! 이것은 API 응답입니다.",
        date: new Date().toLocaleDateString()
    };
    // 데이터를 JSON 형식으로 포장해서 보냅니다.
    return json(data);
}