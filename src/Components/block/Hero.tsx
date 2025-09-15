export default function Hero (){
    interface rate{
        id:any;
        title:string;
    }

    const rates: rate[] = [
        {
            id: "20+",
            title: "Places visited"
        },
        {
            id: "2K+",
            title: "Projects completed"
        },
        {
            id: "15k+",
            title: "Persons reached"
        },
    ]
    return (
        <>
        <div className="text-center text-[#022745]">
            <div className="px-[300px] pt-[80px] font-semibold text-[64px] leading-[72px] max-md:text-[32px] max-md:px-0
            max-md:leading-[40px] max-md:pt-[50px] max-lg:px-0">
            <h1>You trade. <span className="text-[#05A2BF] max-md:text-[#022745]">We give.</span> Someone smiles.</h1>
        </div>
        <p className="text-[22px] px-[400px] pt-2 max-md:px-10 max-md:leading-[24px] max-md:text-[16px]
        max-lg:px-[200px]">Every time you use Breet, a portion of your transaction goes towards helping someone in need.</p>
        </div>
        

        <div className="flex text-center justify-center items-center gap-10 max-md:gap-3 ">
            {rates.map((rate) => (
                <div
                key = {rate.id}
                >
                    <div>
                        <h1 className="text-[#05A2BF] font-semibold pt-10 text-[36px] max-md:text-[18px]">{rate.id}</h1>
                    <p className="text-[14px] text-[#022745] max-md:text-[12px]">{rate.title}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}