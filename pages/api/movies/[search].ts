import type { NextApiRequest, NextApiResponse } from 'next';
import { get } from '../../../axios';

const url = process.env.API_URL;
const key = process.env.API_KEY;

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req;

    const movies = await get(`${url}/?apikey=${key}&s=${query.search}`);
    res.status(200).json({ movies: movies });
}
