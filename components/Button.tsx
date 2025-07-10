import { ButtonType } from "@/types/ButtonType";
import { FC } from "react";

const Button: FC<ButtonType> = ({
  icon,
  title,
  iconPosition,
  variant,
  type,
  extraClass,
}) => {
  return (
    <button
      type={type}
      className={`${extraClass} flex items-center gap-3 font-semibold rounded-[20px] cursor-pointer ${
        variant == "outlined"
          ? "border-[2px] border-[#A259FF] bg-none"
          : "border-transparent bg-[#A259FF]"
      } text-white  py-[15px] px-[30px]`}
    >
      {iconPosition == "left" && icon}
      {title}
      {iconPosition == "right" && icon}
    </button>
  );
};

export default Button;
