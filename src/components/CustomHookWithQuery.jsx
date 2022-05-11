import { List, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import Page from './Page';

export default function CustomHookWithQuery() {
  const { isLoading, data, error } = useQuery('items', () =>
    fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => response.json())
      .then((items) => items.drinks),
  );
  
  if (isLoading) return <p>Подождите немного, данные загружаются...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <Page>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        List of the most popular cocktails:
      </Typography>
      <List
        sx={{ margin: '0 auto', border: '5px solid black', padding: '10px'}}
      >
        {data.map(({ idDrink, strDrink }) => (
          <li key={idDrink}>
            <Typography variant="h6">{strDrink}</Typography>
          </li>
        ))}
      </List>
    </Page>
  );
}