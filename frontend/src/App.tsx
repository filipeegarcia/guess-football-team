import React, { useEffect, useState } from 'react';
import { getSquads } from './services/api';
import Pitch from './components/Pitch';
import './App.css';

interface Player {
  name: string;
  position: string;
  nationality: string;
}

interface Squad {
  _id: string;
  team: string;
  year: number;
  players: Player[];
}

const App: React.FC = () => {
  const [squads, setSquads] = useState<Squad[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);
  const [currentSquadIndex, setCurrentSquadIndex] = useState(0);

  useEffect(() => {
    const fetchSquads = async () => {
      try {
        const squads = await getSquads();
        // Randomize the squads array
        const randomizedSquads = squads.sort(() => Math.random() - 0.5);
        setSquads(randomizedSquads);
        if (randomizedSquads.length > 0) {
          setSelectedSquad(randomizedSquads[0]); // Default to the first squad
        }
      } catch (error) {
        console.error('Error fetching squads:', error);
      }
    };

    fetchSquads();
  }, []);

  const handleNextSquad = () => {
    const nextIndex = (currentSquadIndex + 1) % squads.length;
    setCurrentSquadIndex(nextIndex);
    setSelectedSquad(squads[nextIndex]);
  };

  if (!selectedSquad) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Guess the players in the squad!</h1>
      </header>
      <main>
        <div className="squad-info">
          <h2>{selectedSquad.team} ({selectedSquad.year})</h2>
          <button onClick={handleNextSquad}>Next Squad</button>
        </div>
        <Pitch players={selectedSquad.players} />
      </main>
      <footer className="footer">
        <p>Made by filipegarcia.co</p>
      </footer>
    </div>
  );
};

export default App;