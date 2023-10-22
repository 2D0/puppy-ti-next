<<<<<<< Updated upstream
import { NextResponse } from 'next/server';

export const middleware = (request: Request) => {
  const origin = request.headers.get('origin');
  console.log(origin);

  const response = NextResponse.next();
  response.headers.set('Access-control-Allow-Origin', '*');
  response.headers.set(
    'Access-control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  response.headers.set(
    'Access-control-Allow-Headers',
    'Content-Type, Authorization',
  );
  response.headers.set('Access-control-Allow-', '86400');

  console.log('Middleware');
  console.log(request.method);
  console.log(request.url);

  return response;
};

export const config = {
  matcher: 'api/:path*',
};
=======
// import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'
//
// // 이 함수는 `await`을 사용하는 경우 `async`로 표시될 수 있습니다.
// export const middleware = (request: NextRequest) => {
//
//   if (request.nextUrl.pathname.startsWith('/check')) {
//     return NextResponse.rewrite(new URL('/', request.url))
//   }
//
//   if (request.nextUrl.pathname.startsWith('/result')) {
//     return NextResponse.redirect(new URL('/', request.url))
//   }
// }
//
// // 자세한 내용은 아래의 "경로 일치"를 참조하세요.
// export const config = {
//   matcher: ['/api/:path*', '/check/:path*', '/result/:path*'],
// }
>>>>>>> Stashed changes
