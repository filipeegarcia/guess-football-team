import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Squad from '../models/Squad';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const squads = [
    {
        team: 'Corinthians',
        year: 2012,
        players: [
            { name: 'Cassio', position: 'Goalkeeper', nationality: 'br' },
            { name: 'Alessandro', position: 'Right Back', nationality: 'br' },
            { name: 'Chicao', position: 'Center Back', nationality: 'br' },
            { name: 'Leandro Castan', position: 'Center Back', nationality: 'br' },
            { name: 'Fabio Santos', position: 'Left Back', nationality: 'br' },
            { name: 'Ralf', position: 'Midfielder', nationality: 'br' },
            { name: 'Paulinho', position: 'Midfielder', nationality: 'br' },
            { name: 'Danilo', position: 'Midfielder', nationality: 'br' },
            { name: 'Alex', position: 'Midfielder', nationality: 'br' },
            { name: 'Jorge Henrique', position: 'Attacker', nationality: 'br' },
            { name: 'Emerson Sheik', position: 'Attacker', nationality: 'br' },
        ],
    },
    {
        team: 'Sao Paulo',
        year: 2005,
        players: [
            { name: 'Rogerio Ceni', position: 'Goalkeeper', nationality: 'br' },
            { name: 'Edcarlos', position: 'Center Back', nationality: 'br' },
            { name: 'Fabao', position: 'Center Back', nationality: 'br' },
            { name: 'Lugano', position: 'Center Back', nationality: 'uy' },
            { name: 'Cicinho', position: 'Right Back', nationality: 'br' },
            { name: 'Junior', position: 'Left Back', nationality: 'br' },
            { name: 'Mineiro', position: 'Midfielder', nationality: 'br' },
            { name: 'Josue', position: 'Midfielder', nationality: 'br' },
            { name: 'Danilo', position: 'Midfielder', nationality: 'br' },
            { name: 'Amoroso', position: 'Attacker', nationality: 'br' },
            { name: 'Aloisio', position: 'Attacker', nationality: 'br' },
        ],
    },
    {
        team: 'Santos',
        year: 2011,
        players: [
            { name: 'Rafael', position: 'Goalkeeper', nationality: 'br' },
            { name: 'Danilo', position: 'Right Back', nationality: 'br' },
            { name: 'Edu Dracena', position: 'Center Back', nationality: 'br' },
            { name: 'Durval', position: 'Center Back', nationality: 'br' },
            { name: 'Leo', position: 'Left Back', nationality: 'br' },
            { name: 'Adriano', position: 'Midfielder', nationality: 'br' },
            { name: 'Arouca', position: 'Midfielder', nationality: 'br' },
            { name: 'Elano', position: 'Midfielder', nationality: 'br' },
            { name: 'Paulo Henrique Ganso', position: 'Midfielder', nationality: 'br' },
            { name: 'Neymar', position: 'Attacker', nationality: 'br' },
            { name: 'Ze Love', position: 'Attacker', nationality: 'br' },
        ],
    },
    {
        team: 'Flamengo',
        year: 2019,
        players: [
            { name: 'Diego Alves', position: 'Goalkeeper', nationality: 'br' },
            { name: 'Rafinha', position: 'Right Back', nationality: 'br' },
            { name: 'Rodrigo Caio', position: 'Center Back', nationality: 'br' },
            { name: 'Pablo Mari', position: 'Center Back', nationality: 'es' },
            { name: 'Filipe Luis', position: 'Left Back', nationality: 'br' },
            { name: 'Williao Arao', position: 'Midfielder', nationality: 'br' },
            { name: 'Gerson', position: 'Midfielder', nationality: 'br' },
            { name: 'Arrascaeta', position: 'Midfielder', nationality: 'uy' },
            { name: 'Everton Ribeiro', position: 'Midfielder', nationality: 'br' },
            { name: 'Gabigol', position: 'Attacker', nationality: 'br' },
            { name: 'Bruno Henrique', position: 'Attacker', nationality: 'br' },
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
