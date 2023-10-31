
import './App.css';
import movies from './data.json'
import Card from './Card'

function App() {
  
  return (
    <>
      {movies.map(function(movie){
        
        return <Card 
          name={movie.Title}
          images={movie.Images}
        />
      })}
    </>
  );
}

export default App;
