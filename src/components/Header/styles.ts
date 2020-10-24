import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const AvatarImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const CreateTodoButton = styled.TouchableOpacity``;



