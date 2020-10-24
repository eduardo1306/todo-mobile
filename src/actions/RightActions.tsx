import React from 'react';
import { Animated } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import { useStyles, Container, AddTodoButton, DeleteTodoButton } from './styles';

interface IAnimatedProps {
  progress: Animated.AnimatedInterpolation,
  dragX: Animated.AnimatedInterpolation,
}

const RightActions = ({ progress, dragX }: IAnimatedProps) => {
  const styles = useStyles();
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Container>
      <AddTodoButton>
        <Animated.View
          style={
            [
              styles.addTodoContent,
              { transform: [{ scale }] }
            ]
          }>
          <AntDesign name="checkcircle" size={24} color="black" />
        </Animated.View>
      </AddTodoButton>
      <DeleteTodoButton>
        <Animated.View style={
          [
            styles.deleteTodoContent,
            { transform: [{ scale }] }
          ]
        }>
          <FontAwesome5 name="trash" size={24} color="black" />
        </Animated.View>
      </DeleteTodoButton>
      </Container>
  )
}

export default RightActions;
