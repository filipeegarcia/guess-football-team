import express from 'express';
import cors from 'cors';
import connectDB from './utils/db';
import squadRoutes from './routes/squadRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/squads', squadRoutes);

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Missing 11 Backend');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
