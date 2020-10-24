import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
;
export const AddTodoButton = styled.TouchableOpacity`
`;
export const DeleteTodoButton = styled.TouchableOpacity`
`;

export function useStyles() {
  const styles = StyleSheet.create({
    deleteTodoContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      width: 60,
      margin: 2,
      color: '#f1faee',
      borderRadius: 8,
      backgroundColor: '#e63946'
    },
    addTodoContent: {
      display: 'flex',
      margin: 2,
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      width: 60,
      borderRadius: 8,
      color: '#f1faee',
      backgroundColor: '#04f4bb'
    }
  });

  return styles;
}
