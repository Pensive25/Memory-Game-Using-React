import { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);

  const shuffleCards = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  //handling click event with score logic and shuffling cards
  
  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setScore(0);
      setClicked([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClicked([...clicked, id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      setCards(shuffleCards(cards));
      // console.log(score);
      // console.log(bestScore);
    }
  };

//fetching pokemon data from pokeapi

  useEffect(() => {
    let fetchCard = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12"
      );
      const data = await response.json();
      // console.log(data.results);

      const formatted = data.results.map((item, index) => ({
        id: index,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));
      setCards(shuffleCards(formatted));
    };
    fetchCard();
  }, []);

  //passing props to CardGrid component
  return (
    <>
      <div>
        <CardGrid cards={cards} handleClick={handleClick}
          score={score}
          bestScore={bestScore}>
        </CardGrid>
      </div>
    </>
  );
}

export default App;
