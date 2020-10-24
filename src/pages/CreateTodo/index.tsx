import React, { useCallback, useRef, useState } from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  AvatarImage,
  CreateTodoButton,
  FormContainer,
  Header,
  ScrollContainer,
  SubmitButton,
  SubmitButtonText
} from './styles';

import Input from '../../components/Input';
import api from '../../services/api';

interface CreateTodoData {
  title: string;
  subtitle: string;
  hashtags: string;
  colorHex: string;
  backgroundHex: string;
}

const CreateTodo: React.FC = () => {
  const { goBack } = useNavigation();
  const [screeHeight, setScreenHeight] = useState(0);

  const formRef = useRef<FormHandles>(null);
  const titleInputRef = useRef<TextInput>(null);
  const subtitleInputRef = useRef<TextInput>(null);
  const hashtagsInputRef = useRef<TextInput>(null);
  const colorHexInputRef = useRef<TextInput>(null);
  const backgroundHexInputRef = useRef<TextInput>(null);


  const handleSubmit = useCallback(async (
    {
      backgroundHex,
      colorHex,
      hashtags,
      subtitle,
      title
    }: CreateTodoData
  ) => {
    try {
      const splitedHashtagsTitle = hashtags.split(', ', 3);
      const splitedHashtagsFontColor = colorHex.split(', ', 3);
      const splitedHashtagsBackgroundColor = backgroundHex.split(', ', 3);

      const data = {
        title,
        subtitle,
        hasFinished: false,
        hashtags: [
          {
            title: splitedHashtagsTitle[0],
            hashtagColorFont: splitedHashtagsFontColor[0],
            hashtagBackgroundColor: splitedHashtagsBackgroundColor[0]
          },
          {
            title: splitedHashtagsTitle[1],
            hashtagColorFont: splitedHashtagsFontColor[1],
            hashtagBackgroundColor: splitedHashtagsBackgroundColor[1]
          },
          {
            title: splitedHashtagsTitle[2],
            hashtagColorFont: splitedHashtagsFontColor[2],
            hashtagBackgroundColor: splitedHashtagsBackgroundColor[2]
          },
        ]
      };

      await api.post('/todo', data).then(() => {
        Alert.alert(
          'Todo created!',
          'Your todo has been created. Check on Task Manager.'
        );
      });

      goBack();

    } catch(err) {
      Alert.alert(
        'Oops!',
        'Something wrong happened! Try created a todo later .'
      );
    }
  }, []);

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const scrollEnabled = Dimensions.get('window').height < screeHeight;

  const handleOnContentSizeChange = useCallback((contentHeight) => {
    setScreenHeight(contentHeight);
  }, [])

  return(
    <>
      <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <Header>
            <CreateTodoButton onPress={handleNavigateBack}>
              <AntDesign name="arrowleft" size={24} color="#1d3557" />
            </CreateTodoButton>
            <AvatarImage source={
              {
                uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
              }
            }/>
          </Header>
          <ScrollContainer
            scrollEnabled={scrollEnabled}
            onContentSizeChange={handleOnContentSizeChange}
          >
            <FormContainer>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input
                  ref={titleInputRef}
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="title"
                  labelText="Title"
                  placeholder="Title"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    titleInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={subtitleInputRef}
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="subtitle"
                  labelText="Subtitle"
                  placeholder="Subtitle"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    subtitleInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={hashtagsInputRef}
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="hashtags"
                  labelText="Hashtags"
                  placeholder="Ex.: Frontend, UI/UX..."
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    hashtagsInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={colorHexInputRef}
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="colorHex"
                  labelText="Hashtag Font-Color (Hex)"
                  placeholder="Digite o hex da cor do texto das hashs"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    colorHexInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={backgroundHexInputRef}
                  labelText="Hashtag Background Font-Color (Hex)"
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="backgroundHex"
                  placeholder="Digite o hex da cor fundo das hashs"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    formRef.current?.submitForm()
                  }}
                />
                <SubmitButton onPress={() => formRef.current?.submitForm()} >
                  <SubmitButtonText>
                    Create Todo!
                  </SubmitButtonText>
                </SubmitButton>
              </Form>
            </FormContainer>

          </ScrollContainer>
      </KeyboardAvoidingView>
    </>
  )
}

export default CreateTodo;
