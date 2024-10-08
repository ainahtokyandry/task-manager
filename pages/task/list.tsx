import PageContainer from '@/components/page-container';
import { TTask } from '@/types/task';
import Head from 'next/head';
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
                <h1>Task List</h1>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className='flex justify-between'>
                            <div>
                                <h2>{task.title}</h2>
                                <p>{task.description}</p>
                            </div>
                            <button onClick={onDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </PageContainer>
        </>
    );
};

export default TaskList;