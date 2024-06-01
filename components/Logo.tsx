import Image from "next/image"


const logos = [
  { src: '/l1.png', alt: 'Logo 1' },
  { src: '/l2.png', alt: 'Logo 2' },
  { src: '/l3.png', alt: 'Logo 3' },
  { src: '/l4.png', alt: 'Logo 4' },
  { src: '/l5.png', alt: 'Logo 5' },
  { src: '/l6.png', alt: 'Logo 6' },
  { src: '/l7.png', alt: 'Logo 7' },
  { src: '/l8.png', alt: 'Logo 8' },
  { src: '/l9.png', alt: 'Logo 9' },
  { src: '/l10.png', alt: 'Logo 10' },
  { src: '/l11.png', alt: 'Logo 11' },
  { src: '/l1.png', alt: 'Logo 1' },
  { src: '/l2.png', alt: 'Logo 2' },
  { src: '/l3.png', alt: 'Logo 3' },
  { src: '/l4.png', alt: 'Logo 4' },
  { src: '/l5.png', alt: 'Logo 5' },
  { src: '/l6.png', alt: 'Logo 6' },
  { src: '/l7.png', alt: 'Logo 7' },
  { src: '/l8.png', alt: 'Logo 8' },
  { src: '/l9.png', alt: 'Logo 9' },
  { src: '/l10.png', alt: 'Logo 10' },
  { src: '/l11.png', alt: 'Logo 11' },
  
  // Add more logos here
];

const LogoSection = () => {
  return (
    <section>
        <h2 className="text-center text-xl pt-12 lg:pt-20 px-16 mb-6 mt-8 font-medium leading-8">Powering modern people ops teams around the world</h2>
        <div className="overflow-hidden whitespace-nowrap">
            <div className="flex space-x-4 gap-14 items-center justify-center animate-scroll">
            {logos.map((logo, index) => (
                <div key={index} className="w-32 h-16 flex items-center justify-center">
                <div className="relative w-24 h-24 mb-6">
                    <Image
                    src={logo.src}
                    alt={logo.alt}
                    layout="fill"
                    objectFit="contain"
                    className="filter grayscale"
                    style={{ opacity: 0.25 }}
                    />
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default LogoSection;


// const Logo = () => {
//   return (
//     <section className="text-black py-8">
//   <h2 className="text-center text-2xl mb-2 font-bold leading-8">Our Clients</h2>
//   <p className="text-center text-lg font-extralight leading-8 ">We are trusted by the world’s most innovative teams</p>
  
//   <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
//     <div className="animate-slide-left-infinite inline-block w-max">
//       <img className="mx-4 inline h-16" src="/l1.png" alt="Transistor" />
//       <img className="mx-4 inline h-16" src="l2.png" alt="Reform" />
//       <img className="mx-4 inline h-16" src="l3.png" alt="Tuple" />
//       <img className="mx-4 inline h-16" src="l6.png" alt="SavvyCal" />
//       <img className="mx-4 inline h-16" src="l4.png" alt="SavvyCal" />
//       <img className="mx-4 inline h-16" src="l5.png" alt="SavvyCal" />
//     </div>

//     <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
//       <img className="mx-4 inline h-16" src="l7.png" alt="Transistor" />
//       <img className="mx-4 inline h-16" src="l8.png" alt="Reform" />
//       <img className="mx-4 inline h-16" src="l9.png" alt="Tuple" />
//       <img className="mx-4 inline h-16" src="l1.png" alt="SavvyCal" />
//       <img className="mx-4 inline h-16" src="l2.png" alt="SavvyCal" />
//       <img className="mx-4 inline h-16" src="l3.png" alt="SavvyCal" />
//     </div>
//   </div>
// </section>
//   )
// }

// export default Logo