import React from 'react'

function Back() {
    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark btn-lg back"
                onClick={() => console.log('Wciśnięto "Wróć"')}>
                Wróć
        </button>
        </div>
    )
}

export default Back
