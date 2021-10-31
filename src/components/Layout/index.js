import * as S from './styled';
import { Header } from "../Header";
import { Main } from "../Main";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <Main />
      <Footer />
    </S.Layout>
  );
}
