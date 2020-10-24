import React from 'react'

import Header from '../../components/Header';
import { Container, AppTitle, ProgressCard, ProgressTitle, ProgressStatisticText, ProgressStatistic, ProgressStatisticContent } from './styles';
import TodoItem from '../../components/TodoItem';

const Todo: React.FC = () => {
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
          <ProgressStatistic>
            11/24
          </ProgressStatistic>
          <ProgressStatisticText>
          {" - "}takes done
          </ProgressStatisticText>
        </ProgressStatisticContent>
      </ProgressCard>
      <TodoItem />
    </Container>
  )
}

export default Todo;
