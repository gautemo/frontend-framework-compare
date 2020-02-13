import React from 'react';

function List() {
    const todos = ['Eat', 'Move', 'Code', '😴😴😴'];

    return (
        <ul>
            {
                todos.map(todo =>
                  <li key={todo}>{todo}</li>
                )
            }
        </ul>
    );
}

export default List;
