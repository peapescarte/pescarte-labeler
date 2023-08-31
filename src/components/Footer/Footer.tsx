import { FooterContainer, FooterPartners, PartnersDisclaimer, PartnersImage } from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterPartners>
        <PartnersImage src="/images/ibama.png" />
        <PartnersImage src="/images/uenf.png" />
        <PartnersImage src="/images/petrobras.png" />
        <PartnersImage src="/images/ipead.png" />
      </FooterPartners>
      <PartnersDisclaimer>
        A realização do Projeto Pescarte é uma medida de mitigação exigida
        <br /> pelo licenciamento ambiental federal, conduzido pelo IBAMA.
      </PartnersDisclaimer>
    </FooterContainer>
  );
};
