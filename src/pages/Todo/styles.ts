import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { ITodo } from './index';

export const Container = styled.View`
  flex: 1;
  background: #a8dadc;
`;

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


