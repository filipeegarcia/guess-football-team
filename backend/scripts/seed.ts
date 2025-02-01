import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Squad from '../src/models/Squad';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const squads = [
    {
        team: 'Corinthians',
        year: 2012,
        players: [
            { name: 'Cassio', position: 'Goalkeeper', nationality: 'Brazil' },
            { name: 'Alessandro', position: 'Right Back', nationality: 'Brazil' },
            { name: 'Chicao', position: 'Center Back', nationality: 'Brazil' },
            { name: 'Leandro Castan', position: 'Center Back', nationality: 'Brazil' },
            { name: 'Fabio Santos', position: 'Left Back', nationality: 'Brazil' },
            { name: 'Ralf', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Paulinho', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Danilo', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Alex', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Jorge Henrique', position: 'Attacker', nationality: 'Brazil' },
            { name: 'Emerson Sheik', position: 'Attacker', nationality: 'Brazil' },
        ],
    },
    {
        team: 'Sao Paulo',
        year: 2005,
        players: [
            { name: 'Rogerio Ceni', position: 'Goalkeeper', nationality: 'Brazil' },
            { name: 'Edcarlos', position: 'Center Back', nationality: 'Brazil' },
            { name: 'Fabao', position: 'Center Back', nationality: 'Brazil' },
            { name: 'Lugano', position: 'Center Back', nationality: 'Uruguay' },
            { name: 'Cicinho', position: 'Right Back', nationality: 'Brazil' },
            { name: 'Junior', position: 'Left Back', nationality: 'Brazil' },
            { name: 'Mineiro', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Josue', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Danilo', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Amoroso', position: 'Attacker', nationality: 'Brazil' },
            { name: 'Aloisio', position: 'Attacker', nationality: 'Brazil' },
        ],
    },
    {
        team: 'Santos',
        year: 2011,
        players: [
            { name: 'Rafael', position: 'Goalkeeper', nationality: 'Brazil' },
            { name: 'Danilo', position: 'Right Back', nationality: 'Brazil' },
            { name: 'Edu Dracena', position: 'Center Back', nationality: 'Brazil' },
            { name: 'Durval', position: 'Center Back', nationality: 'Brazil' },
            { name: 'Leo', position: 'Left Back', nationality: 'Brazil' },
            { name: 'Adriano', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Arouca', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Elano', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Paulo Henrique Ganso', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Neymar', position: 'Attacker', nationality: 'Brazil' },
            { name: 'Ze Love', position: 'Attacker', nationality: 'Brazil' },
        ],
    },
    {
        team: 'Flamengo',
        year: 2019,
        players: [
            { name: 'Diego Alves', position: 'Goalkeeper', nationality: 'Brazil' },
            { name: 'Rafinha', position: 'Right Back', nationality: 'Brazil' },
            { name: 'Rodrigo Caio', position: 'Center Back', nationality: 'Brazil' },
            { name: 'Pablo Mari', position: 'Center Back', nationality: 'Spain' },
            { name: 'Filipe Luis', position: 'Left Back', nationality: 'Brazil' },
            { name: 'Williao Arao', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Gerson', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Arrascaeta', position: 'Midfielder', nationality: 'Uruguay' },
            { name: 'Everton Ribeiro', position: 'Midfielder', nationality: 'Brazil' },
            { name: 'Gabigol', position: 'Attacker', nationality: 'Brazil' },
            { name: 'Bruno Henrique', position: 'Attacker', nationality: 'Brazil' },
        ],
    },
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');

        // Clear existing data
        await Squad.deleteMany({});
        console.log('Cleared existing squads');

        // Insert new data
        await Squad.insertMany(squads);
        console.log('Database seeded successfully');

        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
