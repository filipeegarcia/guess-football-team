import express, { Request, Response } from 'express';
import Squad from '../models/Squad';

const router = express.Router();

// Get all squads
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const squads = await Squad.find();
        res.json(squads);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching squads', error });
    }
});

// Create a new squad
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { team, year, players } = req.body;

        if (!team || !year || !players) {
            res.status(400).json({ message: 'Team, year, and players are required' });
            return;
        }

        const newSquad = new Squad({ team, year, players });
        await newSquad.save();

        res.status(201).json(newSquad);
    } catch (error) {
        res.status(500).json({ message: 'Error creating squad', error });
    }
});

// Delete a squad by ID
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const deletedSquad = await Squad.findByIdAndDelete(id);

        if (!deletedSquad) {
            res.status(404).json({ message: 'Squad not found' });
            return;
        }

        res.json({ message: 'Squad deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting squad', error });
    }
});

// Get a single squad by ID
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const squad = await Squad.findById(id);

        if (!squad) {
            res.status(404).json({ message: 'Squad not found' });
            return;
        }

        res.json(squad);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching squad', error });
    }
});

// Update a squad by ID
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { team, year, players } = req.body;

        const updatedSquad = await Squad.findByIdAndUpdate(
            id,
            { team, year, players },
            { new: true }
        );

        if (!updatedSquad) {
            res.status(404).json({ message: 'Squad not found' });
            return;
        }

        res.json(updatedSquad);
    } catch (error) {
        res.status(500).json({ message: 'Error updating squad', error });
    }
});

export default router;
