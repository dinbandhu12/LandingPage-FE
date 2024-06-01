import { reviewContent } from '@/constants'
import Image from 'next/image'
import React from 'react'




// const Review = () => {
//   return (
//     <div>
//         {/* heading */}
//         <div className='container mx-auto max-w-4xl my-24'>
//             <div className='flex flex-row text-center content-center justify-center mb-2 py-6'>
//                 <h1 className='text-3xl font-semibold text-gray-50 px-2 md:p-0 md:w-2/4 content-center justify-center'>
//                     Words of appreciation <br /> Our client's successful stories
//                 </h1>
//             </div>
//         </div>

//         {/* cards */}
//         <div className="max-w-sm mx-auto h-80 p-10 rounded-lg shadow-lg bg-sky-50 mb-6">
//             <div className="flex items-center space-x-4 mb-4">
//                 {/* <img 
//                     className="w-16 h-16 rounded-full"
//                     src="/c1.png" 
//                     alt="Lily Grace"
//                 /> */}
//                 <Image src="/c1.png" alt="Lily Grace" width={64} height={64} className="w-16 h-16 rounded-full" />
//                 <div>
//                     <h2 className="text-xl font-bold">Lily Grace</h2>
//                     <p className="text-gray-600 text-xs">Marketing Director, Tech Innovators Inc.</p>
//                 </div>
//             </div>
//             <p className="text-gray-800 pt-4">
//                 Working with Landing was a game-changer for us. Their expertise in UX/UI design transformed our user experience, resulting in a 30% increase in user engagement. We couldn't be happier!
//             </p>
//         </div>

//     </div>

    
//   )
// }

// export default Review

const ReviewCard = ({ reviewContent }: { reviewContent: any }) => (
    <div>
        {/* heading here */}
        <div className='max-w-sm mx-auto p-10 mt-10 rounded-lg shadow-lg bg-sky-50 mb-6'>
            <div className='flex items-center space-x-4 mb-4'>
                <img src={reviewContent.imageSrc} alt={reviewContent.name} className='w-16 h-16 rounded-full' />
                <div>
                    <h2 className='text-xl font-bold'> {reviewContent.name} </h2>
                    <p className='text-gray-600 text-xs'> {reviewContent.position} </p>
                </div>
            </div>
            <p className='text-gray-800 pt-4'>
                {reviewContent.feedback}
            </p>
        </div>
    </div>
);

const Review = () => {
    return (
        <div className='overflow-hidden'>
            <div className='container mx-auto max-w-4xl mt-20'>
            <div className='flex flex-row text-center content-center justify-center'>
                <h1 className='text-3xl font-semibold text-gray-50 px-2 md:p-0 md:w-2/4 content-center justify-center'>
                    Words of appreciation <br /> Our client's successful stories
                </h1>
            </div>
        </div>
            <div className='flex animate-marki'>
                {reviewContent.map((content, index) => (
                    <div key={index} className='flex-lg flex-md flex-sm'>
                        <ReviewCard reviewContent={content} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;