import cap from "../../assets/graduation-cap 1.png"
import cap3 from "../../assets/healthcare.png"
import cap2 from "../../assets/graduation-cap 3 (2).png"
import cap4 from "../../assets/graduation-cap 4.png"
import frame4 from "../../assets/IMG_3690.png"

export default function SectionThree(){
    interface project{
        title: string;
        desc: string;
        icon: any;
    }
    const projects: project[] = [
  {
    title: "Keeping kids in school",
    desc: "We provide school bags, books, tuition, and supplies so children can learn and build their future.",
    icon: `${cap}`,
  },
  {
    title: "Feeding families with love",
    desc: "Our food drives bring essential meals to hungry families, making a warm meal easy to come by.",
    icon: `${cap2}`,
  },
  {
    title: "Supporting health and healing",
    desc: "We donate medical supplies, cover basic treatments, and support communities to care for their health.",
    icon: `${cap3}`,
  },
  {
    title: "Cleaning up our communities",
    desc: "From street cleanups to safe waste disposal, we organize programs that improve the places we live in.",
    icon: `${cap4}`,
  },
];
    return (
        <>
        <main
        className="bg-[#00979E] text-white h-[886px] max-md:py-0 max-md:text-left max-md:h-[1514.62px] flex flex-col justify-center"
        >
            <div className="max-md:pl-5 max-md:pb-8">
                <h1 className="font-medium text-center max-md:text-start text-[40px] max-md:w-[281.55px] max-md:font-semibold
                max-md:text-[24px]
                ">Breet Cares - The Giving Arm Of Breet</h1>
                <p className="text-[20px] px-[420px] max-md:w-[348px] max-md:px-0 max-md:text-[16px]">At Breet Cares, every crypto transaction becomes a
                     chance to make a difference. Here's how we give back:</p>
            </div>

            <div className="flex justify-evenly items-center max-md:flex-col">
                <div className="mt-[45px] max-md:mt-0 ">
                {projects.slice(0, 2).map((project) =>(
                    <div
                    key= {project.title}
                    className="w-[288px] h-[190px] mt-[45px] max-md:mt-0 max-md:w-[342px] max-md:h-[172px] max-md:mb-[10px]"
                    >
                        <img src={project.icon} 
                        className="pb-[16px] w-[40px] h-[40px]"
                        />
                        <h3 className="font-medium text-[20px]">{project.title}</h3>
                        <p className="text-[18px] max-md:text-[16px]">{project.desc}</p>
                    </div>
                    ))}
                </div>
                <div className="flex justify-between items-center gap-[100px] max-md:flex-col-reverse max-md:gap-0">
                    <div>
                    <img src={frame4}
                    className="rounded-[30px] w-[466px] h-[529px] mt-[50px] max-md:mt-[20px] max-md:w-[342px] max-md:h-[453.29px]
                    max-md:rounded-[20px]"
                    />
                </div>
                <div className="mt-[45px] max-md:mt-0 ">
                {projects.slice(2).map((project) =>(
                    <div
                    key= {project.title}
                    className="w-[288px] h-[190px] mt-[45px] max-md:mt-0  max-md:w-[342px] max-md:h-[172px] max-md:mb-[10px]"
                    >
                        <img src={project.icon}
                         className="pb-[16px] w-[40px] h-[40px]"
                        />
                        <h3 className="font-medium text-[20px]">{project.title}</h3>
                        <p className="text-[18px] max-md:text-[16px]">{project.desc}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </main>
        </>
    );
}
