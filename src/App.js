import './App.css';
import { useSelector } from 'react-redux'
import { useGetAllCountriesQuery } from "./features/comments/commentsApi"
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



