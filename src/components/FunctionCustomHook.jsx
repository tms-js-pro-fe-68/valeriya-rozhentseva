import { useState, useEffect } from 'react';

function useGetRequest(api) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
    setIsLoading(true);
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setItems(data.drinks))
      .catch((error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
    return () => {
      console.log('Nothing found...');
    };
  }, []);

  return { isLoading, errorMessage, items };
}

export default function FunctionCustomHook() {
  const { isLoading, errorMessage, items } = useGetRequest(
    'https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',
  );

  return (
    <div
      style={{ width: '600px', margin: '15px auto', border: '3px solid grey' }}
    >
      <h2 style={{ fontSize: '25px', color: 'silver', textAlign: 'center' }}>
        List of the most popular cocktails:
      </h2>
      <p>{isLoading && 'Loading..'}</p>
      <p>{errorMessage}</p>
      <ul>
        {items.map(({ idDrink, strDrink }) => (
          <li style={{ color: 'grey', fontSize: '20px', textAlign: 'center' }} key={idDrink}>
            {strDrink}
          </li>
        ))}
      </ul>
    </div>
  );
}
