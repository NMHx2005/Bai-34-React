export const Button = (props) => {
    const { content } = props;
    return (
        <>
            <button className="font-[700] text-[#FFFFFF] bg-primary text-[14px] px-[28px] py-[16px] rounded-[10px] hover:bg-second">{content}</button>
        </>
    )
}