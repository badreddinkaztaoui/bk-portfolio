import { Wrapper } from "./styles";

type BtnTypes = {
  label: string;
  status: "primary" | "warning" | "error" | "success" | "outline";
  rounded?: boolean;
  fill?: boolean;
  className?: string;
};

const Button = ({ label, status, rounded, fill, className }: BtnTypes) => {
  return (
    <Wrapper
      className={className}
      status={status}
      rounded={rounded}
      fill={fill}
    >
      <span>{label}</span>
    </Wrapper>
  );
};

export default Button;
