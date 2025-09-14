import GroupImg from "../../assets/GroupImage.png"
import Vector from "../../assets/Vector 18.png"

export default function SectionSix () {
    return (
        <>
        <section className="text-center text-[#022745] my-[50px] max-md:mb-[0px]">
            <div className="w-[705px] h-[332px] m-auto max-md:w-[390px] max-md:h-[167px] flex flex-col justify-center">
                <h1
                    className="w-[821px] h-[47px] font-medium text-[40px] mb-[14px]
                    max-md:w-[262.12px] max-md:h-[52px] max-md:text-[22.34px] max-md:font-semibold
                    max-md:m-auto"
                    >Powered by kind hearts and smart hands.
                </h1>
                <p
                    className="w-[821px] h-[76px] text-[20px] px-[60px] max-md:px-0 max-md:m-auto
                    max-md:w-[323.97px] max-md:h-[68px] max-md:text-[14.9px]"
                    >
                    Meet the incredible team of humans behind Breet 
                    Cares—people using tech, time, and love to make lives better.
                </p>
            </div>

            <div className="bg-[#022745]">
                    <div className="relative">
                        <img src={GroupImg}/>
                    </div>
                    <div className="absolute bottom-[-5900px] max-md:bottom-[-4200px] left-0">
                        <img src={Vector} 
                        className="w-[1684.655383480244px] h-[350px] max-md:w-[431px] max-md:h-[30px]"/>
                    </div>
            </div>
        </section>
        </>
    )
}