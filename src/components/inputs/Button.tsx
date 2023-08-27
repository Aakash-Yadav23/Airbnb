import React,{FC} from 'react'

interface ButtonProps  {
  // Additional props you might need
  placeholder?:String
  medium?:Boolean
  primary?:Boolean
  secondary?:Boolean
  outline?:Boolean
  icon?:React.ReactElement
  onClick?:(event:Event) => void
}

const Button:FC<ButtonProps> = ({placeholder,medium,icon,secondary,outline,onClick,primary}) => {
  return (
    <button className={`text-[15px] cursor-pointer ${medium ? 'font-medium':''} ${secondary ? "hover:bg-gray-100  p-[10px] px-[15px] rounded-full":""}`}>
      {placeholder}
      {icon}
    </button>
  )
}

export default Button