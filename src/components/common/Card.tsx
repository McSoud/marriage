import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

const Card = ({ children }: TProps) => {
  return <main>{children}</main>;
};

export default Card;
