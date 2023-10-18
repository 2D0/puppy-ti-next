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
