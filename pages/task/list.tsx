import PageContainer from '@/components/page-container';
import { TTask } from '@/types/task';
import Head from 'next/head';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';


const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<TTask[]>([]);

    const onDelete = useCallback((id?: number) => async () => {
        if (!id) return;
        const response = await fetch(`/api/task/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            fetchTasks()
        }
    }, []);
    const onMarkTaskAsCompleted = useCallback((id?: number) => async () => {
        if (!id) return;
        const response = await fetch(`/api/task/${id}`, {
            method: 'PUT',
        });
        if (response.ok) {
            fetchTasks()
        }
    }, []);
    const fetchTasks = useCallback(async () => {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
    }, []);

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <Head>
                <title>Task list</title>
            </Head>
            <PageContainer>
                <nav>
                    <Link href={'/task/create'}>Create a task</Link>
                </nav>
                <h1>Task List</h1>
                {tasks.length > 0 ? <ul>
                    {tasks.map(task => (
                        <li key={task.id} className='flex justify-between'>
                            <div>
                                <div className='flex gap-4 items-center'>
                                    <h2>{task.title}</h2>
                                    <span className='italic text-sm'>
                                        {task.isCompleted ? 'Completed' : 'Not completed'}
                                    </span>
                                </div>
                                <p>{task.description}</p>
                            </div>
                            <div className='flex flex-col gap-1 items-start'>
                                <button onClick={onDelete(task.id)}>Delete</button>
                                {!task.isCompleted && <button onClick={onMarkTaskAsCompleted(task.id)}>Mark task as completed</button>}
                            </div>
                        </li>
                    ))}
                </ul> : <p className='italic'>No tasks found</p>}
            </PageContainer>
        </>
    );
};

export default TaskList;