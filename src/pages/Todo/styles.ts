import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';

import { ITodo } from './index';

export const Container = styled.View`
  flex: 1;
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

export const AppTitle = styled.Text`
  font-size: 36px;
  font-weight: 500;
  color: #1d3557;
  padding-top: 20px;
  margin: 0 auto;
`;

export const ProgressCard = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  border: 1px solid #f1faee;
  margin: 20px 10px;
  border-radius: 8px;
  background: #457b9d;
`;

export const ProgressTitle = styled.Text`
  font-size: 24px;
  color: #f1faee;
  font-weight: 600;
`;

export const ProgressStatisticContent = styled.View`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

export const ProgressStatistic = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #48cae4;
`;

export const ProgressStatisticText = styled.Text`
  font-size: 18px;
  color: #f1faee;
`;

export const TodoList = styled(FlatList as new () => FlatList<ITodo>)`

`;


