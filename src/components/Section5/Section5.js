import logo from '../../assets/images/Section5.png';

export const Section5 = () => {
    return (
        <>
            <div className="py-[120px] px-[150px]">
                <div className="container mx-auto">
                    <div className="text-center">
                        <div className="mb-[74px] w-[686px] mx-auto">
                            <div className="font-[800] text-[36px] text-second mb-[16px]">Customer Testimonials</div>
                            <div className="font-[500] text-[16px] text-[#68769F]">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="w-[49%] p-[38px] bg-[#F6F8FD] rounded-[16px]">
                                <div className="font-[700] text-[20px] text-second mb-[37px]">
                                    “A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”
                                </div>
                                <div className="text-center">
                                    <img src={logo} alt="Section-5-images"  className="mx-auto mb-[16px]"/>
                                    <div className="font-[800] text-[18px] text-second">Tiana Schleifer</div>
                                    <div className="font-[600] text-[12px] text-[#68769F]">CEO & Founder</div>
                                </div>
                            </div>
                            <div className="w-[49%] p-[38px] bg-[#F6F8FD] rounded-[16px]">
                                <div className="font-[700] text-[20px] text-second mb-[37px]">
                                    “A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”
                                </div>
                                <div className="text-center">
                                    <img src={logo} alt="Section-5-images"  className="mx-auto mb-[16px]"/>
                                    <div className="font-[800] text-[18px] text-second">Tiana Schleifer</div>
                                    <div className="font-[600] text-[12px] text-[#68769F]">CEO & Founder</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};