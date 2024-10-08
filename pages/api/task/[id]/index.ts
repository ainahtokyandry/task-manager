import { prisma } from '@/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    switch (req.method) {
        case 'DELETE':
            try {
                await prisma.task.delete({ where: { id: Number(id) } });
                res.status(200).json({ message: 'Task deleted successfully' });
            } catch (error) {
                res.status(500).json({ error: 'Failed to delete task' });
            }
            break;
        case 'PUT':
            try {
                await prisma.task.update({
                    data: {
                        isCompleted: true
                    },
                    where: {
                        id: Number(id)
                    }
                });
                res.status(200).json({ message: 'Task updated successfully' });
            } catch (error) {
                console.error(error);

                res.status(500).json({ error: 'Failed to update task' });
            }
            break

        default:
            res.setHeader('Allow', ['DELETE', 'PUT']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
}