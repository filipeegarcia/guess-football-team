import React, { useState } from 'react';
import './Pitch.css';

interface Player {
  name: string;
  position: string;
  nationality: string;
}

interface PitchProps {
  players: Player[];
}

const Pitch: React.FC<PitchProps> = ({ players }) => {
  const [guesses, setGuesses] = useState<{ [key: string]: string }>({});

  const handleGuessChange = (playerName: string, guess: string) => {
    setGuesses((prev) => ({ ...prev, [playerName]: guess }));
  };

  // Group players by position
  const positions: { [key: string]: Player[] } = {
    Goalkeeper: [],
    'Left Back': [],
    'Right Back': [],
    'Center Back': [],
    Midfielder: [],
    Attacker: [],
  };

  players.forEach((player) => {
    if (positions[player.position]) {
      positions[player.position].push(player);
    }
  });

  return (
    <div className="pitch">
      {/* Goalkeeper */}
      <div className="goalkeeper">
        {positions['Goalkeeper'].map((player, index) => (
          <div key={index} className="player">
            <div className="player-guess">
              {'*'.repeat(player.name.length)}
              <input
                type="text"
                value={guesses[player.name] || ''}
                onChange={(e) => handleGuessChange(player.name, e.target.value)}
                placeholder="Guess the player"
              />
              {guesses[player.name] && (
                <span className="validation">
                  {guesses[player.name].toLowerCase() === player.name.toLowerCase()
                    ? '✅ Correct'
                    : '❌ Incorrect'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Defenders */}
      <div className="defenders">
        {/* Left Back */}
        <div className="left-back">
          {positions['Left Back'].map((player, index) => (
            <div key={index} className="player">
              <div className="player-guess">
                {'*'.repeat(player.name.length)}
                <input
                  type="text"
                  value={guesses[player.name] || ''}
                  onChange={(e) => handleGuessChange(player.name, e.target.value)}
                  placeholder="Guess the player"
                />
                {guesses[player.name] && (
                  <span className="validation">
                    {guesses[player.name].toLowerCase() === player.name.toLowerCase()
                      ? '✅ Correct'
                      : '❌ Incorrect'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Center Backs */}
        <div className="center-backs">
          {positions['Center Back'].map((player, index) => (
            <div key={index} className="player">
              <div className="player-guess">
                {'*'.repeat(player.name.length)}
                <input
                  type="text"
                  value={guesses[player.name] || ''}
                  onChange={(e) => handleGuessChange(player.name, e.target.value)}
                  placeholder="Guess the player"
                />
                {guesses[player.name] && (
                  <span className="validation">
                    {guesses[player.name].toLowerCase() === player.name.toLowerCase()
                      ? '✅ Correct'
                      : '❌ Incorrect'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Back */}
        <div className="right-back">
          {positions['Right Back'].map((player, index) => (
            <div key={index} className="player">
              <div className="player-guess">
                {'*'.repeat(player.name.length)}
                <input
                  type="text"
                  value={guesses[player.name] || ''}
                  onChange={(e) => handleGuessChange(player.name, e.target.value)}
                  placeholder="Guess the player"
                />
                {guesses[player.name] && (
                  <span className="validation">
                    {guesses[player.name].toLowerCase() === player.name.toLowerCase()
                      ? '✅ Correct'
                      : '❌ Incorrect'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Midfielders */}
      <div className="midfielders">
        {positions['Midfielder'].map((player, index) => (
          <div key={index} className="player">
            <div className="player-guess">
              {'*'.repeat(player.name.length)}
              <input
                type="text"
                value={guesses[player.name] || ''}
                onChange={(e) => handleGuessChange(player.name, e.target.value)}
                placeholder="Guess the player"
              />
              {guesses[player.name] && (
                <span className="validation">
                  {guesses[player.name].toLowerCase() === player.name.toLowerCase()
                    ? '✅ Correct'
                    : '❌ Incorrect'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Attackers */}
      <div className="attackers">
        {positions['Attacker'].map((player, index) => (
          <div key={index} className="player">
            <div className="player-guess">
              {'*'.repeat(player.name.length)}
              <input
                type="text"
                value={guesses[player.name] || ''}
                onChange={(e) => handleGuessChange(player.name, e.target.value)}
                placeholder="Guess the player"
              />
              {guesses[player.name] && (
                <span className="validation">
                  {guesses[player.name].toLowerCase() === player.name.toLowerCase()
                    ? '✅ Correct'
                    : '❌ Incorrect'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pitch;