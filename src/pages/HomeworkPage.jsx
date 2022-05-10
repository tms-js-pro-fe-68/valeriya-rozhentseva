import { Typography } from '@mui/material';
import AppBar from '../components/AppBar';
import Clothes from '../components/Clothes';
import ColorButton from '../components/ColorButton';
import FunctionCustomHook from '../components/FunctionCustomHook';
import HomePageContextProvider from '../components/HomePageContext';
import Page from '../components/Page';
import TodoListPropsStyle from '../components/TodoListPropsStyle';

export default function HomeworkPage() {
  return (
    <HomePageContextProvider>
      <Page>
        <AppBar title="Homework page"/>
        <Typography variant="h3" color="primary" textAlign="center">
          Check my HomeTasks
        </Typography>
        <Typography
          variant="h5"
          color="primary.dark"
          textAlign="center"
          mt={10}
        >
          Hometask1 - Стилизация компонентов
        </Typography>
        <TodoListPropsStyle />
        <Typography
          variant="h5"
          color="primary.dark"
          textAlign="center"
          mt={10}
        >
          Hometask2 - Форма с одеждой
        </Typography>
        <Clothes />
        <Typography
          variant="h5"
          color="primary.dark"
          textAlign="center"
          mt={10}
        >
          Hometask3 - Кнопка, меняющая цвет при нажатии
        </Typography>
        <ColorButton />
        <Typography
          variant="h5"
          color="primary.dark"
          textAlign="center"
          mt={10}
        >
          Hometask4 - Список самых популярных коктейлей
        </Typography>
        <FunctionCustomHook />
      </Page>
    </HomePageContextProvider>
  );
}
