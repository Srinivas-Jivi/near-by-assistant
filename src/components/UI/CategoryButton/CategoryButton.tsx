import React from 'react';
import { CategoryButtonProps } from '../../../types';
import { clsx } from 'clsx';

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isActive,
  onClick,
  disabled = false,
}) => {
  const { icon: Icon, label, color } = category;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex-1 flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 min-h-[80px]',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        isActive ? [
          `bg-${color}-50 text-${color}-600 shadow-sm`,
          `focus:ring-${color}-500`
        ] : [
          'hover:bg-gray-50 text-gray-600',
          'focus:ring-gray-300'
        ],
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      <div className={clsx(
        'p-3 rounded-full transition-colors duration-200',
        isActive ? `bg-${color}-100` : 'bg-gray-100'
      )}>
        <Icon size={24} />
      </div>
      <span className="text-sm font-medium text-center leading-tight">{label}</span>
    </button>
  );
};

export default CategoryButton;