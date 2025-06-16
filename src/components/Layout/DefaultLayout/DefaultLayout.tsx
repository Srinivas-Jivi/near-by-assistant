import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LayoutProps } from '../../../types';
import { clsx } from 'clsx';

const DefaultLayout: React.FC<LayoutProps> = ({
  title,
  children,
  onBack,
  showBackButton = false,
  extra,
  className = '',
}) => {
  return (
    <div className={clsx('flex flex-col h-full bg-gray-50', className)}>
      {/* Header */}
      {(title || showBackButton || extra) && (
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              {showBackButton && (
                <button
                  onClick={onBack}
                  className="p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <ArrowLeft size={20} className="text-gray-600" />
                </button>
              )}
              {title && (
                <h1 className="text-lg font-semibold text-gray-900 truncate">
                  {title}
                </h1>
              )}
            </div>
            {extra && (
              <div className="flex-shrink-0">
                {extra}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};  

export default DefaultLayout;