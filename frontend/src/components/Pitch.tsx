import React, { useState } from 'react';
import './Pitch.css';
import playerIcon from '../../public/player.ico';
import 'country-flag-icons/3x2/flags.css';

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

  // Function to display asterisks with spaces
  const displayAsterisks = (name: string) => {
    return name.split('').map((char) => (char === ' ' ? ' ' : '*')).join('');
  };

  // Function to get flag class based on nationality
  const getFlagClass = (nationality: string) => {
    const countryCode = nationality.toLowerCase();
    return `fi fi-${countryCode}`;
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
              <div className="player-name">{displayAsterisks(player.name)}</div>
              <img src={playerIcon} alt="Player" className="player-icon" />
              <span className={getFlagClass(player.nationality)}></span>
              <input
                type="text"
                value={guesses[player.name] || ''}
                onChange={(e) => handleGuessChange(player.name, e.target.value)}
                placeholder="Name"
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
        {/* Right Back */}
        <div className="right-back">
          {positions['Right Back'].map((player, index) => (
            <div key={index} className="player">
              <div className="player-guess">
                <div className="player-name">{displayAsterisks(player.name)}</div>
                <img src={playerIcon} alt="Player" className="player-icon" />
                <span className={getFlagClass(player.nationality)}></span>
                <input
                  type="text"
                  value={guesses[player.name] || ''}
                  onChange={(e) => handleGuessChange(player.name, e.target.value)}
                  placeholder="Name"
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
                <div className="player-name">{displayAsterisks(player.name)}</div>
                <img src={playerIcon} alt="Player" className="player-icon" />
                <span className={getFlagClass(player.nationality)}></span>
                <input
                  type="text"
                  value={guesses[player.name] || ''}
                  onChange={(e) => handleGuessChange(player.name, e.target.value)}
                  placeholder="Name"
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

                {/* Left Back */}
                <div className="left-back">
          {positions['Left Back'].map((player, index) => (
            <div key={index} className="player">
              <div className="player-guess">
                <div className="player-name">{displayAsterisks(player.name)}</div>
                <img src={playerIcon} alt="Player" className="player-icon" />
                <span className={getFlagClass(player.nationality)}></span>
                <input
                  type="text"
                  value={guesses[player.name] || ''}
                  onChange={(e) => handleGuessChange(player.name, e.target.value)}
                  placeholder="Name"
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
              <div className="player-name">{displayAsterisks(player.name)}</div>
              <img src={playerIcon} alt="Player" className="player-icon" />
              <span className={getFlagClass(player.nationality)}></span>
              <input
                type="text"
                value={guesses[player.name] || ''}
                onChange={(e) => handleGuessChange(player.name, e.target.value)}
                placeholder="Name"
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
              <div className="player-name">{displayAsterisks(player.name)}</div>
              <img src={playerIcon} alt="Player" className="player-icon" />
              <span className={getFlagClass(player.nationality)}></span>
              <input
                type="text"
                value={guesses[player.name] || ''}
                onChange={(e) => handleGuessChange(player.name, e.target.value)}
                placeholder="Name"
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