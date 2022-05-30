import Image from "next/image";
// Styles
import { Content, Logo, Navbar, Wrapper } from "./styles";
// Data
import { links } from "@/data/consts";
import Link from "@/components/Link";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Image
            src="/logo.png"
            width={110}
            height={80}
            role="img"
            alt="logo"
          />
        </Logo>
        <Navbar>
          {links.map((link) => (
            <Link key={`link-${link}`} href="/" label={link} />
          ))}
        </Navbar>
      </Content>
    </Wrapper>
  );
};

export default Header;
