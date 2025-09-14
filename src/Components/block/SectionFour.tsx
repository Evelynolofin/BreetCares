import Image1 from "../../assets/Monsieur BlvckAgenda-150.png"
import Image2 from "../../assets/IMG_1571.png"
import Button from "../reuseable/Button";

export default function SectionFour(){
    return (
        <>
        <main
        className="flex justify-evenly items-center h-[781px] max-md:flex-col max-md:mb-[30px]"
        >
            <div className="flex gap-[30px] items-center">
                <div>
                <div className="w-[250px] h-[531px] max-md:w-[159.3px] max-md:h-[338.01px]">
                    <img src={Image1} 
                    className="w-[250px] h-[303px] rounded-[500px] m-[20px] max-md:w-[159.3px] max-md:h-[193.08px]"
                    />
                    <div className="w-[240px] h-[203px] bg-[#FFDF5E] rounded-[17.2px] 
                    max-md:w-[159px] max-md:h-[129px] max-md:rounded-[10.96px]
                    "></div>
                </div>
            </div>
            <div className="w-[240px] h-[531px] max-md:w-[152.93px] max-md:h-[338.36px]">
                <div className="w-[240px] h-[203px] bg-[#23A094] rounded-[17.2px] rounded-tr-[500px]  
                max-md:w-[152.93px] max-md:h-[129.36px] max-md:rounded-[10.96px] max-md:rounded-tr-[318.61px]
                "></div>
                <img src={Image2} 
                    className="w-[250px] h-[303px] rounded-[17.2pxpx] rounded-br-[200px] mt-[25px] max-md:w-[152.93px] max-md:h-[193.08px]"
                    />
            </div>
            </div>

            <div className="w-[583px] h-[384px] max-md:w-[339px] max-md:h-[278px]">
                <h1
                className="w-[526px] h-[148px] font-semibold text-[64px] leading-[80px] text-[#022745]
                max-md:text-[32px] max-md:w-[259px] max-md:h-[84px] max-md:leading-[50px]"
                >You're already part of it.
                </h1>
                <p
                className="w-[583px] h-[152px] text-[24px] leading-[38px] pt-[40px] text-[#566F83] tracking-tighter
                max-md:text-[16px] max-md:w-[339px] max-md:h-[120px] max-md:leading-[24px] max-md:pt-[30px]"
                >If you've ever used Breet, you've already helped someone. 
                    That's what makes us more than just a crypto app — while you trade with ease, 
                    someone else gets a reason to smile.
                </p>
                <Button
                title="Trade Now"
                bgColor="#022745"
                textColor="white"
                className="w-[160px] h-[56px] flex justify-center rounded-[32px] py-[10px] px-[24px] m-[6px] mt-[50px]
                max-md:w-[339px] max-md:h-[44px]
                "
                />
            </div>
        </main>
        </>
    );
}