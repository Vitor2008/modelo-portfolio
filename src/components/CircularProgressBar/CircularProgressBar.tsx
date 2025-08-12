import React from 'react';
import './CircularProgressBar.css';

interface CircularProgressBarProps {
  percentage: number;
  skill: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage, skill }) => {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-skill">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e0e0e0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#007bff"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="circular-label">
        <span>{skill}</span>
        <strong>{percentage}%</strong>
      </div>
    </div>
  );
};

export default CircularProgressBar;
