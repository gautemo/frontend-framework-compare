import React from 'react';

function CondinionallyRender() {
    const [show, setShow] = React.useState(true);

    const renderIt = () => {
        if (show) {
            return <p>👋👋👋👋👋</p>
        } else {
            return <p>💨</p>
        }
    }

    return (
        <>
            <input type="checkbox" onChange={e => setShow(e.target.checked)} checked={show} />
            {renderIt()}
            {show
                ?
                <p>👋👋👋👋👋</p>
                :
                <p>💨</p>
            }
            {show && <p>👋👋👋👋👋</p>}
            {show || <p>💨</p>}
        </>
    );
}

export default CondinionallyRender;
