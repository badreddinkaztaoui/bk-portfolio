// Styles
import { Container, Content, Main, SideContent } from "./styles";
// Components
import Header from "@/containers/Header";
// Data
import { me } from "@/data/me";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Main>Hello Main page</Main>
      </Content>
      <SideContent pos="left">
        <ul>
          {me.socials.map((social) => (
            <li key={social.name}>
              <a href={social.href} target="_blank">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </SideContent>
      <SideContent pos="right">
        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          {process.env.NEXT_PUBLIC_EMAIL}
        </a>
      </SideContent>
    </Container>
  );
};

export default Layout;
