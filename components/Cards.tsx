import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  subtitle: string;
  description: string;
  widthClass: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText, title, subtitle, description, widthClass }) => {
  return (
    <div className={`group relative h-auto md:h-auto ${widthClass} bg-slate-500 rounded-lg md:rounded-lg overflow-hidden`}>
      <Image src={imageSrc} alt={altText} width={500} height={500} />
      <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex flex-col items-right justify-end'>
        <div className='transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
          <h2 className='relative inline-block p-1 px-2 text-white ml-4 mb-4 bg-slate-700 text-xs font-bold border-2 border-customColor-01'>{title}</h2>
          <h2 className='text-white text-xl font-bold ml-4'>{subtitle}</h2>
          <p className='text-white text-sm mb-6 ml-4'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
