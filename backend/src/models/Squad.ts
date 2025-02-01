import mongoose, { Document, Schema } from 'mongoose';

export interface IPlayer {
    name: string;
    position: string;
    nationality: string;
}

export interface ISquad extends Document {
    team: string;
    year: number;
    players: IPlayer[];
}

const SquadSchema: Schema = new Schema({
    team: { type: String, required: true },
    year: { type: Number, required: true },
    players: [
        {
            name: { type: String, required: true },
            position: { type: String, required: true },
            nationality: { type: String, required: true },
        },
    ],
});

export default mongoose.model<ISquad>('Squad', SquadSchema);
