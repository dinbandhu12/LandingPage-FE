import Image from 'next/image';
import React from 'react'


// const About: React.FC = () => {
//     return (
//     <div className='container mx-auto max-w-4xl mt-24'>
            
//             <div className='flex flex-row text-center content-center justify-center mb-2 py-6'>
//             <h1 className='text-3xl font-semibold text-gray-50 px-2 md:p-0 md:w-2/4 content-center justify-center'>
//                 At Leading, we crafting stories and defining brands
//             </h1>
//             </div>

//         {/* New row with inverse card positions */}
//         <div className='flex flex-col lg:flex-row gap-3 items-center justify-center w-full h-auto mb-2 p-2'>
//         <div className='group relative h-auto md:w-[600px] w-96 rounded-lg md:rounded-lg overflow-hidden'>
//             {/* <h1>
//                 hit there
//             </h1> */}
//             <Image src='/09.jpg' alt='Card 3' width={600} height={500} />
//         </div>
//         <div className='group relative h-auto md:w-[266px] rounded-lg md:rounded-lg overflow-hidden'>
//             <Image src='/10.jpg' alt='Card 4' width={380} height={400} />
//         </div>
//         </div>

//         <div className='flex flex-row text-center content-center justify-center py-6 mb-2'>
//             <p className='text-md text-gray-50 px-2 md:p-0 md:w-9/12 content-center justify-center'>
//             We are storytellers, weaving narratives that resonate. Our mission is to bring your ideas to life and make them shine in the digital landscape. With a blend of creativity, strategy, and technical expertise, we are committed to exceeding your expectations.
//             </p>
//         </div>
//         <div className='flex flex-row text-center content-center justify-center mb-4'>
//             <h4 className='text-black font-bold hover:underline md:text-sm hover:text-gray-50 mt-2 cursor-pointer'>LEARN MORE ABOUT US</h4>
//         </div>


//     </div>
//     );
// };

// export default About;



const Heading: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    return <h1 className={className}>{text}</h1>
};

const Paragraph: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    return <p className={className}>{text}</p>
}

const SubHeading: React.FC<{ text: string; className?: string }> =({ text, className }) => {
    return <h4 className={className}>{text}</h4>
}



const About: React.FC = () => {
    return (
        // heading
        <div className='container mx-auto max-w-4xl mt-24'>
            <div className='flex flex-row text-center content-center justify-center mb-2 py-6'>
                <Heading 
                    className='text-3xl font-semibold text-gray-50 px-2 md:p-0 md:w-2/4 content-center justify-center'
                    text='At Leading, we crafting stories and defining brands'
                />
            </div>


            {/* card */}
            <div className='flex flex-col lg:flex-row gap-3 items-center justify-center w-full h-auto mb-2 p-2'>
                <div className='group relative h-auto md:w-[600px] w-96 rounded-lg md:rounded-lg overflow-hidden'>
                    <Image src='/09.jpg' alt='Card 3' width={600} height={500} />
                </div>
                <div className='group relative h-auto md:w-[266px] rounded-lg md:rounded-lg overflow-hidden'>
                    <Image src='/10.jpg' alt='Card 4' width={380} height={400} />
                </div>
            </div>

            {/* paragraph */}
            <div className='flex flex-row text-center content-center justify-center py-6 mb-2'>
                <Paragraph 
                    className='md:text-md text-gray-50 px-2 md:p-0 md:w-9/12 content-center justify-center'
                    text='We are storytellers, weaving narratives that resonate. Our mission is to bring your ideas to life and make them shine in the digital landscape. With a blend of creativity, strategy, and technical expertise, we are committed to exceeding your expectations.'
                />
            </div>

            {/* subheading */}
            <div className='flex flex-row text-center content-center justify-center mb-4'>
                <SubHeading 
                    className='text-black font-bold hover:underline md:text-sm hover:text-gray-50 mt-2 cursor-pointer'
                    text='LEARN MORE ABOUT US'
                />
            </div>


        </div>




    )

}


export default About;