import { SvgProps } from "@/types/svgs";

const StarSVG: React.FC<SvgProps> = ({ className, fillColor = "#FFC633" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      className={className}
      fill="none"
    >
      <path
        d="M9.42587 0.166138L12.0703 5.86028L18.3029 6.61566L13.7046 10.8902L14.9122 17.0512L9.42587 13.9989L3.93958 17.0512L5.14716 10.8902L0.548871 6.61566L6.78148 5.86028L9.42587 0.166138Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default StarSVG;
