import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  Container,
  AppTitle,
  ProgressCard,
  ProgressTitle,
  ProgressStatisticText,
  ProgressStatistic,
  ProgressStatisticContent,
  TodoList,
  AvatarImage,
  CreateTodoButton,
  Header
} from './styles';

import TodoItem from './TodoItem';

import api from '../../services/api';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export interface ITodo {
  id: number;
  title: string;
  subtitle: string;
  hashtags: Array<{
    id: number;
    title: string;
    hashtagColorFont?: string;
    hashtagBackgroundColor?: string;
  }>;
  hasFinished: boolean;
}

interface ITasksStatus {
  id: number;
  hasFinished: boolean;
}

const Todo: React.FC = () => {
  const { navigate } = useNavigation();

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    api.get('/todo')
      .then(response => setTodos(response.data));
  }, []);


  const handleNavigate = useCallback(() => {
    navigate('CreateTodo');
  }, [navigate]);

  const handleDeleteTodo = useCallback(async (todoId: number) => {
    await api.delete(`/todo/${todoId}`);

    setTodos(todos.filter(todo => todo.id !== todoId));

  }, []);

  const handleHasFinishedTasks = useMemo((): JSX.Element => {
    if(todos.length > 0){
      const finishedTasks = todos.filter(
        todo => todo.hasFinished
      );

      const unfinishedTasks = todos.filter(
        todo => todo.hasFinished === false
      );

      const taskStatisticText = `${finishedTasks.length <= 0 ? 0 : finishedTasks.length + 1}/${unfinishedTasks.length <= 0 ? 0 : unfinishedTasks.length + 1}`;

      return  (
        <>
          <ProgressStatistic>
              {taskStatisticText}
          </ProgressStatistic>
          <ProgressStatisticText>
          {" - "}takes done
          </ProgressStatisticText>
        </>
      );
    } else {
      return (
        <ProgressStatisticText>
          You don't have task's today!
        </ProgressStatisticText>
      );
    }
  }, [todos]);

  return (
    <Container>
      <Header>
        <AvatarImage source={{ uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' }} />
        <CreateTodoButton onPress={handleNavigate}>
          <AntDesign name="plus" size={24} color="#1d3557" />
        </CreateTodoButton>
      </Header>
      <AppTitle>
        Task Manager
      </AppTitle>
      <ProgressCard>
        <ProgressTitle>
          Daily progress
        </ProgressTitle>
        <ProgressStatisticContent>
          {handleHasFinishedTasks}
        </ProgressStatisticContent>
      </ProgressCard>
      <TodoList
        showsVerticalScrollIndicator={false}
        data={todos}
        keyExtractor={todo => String(todo.id)}
        renderItem={({ item: todo }) => (
          <TodoItem
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      />
    </Container>
  )
}

export default Todo;
