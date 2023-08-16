import ReactSVG from 'react-svg';

function SvgDisplay({ svgString }) {
  const base64Svg = `data:image/svg+xml;base64,${btoa(svgString)}`;
  return <ReactSVG src={base64Svg} />;
}
