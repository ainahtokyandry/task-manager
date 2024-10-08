import { prisma } from '@/prisma/client';
import { TTask } from '@/types/task';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        const newTask: TTask = {
            title,
            description,
        };
        await prisma.task.create({ data: { title, description } })

        return res.status(201).json(newTask);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}