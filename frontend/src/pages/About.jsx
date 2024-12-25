import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-row md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
         <p className=''>At Forever, we believe in the power of choice, convenience, and affordability. Our intuitive website layout ensures a seamless shopping journey, complete with detailed product descriptions, high-resolution imagery, and secure payment gateways.</p>
         <p className=''>We strive to offer not only exceptional products but also unparalleled customer service, with fast delivery, easy returns, and 24/7 support. Whether you’re shopping for everyday essentials or looking for the perfect gift, Forever is your trusted partner in making every purchase count.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to bring you a curated selection of high-quality products that cater to your lifestyle needs, from fashion and beauty to home essentials and beyond.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At Forever, we take pride in offering only the finest quality products.From durable materials to reliable performance, we are committed to providing products that stand the test of time. With Forever, you can shop confidently, knowing that quality is not just a promise it is guaranted.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Shopping should be as easy and enjoyable as the products you buy. That's why Forever is designed with your convenience in mind. Our user-friendly interface allows you to browse, compare, and purchase your favorite items effortlessly.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>At Forever, your satisfaction is our top priority. Our dedicated customer service team is here to assist you every step of the way, from product inquiries to after-sales support. </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
