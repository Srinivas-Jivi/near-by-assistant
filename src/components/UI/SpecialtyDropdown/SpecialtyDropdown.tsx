import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SpecialtyDropdownProps } from '../../../types';
import { clsx } from 'clsx';

const SpecialtyDropdown: React.FC<SpecialtyDropdownProps> = ({
  specialties,
  selectedSpecialty,
  onSpecialtyChange,
  isOpen,
  onToggle,
  placeholder = 'Select Specialty',
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (isOpen) {
          onToggle();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const selectedSpecialtyName = specialties.find(s => s.id === selectedSpecialty)?.name || placeholder;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className={clsx(
          'w-full flex items-center justify-between px-4 py-3',
          'bg-white border border-gray-200 rounded-xl text-sm text-gray-700',
          'hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500',
          'focus:border-transparent shadow-sm transition-all duration-200'
        )}
      >
        <div className="flex items-center gap-2">
          <span>{selectedSpecialtyName}</span>
        </div>
        <ChevronDown 
          size={16} 
          className={clsx(
            'transform transition-transform duration-200',
            isOpen ? 'rotate-180' : ''
          )} 
        />
      </button>
      
      {isOpen && (
        <div className={clsx(
          'absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl',
          'shadow-lg max-h-60 overflow-y-auto'
        )}>
          {specialties.map((specialty) => (
            <button
              key={specialty.id}
              onClick={() => {
                onSpecialtyChange(specialty.id);
                onToggle();
              }}
              className={clsx(
                'w-full px-4 py-2.5 text-left text-sm transition-colors duration-150',
                'hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl',
                selectedSpecialty === specialty.id 
                  ? 'bg-blue-50 text-blue-600 font-medium' 
                  : 'text-gray-700'
              )}
            >
              {specialty.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecialtyDropdown;