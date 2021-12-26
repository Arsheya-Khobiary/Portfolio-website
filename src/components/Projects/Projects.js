import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id="projects">
    
    <SectionTitle main> My Projects</SectionTitle>
    <SectionText>Below i have listed some of my most recent projects i created.</SectionText>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key ={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo> {description} </CardInfo>
          <div>
          <Hr />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
          <ExternalLinks href={visit}>Visit</ExternalLinks>
          <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
          
        </BlogCard>
      ))}
      <div></div>
    </GridContainer>
    
  </Section>
);

export default Projects;