import PageContainer from '@/components/page-container';
import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';

const CreateTask = () => {
    const [data, setData]=useState<{title:string, description:string}>({title:'', description:''})

    const taskChangeHandler = useCallback((
        e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => { 
        setData((prev) => ({...prev, [e.target.name]: e.target.value}))
        
    }, [])
    const onSubmit = useCallback(async (e:SyntheticEvent) => {
        e.preventDefault()
        const req = await fetch('/api/task/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },body:JSON.stringify(data)
        })
        const res = await req.json()
        
    }, [data])
    
    return (
        <PageContainer>
            <h1>Create a New Task</h1>
            <form className='flex flex-col gap-2' onSubmit={onSubmit}>
                <div className='flex gap-2 flex-col w-[300px]'>
                    <label htmlFor="taskName">Title:</label>
                    <input type="text" id="taskName" name="title" className='border border-black' onChange={taskChangeHandler} value={data.title} />
                </div>
                <div  className='flex gap-2 flex-col w-[300px]'>
                    <label htmlFor="taskDescription">Description:</label>
                    <textarea id="taskDescription" name="description" className='border border-black'onChange={taskChangeHandler}value={data.description} ></textarea>
                </div>
                <button type="submit" className='bg-blue-300 text-white px-3 py-2 w-fit' >Create Task</button>
            </form>
        </PageContainer>
    );
};

export default CreateTask;