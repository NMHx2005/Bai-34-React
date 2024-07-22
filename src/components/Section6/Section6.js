import { Button } from '../../components/Button/Button'

export const Section6 = () => {
    return (
        <>
            <div className="py-[120px] px-[150ox]">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="text-second w-[50%]">
                            <div className="font-[800] text-[36px]">
                                Save time with Horizon.
                            </div>
                            <div className="font-[600] text-[36px]">
                                Turn your visitors into clients.
                            </div>
                        </div>
                        <div className="">
                            <button className="font-[700] text-primary hover:text-white bg-white border-primary border-solid border-[1px] text-[14px] px-[28px] py-[16px] rounded-[10px] hover:bg-primary mr-[16px]">Try Demo</button>
                            <Button content="Get Started Now" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};