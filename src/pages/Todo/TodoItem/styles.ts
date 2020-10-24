import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const TodoCard = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  border: 1px solid #f1faee;
  border-radius: 15px;
`;

export const TodoTitle = styled.Text`
  color: #1d3557;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;

export const TodoSubtitle = styled.Text`
  color: #457b9d;
  font-weight: 500;
  font-size: 16px;
  margin-top: 8px;
`;

export const HashtagContainer = styled.View`
  flex-direction: row;
  display: flex;
`;

export const TaskInformationContent = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  margin: 10px;
`;

