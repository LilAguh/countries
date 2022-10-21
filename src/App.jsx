import { useSelector } from 'react-redux'
import { useGetAllCountriesQuery } from "./features/countries/countriesApi"
import SwitchMode from './components/switchMode/SwitchMode';

function App() {

  const { data, isLoading, error } = useGetAllCountriesQuery();

  console.log(data)

  return (
    <div>
      <h1>hello world</h1>
      <SwitchMode />
    </div>
  );
}

export default App;



