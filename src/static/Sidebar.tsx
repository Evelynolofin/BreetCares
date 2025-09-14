import Button from '../Components/reuseable/Button'
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar(){
    return (
        <>
        <div className='flex items-center flex-col'>
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
        <div>
            <div className='flex flex-col justify-center items-center'>
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
        </div>
        </>
    )
}