export default function CardGrid({ cards, handleClick, score, bestScore }) {
  return (
    <>
      
        <div className="score-board">
            <h1>Pokemon Memory Game</h1>
          <p>
            <strong>Score:{score}</strong>
          </p>
          <p>
            <strong>Best Score:{bestScore}</strong>
          </p>
        </div>
      <div className="grid">
      
        {cards.map((card) => (
          <div key={card.id}>
            <button onClick={() => handleClick(card.id)}>
              <img src={card.image} alt={card.name} />
            </button>
            <p>
              <strong>{card.name}</strong>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
