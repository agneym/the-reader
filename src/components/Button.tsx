import React, { FC, ButtonHTMLAttributes } from "react";
import styled, { DefaultTheme } from "styled-components";

type IType = "primary";

const determineBackground = (type: IType | null, theme: DefaultTheme) => {
  switch (type) {
    case "primary": {
      return theme.colors.primary;
    }
    default:
      return "transparent";
  }
};

const determineColor = (type: IType | null, theme: DefaultTheme) => {
  switch (type) {
    case "primary": {
      return "#ffffff";
    }
    default:
      return "#000000";
  }
};

const ButtonEl = styled.button<{ styleType?: IType }>`
  box-shadow: ${props => props.theme.boxShadows.md};
  padding: 1em 2em;
  background-color: ${props =>
    determineBackground(props.styleType ?? null, props.theme)};
  color: ${props => determineColor(props.styleType ?? null, props.theme)};
  border: none;
  font-size: 0.75em;
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: IType;
}

const Button: FC<IProps> = ({ styleType, ...rest }) => {
  return <ButtonEl styleType={styleType} {...rest} />;
};

export default Button;
