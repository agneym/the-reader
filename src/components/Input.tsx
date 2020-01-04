import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

type ISize = "md" | "lg";

function determineSize(size: ISize) {
  switch (size) {
    case "md":
      return "0.9em";
    case "lg":
      return "1em";
    default:
      return "0.9em";
  }
}

const InputEl = styled.input<{ full: boolean; styleSize: ISize }>`
  ${props => props.full && `width: 100%;`}
  padding: 0.75em 0.4em;
  border: 0.1em solid ${props => props.theme.colors.gray400};
  border-radius: 0.2em;
  outline: 0;
  box-sizing: border-box;
  font-size: ${props => determineSize(props.styleSize)}

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    border-color: transparent;
  }
`;

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
  styleSize?: ISize;
  id: string;
  labelText?: string;
  className?: string;
}

const Input: FC<IProps> = ({
  className,
  full = false,
  styleSize = "md",
  id,
  labelText,
  ...rest
}) => {
  return (
    <div className={className}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <InputEl styleSize={styleSize} full={full} id={id} {...rest} />
    </div>
  );
};

export default Input;
