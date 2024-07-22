import logo from '../../assets/images/Section4.png';

export const Section4 = () => {
    return (
        <>
            <div className="px-[150px] py-[120px]">
                <div className="container mx-auto flex">
                    {/* Content-left */}
                    <div className="w-1/2 p-4">
                        <div className="mb-16">
                            <div className="font-extrabold text-2xl text-second mb-2">Boost your workflow with Horizon</div>
                            <div className="font-medium text-base text-gray-500">Urna duis convallis convallis tellus interdum velit laoreet pentesque aliquam tortor consequat porta.</div>
                        </div>
                        <div className="flex mb-16">
                            <div className="mr-10">
                                <div className="font-extrabold text-4xl text-second mb-2">340+</div>
                                <div className="font-bold text-base text-second mb-2">Successful Projects</div>
                                <div className="font-medium text-base text-gray-500">Urna duis convallis convallis tellus interdum velit laoreet.</div>
                            </div>
                            <div>
                                <div className="font-extrabold text-4xl text-second mb-2">$10m+</div>
                                <div className="font-bold text-base text-second mb-2">Annual Percentage Rate</div>
                                <div className="font-medium text-base text-gray-500">Urna duis convallis convallis tellus interdum velit laoreet.</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-10">
                                <div className="font-extrabold text-4xl text-second mb-2">2.8k+</div>
                                <div className="font-bold text-base text-second mb-2">Clients Worldwide</div>
                                <div className="font-medium text-base text-gray-500">Urna duis convallis convallis tellus interdum velit laoreet.</div>
                            </div>
                            <div>
                                <div className="font-extrabold text-4xl text-second mb-2">7000+</div>
                                <div className="font-bold text-base text-second mb-2">Daily Visits</div>
                                <div className="font-medium text-base text-gray-500">Urna duis convallis convallis tellus interdum velit laoreet.</div>
                            </div>
                        </div>
                    </div>

                    {/* Images-right */}
                    <div className="w-[43%] p-4">
                        <img src={logo} alt="images-Section-4" />
                    </div>
                </div>
            </div>
        </>
    )
};
