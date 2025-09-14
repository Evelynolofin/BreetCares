import frame1 from "../../assets/IMG_1594.png"
import frame2 from "../../assets/Monsieur BlvckAgenda-146.png"
import frame3 from "../../assets/Monsieur BlvckAgenda-147.png"
import frame4 from "../../assets/frame 4.png"
import Button from "../reuseable/Button";
import container from "../../assets/IMG_1607.png"

export default function SectionTwo () {
    return(
        <>
        <div className="flex justify-between gap-5 items-center my-20 max-md:gap-3 max-md:my-15">
            <img src={frame1} className="w-[250px] h-[357px] rounded-[17.2px] rounded-br-[200px] max-md:hidden"/>
            <div className="w-[250px] h-[357px] bg-[#FF833B] rounded-[17.2px]
            rounded-br-[200px] max-md:hidden"></div>
            <img src={frame2} className="w-[250px] h-[357px] rounded-[17.2px] max-md:hidden"/>
            <div className="w-[250px] h-[357px] bg-[#DE46A9] rounded-[500px] max-md:hidden"></div>
            <img src={frame3} className="w-[250px] h-[357px] rounded-[17.2px] rounded-bl-[120px] max-md:w-[132.35px] max-md:h-[189px] max-md:rounded-[9.1px]
            max-md:rounded-bl-[63.53px]"/>
            <div className="w-[250px] h-[357px] bg-[#F59E0C] rounded-[17.2px]
            rounded-tl-[200px] max-md:w-[132.35px] max-md:h-[189px] max-md:rounded-[9.1px] max-md:rounded-tl-[105.88px]"></div>
            <img src={frame4} className="w-[250px] h-[357px] hidden max-md:block max-md:w-[132.35px] max-md:h-[189px]
            max-md:rounded-[9.1px] max-md:rounded-br-[105.88px]"/>
        </div>

        <section
        className="flex justify-evenly items-center py-[100px] max-md:flex-col max-md:py-0"
        >
            <div>
                <h1 
                className="font-semibold text-[64px] w-[579px] pr-[250px] text-[#022745]
                max-md:w-[339px] max-md:text-[32px] max-md:pr-[180px]"
                >
                    No cost. No catch.
                </h1>
                <h1 
                className="font-semibold text-[64px] w-[579px] pr-[150px] text-[#022745]
                max-md:w-[339px] max-md:text-[32px] max-md:pr-0
                ">Just Impact.</h1>
                <p className="text-[24px] w-[579px] text-[#566F83]
                max-md:w-[339px] max-md:text-[16px]
                ">
                    You don't pay more. You don't have to do anything extra. You trade with Breet; 
                    we take a slice of our revenue and donate to causes that matter. 
                </p>
                <Button
                title="Register on Breet"
                bgColor="#022745"
                textColor="white"
                className="w-[185px] h-[56px] flex justify-center font-medium text-[16px] mt-6
                max-md:w-[339px] max-md:h-[44px]
                "
                />
            </div>
            <div>
                <img src={container} 
                className="w-[499px] h-[478px] max-md:w-[339px] rounded-[41.48px] max-md:h-[340px] max-md:mt-10
                max-md:rounded-b-none max-md:rounded-[14px]"
                />
            </div>
        </section>
        </>
    );
}