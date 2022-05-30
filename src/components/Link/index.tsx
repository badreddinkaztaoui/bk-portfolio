import NavLink from "next/link";
import { FC } from "react";
import { Anchor } from "./styles";

type LinkTypes = {
  href: string;
  label: string;
};

const Link: FC<LinkTypes> = ({ href, label }) => {
  return (
    <NavLink href={href}>
      <Anchor>{label}</Anchor>
    </NavLink>
  );
};

export default Link;
