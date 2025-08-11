import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  skill: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
