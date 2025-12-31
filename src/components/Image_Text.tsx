import type { ReactNode } from "react";

type Image_Text_Props = {
    imgLeft : boolean ,
    imgSrc : string,
    children: ReactNode,
}

function Image_Text({imgLeft,imgSrc,children}: Image_Text_Props) {
  return (
    <div className={`px-5 sm:px-10 py-10 lg:py-15 flex items-center justify-between gap-10 lg:gap-20 flex-col ${imgLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
      <div className="w-full md:w-3/4 lg:w-1/2">
        <img className="w-full" src={imgSrc} />
      </div>
      {children}
    </div>
  )
}

export default Image_Text;