import logo from '../../assets/images/section1.png';
import { FiPhoneCall } from "react-icons/fi";
import { Button } from '../../components/Button/Button'
import images from '../../assets/images/images-section1.png';
export const Section1 = () => {
    return (
        <>
            <div className="pb-[80px]" >
                <div className="container mx-[auto]">
                    <div className="flex items-center justify-between">
                        {/* content left */}
                        <div className="w-[60%]">
                            <div className="flex items-center mb-[10px]">
                                <img src={logo} alt="Logo" className="h-[20px] w-auto" />
                                <div className="text-[14px] font-[700] text-primary ">TRENDIEST TAILWIND TEMPLATES</div>
                            </div>
                            <div className="font-[800] text-[60px] text-second mb-[24px]">
                                Take your website to the next level with Horizon UI
                            </div>
                            <div className="font-[500] text-[16px] text-[#68769F] mb-[24px]">
                                Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.
                            </div>
                            <div className="flex items-center">
                                <Button content="Get started now" />            
                                <div className="flex items-center hover:text-[20px] px-[24px] py-[8px] ">
                                    <FiPhoneCall />
                                    <button className="font-[700] text-[14px] ml-[6px]">Book a free call</button>
                                </div>
                            </div>
                        </div>

                        {/* image right */}
                        <div className="w-[40%] ml-[114px]">
                            <img src={images} alt="images" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}