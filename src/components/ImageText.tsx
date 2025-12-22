import type { ReactNode } from "react";

type ImageText_Props = {
    imgLeft : boolean ,
    imgSrc : string,
    children: ReactNode,
}

function ImageText({imgLeft,imgSrc,children}: ImageText_Props) {
  return (
    <div className={`px-10 py-15 flex items-center justify-between gap-30 ${imgLeft ? "flex-row" : "flex-row-reverse"}`}>
      <div className="w-1/2">
        <img className="w-full" src={imgSrc} />
      </div>
      {children}
    </div>
  )
}

export default ImageText;