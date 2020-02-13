import React from 'react';

function InputBind() {
    const [text, setText] = React.useState('');

    return (
        <>
            <input className="center-box" type="text" onChange={e => setText(e.target.value)} />
            <p>{text}</p>
        </>
    );
}

export default InputBind;
