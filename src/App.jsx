import { useSelector } from 'react-redux'
import { useGetAllCountriesQuery } from "./features/countries/countriesApi"
function App() {

  const { data, isLoading, error } = useGetAllCountriesQuery();

  console.log(data)

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;



