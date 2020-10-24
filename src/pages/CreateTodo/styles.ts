import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background: #a8dadc;
`;

export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  background: #a8dadc;
`;


export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  background: #a8dadc;

  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const AvatarImage = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const CreateTodoButton = styled.TouchableOpacity``;

export const SubmitButton = styled(RectButton)`
  height: 60px;
  background: #1d3557;
  margin-top: 20px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;

`;
export const SubmitButtonText = styled.Text`
  color: #f1faee;
  font-size: 18px;
  font-weight: 500;
`;
