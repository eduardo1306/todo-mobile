import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Container, TodoCard, HoursText, TodoSubtitle, TodoTitle } from './styles';

import RightActions from '../../../actions/RightActions';

const TodoItem: React.FC = () => {
  return (
    <Container>
      <HoursText></HoursText>
      <Swipeable renderRightActions={
        (progress, dragX) => <RightActions dragX={dragX} progress={progress} />}
      >
        <TodoCard>
          <TodoTitle>UX Design Sprint</TodoTitle>
          <TodoSubtitle>Sprint de com o time</TodoSubtitle>
        </TodoCard>
      </Swipeable>
    </Container>
  )
}

export default TodoItem;
