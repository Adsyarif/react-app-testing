import { ReactNode } from "react";

interface Props {
  clasName?: string;
  children: ReactNode;
  id?: string;
}

const Text = ({ clasName, children, id }: Props) => {
  return (
    <p id={id} className={clasName}>
      {children}
    </p>
  );
};

export default Text;
