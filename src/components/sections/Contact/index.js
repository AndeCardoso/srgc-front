import { Input } from '../../dumbs/Input';
import { Button } from '../../dumbs/Button';

import * as S from './styled';

export const Contact = () => {

  return (
    <S.Container>
      <S.Section>
        <S.Title>Entre em contato:</S.Title>
        <S.Form>
          <S.TopInputs>
            <Input type="text" label="Nome" />
            <Input type="text" label="Telefone" />
          </S.TopInputs>
          <Input type="text" email={true} label="E-mail" />
          <Button type="button">Enviar</Button>
        </S.Form>
      </S.Section>
    </S.Container>
  );
}