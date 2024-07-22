import { Section3Item } from '../../components/Section3/Section3Item';

export const Section3 = () => {
    return (
        <>
           <div className="px-[150px] py-[120px]">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <Section3Item 
                            title="Share team inboxes"
                            desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                        />
                        <Section3Item 
                            title="Analytics dashboard"
                            desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                        />
                        <Section3Item 
                            title="Deliver instant answer"
                            desc="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                        />
                    </div>
                </div>
            </div> 
        </>
    )
}