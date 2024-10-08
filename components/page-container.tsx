import React from 'react';

interface PageContainerProps {
    children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className='p-4 max-w-[1200px] my-0 mx-auto'>
            {children}
        </div>
    );
};

export default PageContainer;