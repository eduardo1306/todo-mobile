import React, { useEffect, useMemo, useState } from 'react'

import Header from '../../components/Header';
import {
  Container,
  AppTitle,
  ProgressCard,
  ProgressTitle,
  ProgressStatisticText,
  ProgressStatistic,
  ProgressStatisticContent,
  TodoList
} from './styles';
import TodoItem from '../../components/TodoItem';

import api from '../../services/api';

export interface ITodo {
  id: number;
  title: string;
  subtitle: string;
  hashtags: Array<{
    id: number;
    title: string;
  }>;
  hour: string;
  hasFinished: boolean;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    api.get('/todo')
      .then(response => setTodos(response.data));
  }, []);

  const handleHasFinishedTasks = useMemo((): JSX.Element => {
    if(todos){
      const finishTasks = todos.filter(todo => todo.hasFinished);
      const unfinishTasks = todos.filter(todo => !todo.hasFinished);

      const taskStatisticText = `${finishTasks.length + 1}/${unfinishTasks.length + 1}`;

      return  (
        <>
          <ProgressStatistic>
              {taskStatisticText}
          </ProgressStatistic>
          <ProgressStatisticText>
          {" - "}takes done
          </ProgressStatisticText>
        </>
      )
    } else {
      return (
        <ProgressStatisticText>
          You don't have task's today!
          </ProgressStatisticText>
      );
    }
  }, [])

  return (
    <Container>
      <Header />
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
        data={todos}
        keyExtractor={todo => String(todo.id)}
        renderItem={({ item: todo }) => (
          <TodoItem
            todo={todo}
          />
        )}
      />
    </Container>
  )
}

export default Todo;
