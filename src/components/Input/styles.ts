import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 95%;
  height: 60px;
  padding: 0 10px;
  align-self: center;
  background: #457b9d;
  margin-bottom: 8px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #1d3557;
  flex-direction: column;

  ${props =>
    props.isErrored &&
    css`
      border-color: #e63946;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #9d4edd;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #f1faee;
  font-size: 16px;
`;

export const LabelText = styled.Text`
  font-size: 20px;
  padding: 10px;
  margin: 0 auto;
  font-weight: 500;
  color: #1d3557;
  line-height: 20px;
`;
