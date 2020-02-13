import React, { useEffect } from 'react';

function AlterState() {
    const [human, setHuman] = React.useState({ name: 'Gaute', age: 28, favouriteDinner: 'Pizza' });
    const [counter, setCounter] = React.useState(0);

    useEffect(() => {
        setHuman({ ...human, favouriteDinner: 'Candy' });
        setCounter(counter + 1);
    }, []);

    return (
        <div>
            {human.name}, {human.age}, {human.favouriteDinner}. Counter: {counter}
        </div>
    );
}

export default AlterState;
