import AppBar from '../components/AppBar';
import CustomHookWithQuery from '../components/CustomHookWithQuery';
import HomePageContextProvider from '../components/HomePageContext';
import Page from '../components/Page';
import TodoListPropsStyle from '../components/TodoListPropsStyle';

export default function Homepage() {

  return (
    <HomePageContextProvider>
      <Page>
        <AppBar title="Home page" />
        <TodoListPropsStyle />
        <CustomHookWithQuery />
      </Page>
    </HomePageContextProvider>
  );
}
