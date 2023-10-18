import { NextResponse } from 'next/server';

export const GET = async () => {
  const commonData = {
    count: 0,
    dogName: 'dog',
  };

  return NextResponse.json({ data: commonData }, { status: 200 });
};

export const PUT = async (request: Request) => {
  const { count, dogName } = await request.json();
  updateCommon(count, dogName);

  const updateCommonData = {
    count,
    dogName,
  };

  return NextResponse.json({ data: updateCommonData });
};
export const POST = async (request: Request) => {
  const { count, dogName } = await request.json();

  const commonId = createCommon(count, dogName);

  const newCommonData = {
    count,
    dogName,
  };

  return NextResponse.json({ data: newCommonData });
};

function updateCommon(count, dogName) {}
function createCommon(count, dogName) {
  return 2;
}
