import { useEffect, useState } from 'react';

const width = 8;
const candyColors = ['blue', 'green', 'red', 'purple', 'orange', 'yellow'];

// function expression
const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];

    for (let i = 0; i < width * width; i++) {
      //random number from 0-5 (random color)
      const randomColor =
        candyColors[Math.floor(Math.random() * [candyColors.length])];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };
  useEffect(() => {
    createBoard();
  }, []);
  console.log(currentColorArrangement);

  return (
    <div className='app'>
      <div className='game'>
        {currentColorArrangement.map((candyColor, idx) => (
          <img key={idx} style={{ backgroundColor: candyColor }}></img>
        ))}
      </div>
    </div>
  );
};

export default App;
