import { FC } from "react";
import { StyledCard, StyledDescription, StyledTitle } from "./styles";

// Card
type CardProps = {
  img: string;
} & {
  children?: React.ReactNode | React.ReactNode[];
};

export const Card: FC<CardProps> = ({ img, children }) => {
  return (
    <StyledCard>
      <img className="card__image" src={img} alt="character" />
      <div className="card__info">{children}</div>
    </StyledCard>
  );
};

// CardTitle
interface CardTitleProps {
  title: string;
}
export const CardTitle: FC<CardTitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

// CardDescription
interface CardDescriptionProps {
  info: string;
}
export const CardDescription: FC<CardDescriptionProps> = ({ info }) => {
  return <StyledDescription>{info}</StyledDescription>;
};
