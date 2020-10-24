import React, { useCallback } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, AvatarImage, CreateTodoButton } from './styles';


const Header: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate('CreateTodo');
  }, [navigate]);

  return (
    <Container>
      <AvatarImage source={{ uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} />
      <CreateTodoButton onPress={handleNavigate}>
        <AntDesign name="plus" size={24} color="#1d3557" />
      </CreateTodoButton>
    </Container>
  )
}

export default Header;
