import React from "react";

export default function Product({
  image,
  title,
  price,
  description,
  className,
  children,
}) {
  return (
    <div className="bg-slate-100/80 flex flex-col gap-2 border border-neutral-400 shadow-md rounded-md px-7 py-3">
      <img src={image} alt="" className="w-full h-32" />

      {/* div for title, price and description */}
      <div className="flex flex-col gap-3">
        {/* Titles and Price */}
        <span className="flex items-center text-center justify-between">
          <h1 className="text-primaryColor-800 font-bold text-[16px]">
            {title}
          </h1>
          <h2 className="text-primaryColor-800/90 font-semibold text-sm bg-primaryColor-200 p-1 rounded-md">
            {price}
          </h2>
        </span>

        {/* Description text */}
        <span>
          <p className="text-xs text-center text-slate-500">{description}</p>
        </span>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}
