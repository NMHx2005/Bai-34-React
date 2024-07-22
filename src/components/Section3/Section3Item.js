import { MdAccountCircle } from "react-icons/md";

export const Section3Item = (props) => {
    const { title, desc } = props;
    return (
        <>
            <div className="">
                <div className="text-center bg-primary h-[64px] flex items-center justify-center w-[64px] rounded-[16px] mb-[24px] mx-auto text-white"><MdAccountCircle className="h-[24px] w-auto" /></div>
                <div className="text-center font-[800] mb-[8px] text-[24px] text-second">{title}</div>
                <div className="text-center font-[500] text-[16px] text-[#68769F]">{desc}</div>
            </div>
        </>
    )
}