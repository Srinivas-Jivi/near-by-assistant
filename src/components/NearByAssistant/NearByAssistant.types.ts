export interface CategoryButtonProps {
    onClick: () => void;
    disabled: boolean;
    isActive: boolean;
    icon: React.ElementType;
    label: string;
    activeColor: string;
  }