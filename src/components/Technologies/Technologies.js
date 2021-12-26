import React from 'react';
import { DiCss3, DiDatabase, DiFirebase, DiGithub, DiHtml5, DiJavascript, DiJavascript1, DiMongodb, DiMsqlServer, DiMysql, DiNodejs, DiPython, DiReact, DiSqllite, DiTerminal, DiVisualstudio, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section  id="tech">
  

  <SectionTitle> Languages and Tools: </SectionTitle>

  <List>
    <ListItem>
      <DiVisualstudio size="3rem"  />
      <ListContainer>
        <ListTitle> Visual Studio Code</ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiHtml5 size="3rem"  />
      <ListContainer>
        <ListTitle> HTML</ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiCss3 size="3rem"  />
      <ListContainer>
        <ListTitle> CSS </ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiJavascript1 size="3rem"  />
      <ListContainer>
        <ListTitle> JavaScript</ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiPython size="3rem"  />
      <ListContainer>
        <ListTitle> Python</ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejs size="3rem"  />
      <ListContainer>
        <ListTitle> Node.JS</ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiDatabase size="3rem"  />
      <ListContainer>
        <ListTitle> MySQL</ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiMongodb size="3rem"  />
      <ListContainer>
        <ListTitle> Mongo DataBase</ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiGithub size="3rem"  />
      <ListContainer>
        <ListTitle> GitHub </ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiTerminal size="3rem"  />
      <ListContainer>
        <ListTitle> Terminal</ListTitle>
      </ListContainer>
    </ListItem>
   
  
  </List>
  </Section>
);

export default Technologies;
