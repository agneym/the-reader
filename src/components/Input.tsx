import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputEl = styled.input<{ full: boolean }>`
  ${props => props.full && `width: 100%;`}
  padding: 0.75em 0.4em;
  border: 0.1em solid ${props => props.theme.colors.gray400};
  border-radius: 0.2em;
  outline: 0;

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
    border-color: transparent;
  }
`;

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
  id: string;
  labelText?: string;
  className?: string;
}

const Input: FC<IProps> = ({
  className,
  full = false,
  id,
  labelText,
  ...rest
}) => {
  return (
    <div className={className}>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <InputEl full={full} id={id} {...rest} />
    </div>
  );
};

export default Input;
