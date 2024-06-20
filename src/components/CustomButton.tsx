import CustomIcon, { CustomIconProps } from "./CustomIcon";
import { Button, ButtonProps } from "@chakra-ui/react";
import _ from "lodash";

interface CustomButtonProps extends ButtonProps {
  icon?: CustomIconProps;
  buttonStyle?: string;
  colorScheme?: string;
  size?: string;
  variant?: string;
  textStyle?: string;
  text?: string;
  onClick: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
  const {
    icon: customIcon,
    colorScheme = "teal",
    size: buttonSize = "md",
    variant = "solid",
    text,
    buttonStyle,
    textStyle,
    onClick,
    ...rest
  } = props;
  const { icon, size, stroke, color } = customIcon || {};

  return (
    <>
      <Button
        colorScheme={colorScheme}
        size={buttonSize}
        variant={variant}
        className={buttonStyle}
        onClick={onClick}
        {...rest}
      >
        {!_.isEmpty(customIcon) && (
          <CustomIcon icon={icon} size={size} stroke={stroke} color={color} />
        )}
        <span className={textStyle}>{text}</span>
      </Button>
    </>
  );
};

export default CustomButton;
