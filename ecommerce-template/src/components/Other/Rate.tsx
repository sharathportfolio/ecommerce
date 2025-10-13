import React from "react";
import { FaStar } from "react-icons/fa";

interface RateProps {
  currentRate?: number;
  size: number;
}

const Rate: React.FC<RateProps> = ({ currentRate = 0, size }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FaStar
      key={i}
      size={size}
      color={i < currentRate ? "#ECB018" : "#9FA09C"}
    />
  ));

  return <div className="rate flex gap-1">{stars}</div>;
};

export default Rate;
