import React from 'react'

function renderAge(age) {
    return age < 21 ? 
        `I am ${age} and I am not old enough to drink` :
        `I am ${age} and I am not old enough to drink`;
}

function License(props) {
    return (
        <div className="license">
            <img src={props.image} />
            <div className="license-info">
                <h2>{props.name}</h2>
                <div>
                    <p><b>Street Address:</b>{props.streetAddress}</p>
                    <p><b>State: </b>{props.state}</p>
                </div>
                <p className="license-age">{renderAge(props.age)}</p>
            </div>
        </div>
    )
}

export default License;