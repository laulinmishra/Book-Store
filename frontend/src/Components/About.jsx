// import React from 'react'
// import Title from './Title'
// import { TbTruckReturn } from 'react-icons/tb'
// import about from '../assets/book_1.png'

// const About = () => {
//   return (
//     <section className='max-padd-container py-12 xl:py-24'>
//       {/* container */}
//       <div className='flexCenter flex-col gap-16 xl:gap-8 xl:flex-row'>
//         {/* Left Side */}
//         <div className='flex-1'>
//           <Title title1={"Unveiling Our "} title2={"Store's key features!"} title1Styles={'pb-10'} paraStyles={'!block'}/>
//           <div className='flex flex-col items-start gap-y-4'>
//             <div className='flexCenter gap-x-4'>
//               <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
//                 <TbTruckReturn className='text-2xl'/>
//               </div>
//               <div>
//                 <h4 className='medium-18'>Easy Returns Process</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae inventore velit similique repellat perspiciatis molestias, consequuntur
//                 blanditiis.</p>
//               </div>
//             </div>
//             <div className='flexCenter gap-x-4'>
//               <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
//                 <TbTruckReturn className='text-2xl'/>
//               </div>
//               <div>
//                 <h4 className='medium-18'>Secure Payment Options</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae inventore velit similique repellat perspiciatis molestias, consequuntur
//                 blanditiis.</p>
//               </div>
//             </div>
//             <div className='flexCenter gap-x-4'>
//               <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
//                 <TbTruckReturn className='text-2xl'/>
//               </div>
//               <div>
//                 <h4 className='medium-18'>Live Customer Support</h4>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae inventore velit similique repellat perspiciatis molestias, consequuntur
//                 blanditiis.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right Side */}
//         <div className='flex-1 flexCenter '>
//           <div className='bg-secondaryOne flexCenter p-24 max-h-[33rem] max-w-[33rem] rounded-3xl'>
//             <img src={about} alt="aboutImg" height={244} width={244} className='shadow-2xl shadow-slate-900/50 rounded-lg' />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About


import React from 'react'
import Title from './Title'
import { TbTruckReturn } from 'react-icons/tb'
import about from '../assets/book_1.png'

const About = () => {
  return (
    <section className='max-padd-container py-12 xl:py-24'>
      {/* container */}
      <div className='flexCenter flex-col gap-16 xl:gap-8 xl:flex-row'>
        {/* Left Side */}
        <div className='flex-1'>
          <Title 
            title1={"Unveiling Our "} 
            title2={"Store's Key Features"} 
            titleStyles={'pb-4'} 
            paraStyles={'text-gray-600 leading-relaxed'} 
            paraText={'Explore features that set our bookstore apart! Enjoy seamless returns, secure payments, and round-the-clock support.'}
          />
          <div className='flex flex-col items-start gap-y-6 mt-8'>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbTruckReturn className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18'>Easy Returns</h4>
                <p>We ensure a hassle-free return process to guarantee your satisfaction.</p>
              </div>
            </div>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbTruckReturn className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18'>Secure Payments</h4>
                <p>Shop worry-free with our secure and trusted payment methods.</p>
              </div>
            </div>
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbTruckReturn className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18'>24/7 Customer Support</h4>
                <p>Our dedicated support team is here to assist you, anytime you need.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className='flex-1 flexCenter'>
          <div className='bg-secondaryOne flexCenter p-24 max-h-[33rem] max-w-[33rem] rounded-3xl'>
            <img src={about} alt="aboutImg" height={244} width={244} className='shadow-2xl shadow-slate-900/50 rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
