export const BoxHead = (props) => {
    const { 
      title,
      desc,
      className = "text-left"
    } = props;
    return (
      <>
        <div className={"mb-[60px] " + className}>
          <h2 className="font-[800] text-[36px] text-dark">
            {title}
          </h2>
          <p className="mt-[10px] font-[500] text-[16px] text-[#68769F]">
            {desc}
          </p>
        </div>
      </>
    )
  }