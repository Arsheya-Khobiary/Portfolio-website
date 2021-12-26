import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        
        <LinkColumn>
          <LinkTitle>Email Me</LinkTitle>
          <LinkItem href="mailto:arsheyaid@hotmail.com">
            arsheyaid@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Arsheya-Khobiary">
            <AiFillGithub size="5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/arsheyakhobiary/">
            <AiFillLinkedin size="5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;