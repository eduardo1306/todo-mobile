import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
   Container,
   TodoCard,
   TodoSubtitle,
   TodoTitle,
   HashtagContainer,
   TaskInformationContent,
} from './styles';

import RightActions from '../../../actions/RightActions';
import TodoHashtag from '../TodoHashtag';

import { ITodo } from '../index';

interface ITodoItemProps {
  todo: ITodo;
  handleDeleteTodo: (todoId: number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo, handleDeleteTodo }) => {
  return (
    <Container>
      <Swipeable
        renderRightActions={
        (progress, dragX) => <RightActions todoId={todo.id} handleDeleteTodo={handleDeleteTodo} dragX={dragX} progress={progress} />}
      >
        <TodoCard>
          <TaskInformationContent>
            <TodoTitle>{todo.title}</TodoTitle>
            <TodoSubtitle>{todo.subtitle}</TodoSubtitle>
            <HashtagContainer>
            {todo.hashtags?.map(item => (
              <TodoHashtag
                key={(Math.random() * todo.id) * 100}
                title={item.title}
                backgroundColorHex={item.hashtagBackgroundColor}
                textColorHex={item.hashtagColorFont}
              />
            ))}
            </HashtagContainer>
          </TaskInformationContent>
        </TodoCard>
      </Swipeable>
    </Container>
  )
}

export default TodoItem;
