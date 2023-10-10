9; //반응형 전용 device size 데이터
const size = {
  MaxWidthS: '375px',
  MaxWidthM: '425px',
  MaxWidthL: '500px',
  MaxWidthFull: '750px',
  MaxHeightS: '1000px',
  MaxHeightFull: '1624px',
};
const device = {
  MaxWidthS: `(max-width: ${size.MaxWidthS})`,
  MaxWidthM: `(max-width: ${size.MaxWidthM})`,
  MaxWidthL: `(max-width: ${size.MaxWidthL})`,
  MaxWidthFull: `(max-width: ${size.MaxWidthFull})`,
  MaxHeightS: `(max-height: ${size.MaxHeightS})`,
  MaxHeightFull: `(max-height: ${size.MaxHeightFull})`,
};
export default device;
