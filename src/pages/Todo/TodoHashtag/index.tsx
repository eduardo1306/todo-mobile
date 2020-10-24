import React from 'react';
import { Container, TodoHashtagTitle } from './styles';

interface ITodoHashtagProps {
  backgroundColorHex?: string;
  textColorHex?: string;
  title: string;
}

const TodoHashtag: React.FC<ITodoHashtagProps> = ({ backgroundColorHex, textColorHex, title }) => {
  return (
    <Container backgroundColorHex={backgroundColorHex} >
      <TodoHashtagTitle textColorHex={textColorHex}>{title}</TodoHashtagTitle>
    </Container>
  )
}

export default TodoHashtag;
