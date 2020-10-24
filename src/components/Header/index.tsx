import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, AvatarImage, CreateTodoButton } from './styles';


const Header: React.FC = () => {
  return (
    <Container>
      <AvatarImage source={{ uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} />
      <CreateTodoButton>
        <AntDesign name="plus" size={24} color="#f1faee" />
      </CreateTodoButton>
    </Container>
  )
}

export default Header;
