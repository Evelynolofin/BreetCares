import Logo from '../assets/logo.png'
import Button from '../Components/reuseable/Button'
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Sidebar from '../static/Sidebar';
import Hero from '../Components/block/Hero';
import SectionTwo from '../Components/block/SectionTwo';
import SectionThree from '../Components/block/SectionThree';
import SectionFour from '../Components/block/SectionFour';
import SectionFive from '../Components/block/SectionFive';
import SectionSix from '../Components/block/SectionSix';
import Footer from '../static/Footer';

export default function Home () {
     const [toggle, setToggle] = useState(false);

     const handleToggle =() => {
    setToggle(!toggle)
   };
    return (
        <>
        <div className='flex justify-between px-20 py-5 max-md:px-7 items-center border-[#ECEEEE] border-b-1'>
            <div id="Home">
                <img src={Logo}/>
            </div>
            <div className='flex gap-8 max-md:hidden'>
                <div className='flex items-center font-medium text-[18px]'>
                    <Button
                    title='Products'
                    textColor='#022745'
                /> {<IoIosArrowDown className='text-[#022745]'/>}
                </div>
                <div className='flex items-center font-medium text-[18px]'>
                    <Button
                    title='Resources'
                    textColor='#022745'
                />
                {<IoIosArrowDown className='text-[#022745]'/>}
                </div>
                <div className='flex items-center font-medium text-[18px]'>
                    <Button
                    title='Company'
                    textColor='#022745'
                />
                {<IoIosArrowDown className='text-[#022745]'/>}
                </div>
            </div>
            <div className='flex gap-5 max-md:hidden'>
                <Button
                title='Login'
                textColor='#022745'
                className='font-light'
                />
                <Button
                title='Register'
                bgColor='#022745'
                textColor='white'
                className='px-5 font-light'
                />
            </div>
               <section className="hidden max-md:block">
            {toggle ? (
              <RxCross2
                onClick={handleToggle}
                className="size-[40px] text-[#022745] font-bold"
              />
            ) : (
              <RxHamburgerMenu
                onClick={handleToggle}
                className="size-[40px] text-[#022745] font-bold"
              />
            )}
          </section>
        </div>
            <div>{toggle && <Sidebar handleToggle={handleToggle} />}</div>

            <Hero/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <Footer/>
        </>
    )
}