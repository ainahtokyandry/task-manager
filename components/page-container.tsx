import React from 'react';

interface PageContainerProps {
    children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className='p-4 max-w-[800px] my-0 mx-auto flex flex-col gap-4'>
            {children}
        </div>
    );
};

export default PageContainer;