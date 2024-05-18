// FilterButton.tsx
import { MouseEventHandler } from 'react';
import Image from "next/image";

interface FilterButtonProps {
  toggleFilter?: MouseEventHandler<HTMLButtonElement>;
  imageSrc: string; 
  buttonText: string; 
}

export default function FilterButton({ toggleFilter, imageSrc, buttonText }: FilterButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (toggleFilter) {
      toggleFilter(event);
    }
  };

  return (
    <button
      className="rounded-lg border-[1.5px] border-opacity-70 flex justify-center items-center px-3 py-2 gap-2"
      onClick={handleClick}
    >
      <Image
        src={imageSrc} 
        alt="filter-icon"
        height={20}
        width={20}
      />
      <p className="text-sm">{buttonText}</p> 
    </button>
  );
}
