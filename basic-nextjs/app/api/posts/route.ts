

export function GET() {
  // 프론트엔드에 전달할 데이터를 준다.
  return Response.json(""); // Response 로 써도 됨(임포트 안하고), 자스 언어를 제이슨 언어로 변환
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return Response.json({
    message: "SUCCESS",
    data: `${body.name} 님이 추가되었습니다.`,
  });
}
