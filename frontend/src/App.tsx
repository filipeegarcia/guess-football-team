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
        setSquads(squads);
        if (squads.length > 0) {
          setSelectedSquad(squads[0]); // Default to the first squad
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
      <h1>{selectedSquad.team} ({selectedSquad.year})</h1>
      <button onClick={handleNextSquad}>Next Squad</button>
      <Pitch players={selectedSquad.players} />
    </div>
  );
};

export default App;