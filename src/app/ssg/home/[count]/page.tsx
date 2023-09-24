export const generateStaticParams = async () => {
  return {count:0}
}

export const fetchData(params: {count: number}){
  const resolve = await fetch(
    `/`
  );
}