import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign } from '@expo/vector-icons';

import {
   Container,
   TodoCard,
   HoursText,
   TodoSubtitle,
   TodoTitle,
   HashtagContainer,
   TaskHourContent,
   TaskInformationContent,
} from './styles';

import RightActions from '../../actions/RightActions';
import TodoHashtag from '../TodoHashtag';

import { ITodo } from '../../pages/Todo';

interface ITodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
  return (
    <Container>
      <Swipeable renderRightActions={
        (progress, dragX) => <RightActions dragX={dragX} progress={progress} />}
      >
        <TodoCard>
          <TaskInformationContent>
            <TodoTitle>{todo.title}</TodoTitle>
            <TodoSubtitle>{todo.subtitle}</TodoSubtitle>
            <HashtagContainer>
            {todo.hashtags.map(item => (
              <TodoHashtag
                key={item.id}
                title={item.title}
              />
            ))}
            </HashtagContainer>
          </TaskInformationContent>
          <TaskHourContent>
            <AntDesign name="clockcircleo" size={27} color="#212529" />
            <HoursText>{" - "}{todo.hour}</HoursText>
          </TaskHourContent>
        </TodoCard>
      </Swipeable>
    </Container>
  )
}

export default TodoItem;
