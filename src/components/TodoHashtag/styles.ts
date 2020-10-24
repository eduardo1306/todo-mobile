import styled from 'styled-components/native';

interface IContainerProps {
  backgroundColorHex?: string;
}

interface ITitleProps {
  textColorHex?: string;
}

export const Container = styled.View<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 8px;
  margin: 15px 10px 0 0;
  background: ${
    props => props.backgroundColorHex ?
      props.backgroundColorHex : '#1d3557'
  };
`;

export const TodoHashtagTitle = styled.Text<ITitleProps>`
  color: ${
    props => props.textColorHex ? props.textColorHex : '#f1faee'
  };
  font-size: 14px;
  font-weight: 500;
`;
