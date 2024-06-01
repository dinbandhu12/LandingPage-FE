import React from 'react';
import Image from 'next/image';
import { cardContent } from '@/constants';
import Card from './Cards';


// const FeatureSection: React.FC = () => {
//   return (
//     <div className='container mx-auto max-w-4xl mt-10'>
//       <div className='flex flex-col lg:flex-row gap-6 lg:gap-6 items-center justify-center w-full h-auto p-2'>
//         <div className='group relative h-auto md:h-auto w-80 md:w-[563px] bg-slate-500 rounded-lg md:rounded-lg overflow-hidden'>
//           <Image src='/i2.jpeg' alt='Card 1' width={500} height={500} />
//           <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex flex-col items-right justify-end'>
//             <div className='transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
//               <h2 className='relative inline-block p-1 px-2 text-white ml-4 mb-4 bg-slate-700 text-xs font-bold border-2 border-customColor-01'>EDUCATION</h2>
//               <h2 className='text-white text-xl font-bold ml-4'>Future Learning</h2>
//               <p className='text-white text-sm mb-6 ml-4'>Inspiring Lifelong Learners</p>
//             </div>
//           </div>
//         </div>
//         <div className='group relative h-auto md:h-auto w-80 md:w-[700px] bg-slate-500 rounded-lg md:rounded-lg overflow-hidden'>
//           <Image src='/i6.jpeg' alt='Card 2' width={500} height={500} />
//           <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex flex-col items-right justify-end'>
//             <div className='transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
//               <h2 className='relative inline-block p-1 px-2 text-white ml-4 mb-4 bg-slate-700 text-xs font-bold border-2 border-customColor-01'>EDUCATION</h2>
//               <h2 className='text-white text-xl font-bold ml-4'>Future Learning</h2>
//               <p className='text-white text-sm mb-6 ml-4'>Inspiring Lifelong Learners</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* New row with inverse card positions */}
//       <div className='flex flex-col lg:flex-row gap-6 lg:gap-6 items-center justify-center w-full h-auto p-2'>
//         <div className='group relative h-auto md:h-auto w-80 md:w-[700px] bg-slate-500 rounded-lg md:rounded-lg overflow-hidden'>
//           <Image src='/i6.jpeg' alt='Card 3' width={500} height={500} />
//           <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex flex-col items-right justify-end'>
//             <div className='transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
//               <h2 className='relative inline-block p-1 px-2 text-white ml-4 mb-4 bg-slate-700 text-xs font-bold border-2 border-customColor-01'>EDUCATION</h2>
//               <h2 className='text-white text-xl font-bold ml-4'>Future Learning</h2>
//               <p className='text-white text-sm mb-6 ml-4'>Inspiring Lifelong Learners</p>
//             </div>
//           </div>
//         </div>
//         <div className='group relative h-auto md:h-auto w-80 md:w-[563px] bg-slate-500 rounded-lg md:rounded-lg overflow-hidden'>
//           <Image src='/i2.jpeg' alt='Card 4' width={500} height={500} />
//           <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex flex-col items-right justify-end'>
//             <div className='transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
//               <h2 className='relative inline-block p-1 px-2 text-white ml-4 mb-4 bg-slate-700 text-xs font-bold border-2 border-customColor-01'>EDUCATION</h2>
//               <h2 className='text-white text-xl font-bold ml-4'>Future Learning</h2>
//               <p className='text-white text-sm mb-6 ml-4'>Inspiring Lifelong Learners</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;


const FeatureSection: React.FC = () => {
    // Images for the second row
    const secondRowImages = ['/i5.jpeg', '/i8.jpeg'];
  
    return (
      <div className='container mx-auto max-w-4xl mt-32 mb-20'>

        {/* Header */}
        <div className='flex flex-col lg:flex-row gap-10 md:gap-20 items-start justify-center w-full h-auto px-8 lg:p-2 mb-14 md:mb-10'>
            {/* First Column */}
            <div className='flex flex-col w-full lg:w-1/2 items-start justify-start'>
                <h2 className='text-3xl font-semibold text-gray-50'>Where creativity meets strategy & innovation</h2>
            </div>
            {/* Second Column */}
            <div className='flex flex-col w-full lg:w-1/2 items-start justify-start'>
                <p className='text-gray-700 text-xl md:text-sm'>Take a glimpse into our world of creativity. From striking visuals to seamless user experiences. Explore our portfolio to see how we bring ideas to life.</p>
                <h4 className='text-black font-bold hover:underline md:text-sm hover:text-gray-50 mt-4 cursor-pointer'>SEE MORE CASE STUDIES</h4>
            </div>
        </div>

        {/* cards here */}
        <div className='flex flex-col lg:flex-row gap-6 items-center justify-center w-full h-auto p-2'>
          {cardContent.slice(0, 2).map((content, index) => (
            <Card key={index} {...content} />
          ))}
        </div>
  
        <div className='flex flex-col lg:flex-row gap-6 items-center justify-center w-full h-auto p-2'>
          {cardContent.slice(0, 2).reverse().map((content, index) => (
            <Card key={index + 2} {...content} imageSrc={secondRowImages[index]} />
          ))}
        </div>
      </div>
    );
  };
  
  export default FeatureSection;