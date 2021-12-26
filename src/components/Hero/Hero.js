import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hi👋, I am   <br />
      Arsheya Khobiary
    </SectionTitle>
    <SectionText>
    Final Year BSc (Hons) Computer Science student📚💻
    </SectionText>
    
    <Button onClick={() => window.location = 'mailto:arsheyaid@hotmail.com'}> Contact Me</Button>

  </LeftSection>
  </Section>
);

export default Hero;