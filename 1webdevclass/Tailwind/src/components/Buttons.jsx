import { Children } from "react";

export const Button=({
    disabled,
    children,
    onClick
})=>{
    return <div onClick={onClick} className={`px-32 py-8 text-white pointer ${disabled ? "bg-blue-600":"bg-red-600"} cursor-pointer`}>
      {children}
    </div>
}