import { useState } from 'react';


const useTasks = (List, task) => {
    
    const add = () => {
        List.unshift(task);
    };

    const remove = () => {
    };

    return {add, remove };
};


export default useTasks;