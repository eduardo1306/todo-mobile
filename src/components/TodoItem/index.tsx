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
   TaskInformationContent
} from './styles';

import RightActions from '../../actions/RightActions';
import TodoHashtag from '../TodoHashtag';

const TodoItem: React.FC = () => {
  return (
    <Container>
      <Swipeable renderRightActions={
        (progress, dragX) => <RightActions dragX={dragX} progress={progress} />}
      >
        <TodoCard>
          <TaskInformationContent>
            <TodoTitle>UX Design Sprint</TodoTitle>
            <TodoSubtitle>Sprint de UX com o time</TodoSubtitle>
            <HashtagContainer>
              <TodoHashtag
                title='UI/UX'
              />
              <TodoHashtag
                title='Frontend'
                backgroundColorHex='#caf0f8'
                textColorHex='#e63946'
              />
              <TodoHashtag
                title='Mobile'
                backgroundColorHex='#2a9d8f'
                textColorHex='#03071e'
              />
            </HashtagContainer>
          </TaskInformationContent>
          <TaskHourContent>
            <AntDesign name="clockcircleo" size={27} color="#212529" />
            <HoursText>{" - "}08:00</HoursText>
          </TaskHourContent>

        </TodoCard>
      </Swipeable>
    </Container>
  )
}

export default TodoItem;
