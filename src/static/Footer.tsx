import Logo from "../assets/div.nav-content-left.png"
import FB from "../assets/Facebook.png"
import Insta from "../assets/Instagram.png"
import X from "../assets/X.png"
import Ln from "../assets/LinkedIn.png"
import TT from "../assets/TikTok.png"
import TG from "../assets/Telegram.png"
import BTC from "../assets/btc.png"
import ET from "../assets/Aside.png"
import LTC from "../assets/Aside (1).png"
import Doge from "../assets/Aside (2).png"

export default function Footer(){
    interface Coin {
    name: string;
    symbol: string;
    price: string;
    change: number;
    icon: any;
  }
  const Coins: Coin[] = [
    {
        name: "BTC",
        symbol: "NGN",
        price: "101,889,185.3",
        change: -0.61,
        icon: `${BTC}`,
    },
    {
        name: "ETH",
        symbol: "NGN",
        price: "5,824,259.1",
        change: 3.25,
        icon: `${ET}`,
    },
    {
        name: "LTC",
        symbol: "NGN",
        price: "125,393.4",
        change: -0.12,
        icon: `${LTC}`,
    },
    {
        name: "DOGE",
        symbol: "NGN",
        price: "246.15",
        change: -2.37,
        icon: `${Doge}`,
    },

]
    return (
        <>
        <section
        className="flex justify-evenly text-white bg-[#022745] pt-[250px] pb-[30px] max-md:pt-[100px] max-md:pb-[20px] max-md:flex-col max-md:px-[20px]"
        >
            <div>
                <img src={Logo} 
                className="w-[96.29px] h-[32px] mb-[32px]"
                />
                <p
                className="w-[320px] h-[84px] mb-[10px]"
                >
                    Swap crypto, receive crypto and convert your crypto 
                    to cash instantly with Africa's most trusted exchange 😎
                </p>
                <a href="https://help.breet.io/en/">Email: support@breet.io</a> <br/>
                <a href="+2347043163513">Phone: +2347043163513</a>

                <div className="flex w-[264.56px] h-[28.05px] justify-between mt-[10px]">
                    <img src={FB} />
                    <img src={Insta} />
                    <img src={X} />
                    <img src={Ln} />
                    <img src={TT} />
                    <img src={TG} />
                </div>
            </div>

            <div>
                <h1
                className="text-[20px] font-semibold max-md:pt-10"
                >Resource</h1>
                <ul>
                    <li>Crypto to cash</li>
                    <li>Crypto to Crypto</li>
                    <li>Crypto Rate Calculator</li>
                    <li>Bill Payment</li>
                    <li>Market Insights</li>
                    <li>Business Invoice</li>
                    <li>VIP Desk</li>
                    <li>Help & Support</li>
                    <li>Our Blog</li>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Sitemap</li>
                </ul>
            </div>

            <div>
                <h1
                className="text-[20px] font-semibold"
                >Crypto Prices</h1>
                <ul>
                    <li>Bitcoin to Naira Price</li>
                    <li>Ethereum to Naira Price</li>
                    <li>Litcoin to Naira Price</li>
                    <li>USDT to Naira Price</li>
                    <li>Solana to Naira Price</li>
                    <li>Tron to Naira Price</li>
                    <li>Bitcoin to Cedis Price</li>
                    <li>USDT to Cedis Price</li>
                    <li>Solana to Cedis Price</li>
                    <li>BUSD to Cedis Price</li>
                    <li>Ethereum to Cedis Price</li>
                    <li>Tron to Cedis Price</li>
                </ul>
            </div>

            <div>
                <h1
                className="text-[20px] font-semibold"
                >Quick Links</h1>
                <ul>
                    <li>Sell Bitcoin</li>
                    <li>Sell Litecoin</li>
                    <li>Sell Ethereum</li>
                    <li>Sell Dogdecoin</li>
                    <li>Sell Bitcoin Cash</li>
                    <li>Sell USDT</li>
                    <li>Sell USDC</li>
                    <li>Sell Tron(TRX)</li>
                    <li>Sell Solana</li>
                    <li>Sell Binance (BUSD)</li>
                    <li>Sell Binance Coin (BNB)</li>
                    <li>Sell Avalanche (AVAX)</li>
                </ul>
            </div>
        </section>

        <div className="text-[#A5ADC0] border-t">

        </div>
        
        <section
        className="h-[24px] flex justify-between px-[110px] pt-[40px] pb-[50px] text-[#A5ADC0] bg-[#022745]
        max-md:flex-col max-md:px-[10px] max-md:justify-center"
        >
            <div className="text-[14px] max-md:mb-2">
                <p>© Copyright 2024. All rights reserved.</p>
            </div>
            <div className="flex gap-10 max-md:gap-4">
                <p className="text-[14px]">Contact Us</p>
                <p className="text-[14px]">Terms & Conditions</p>
                <p className="text-[14px]">Privacy Policy</p>
            </div>
        </section>

        <div 
            className="bg-[#022745] text-white  py-2 justify-between px-[110px] flex items-center 
            overflow-x-auto whitespace-nowrap border-t border-[#2FB1CA] gap-30 max-md:scroll-smooth"
            >
            <span className="mr-6 font-medium">Market prices</span>

                <div className="flex gap-6 max-md:gap-2">
                {Coins.map((Coin) => (
                <div key={Coin.icon} className="flex items-center gap-2 text-sm">
                    <img src={Coin.icon}
                    className="max-md:pl-6"
                    />
                    <span className="font-semibold">{Coin.name}</span>
                    <span>= {Coin.symbol}{Coin.price.toLocaleString()}</span>
                    <span
                    className={`ml-2 ${
                        Coin.change >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                    >
                    {Coin.change > 0 ? `+${Coin.change}` : Coin.change}
            </span>
                </div>
                ))}
        </div>
    </div>
        
        </>
    )
}