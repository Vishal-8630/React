import React from 'react';

function Main() {
    return (
        <div className='main'>
            <h1 className="main__heading">
                Fun facts about React 
            </h1>

            <ul className="main__list">
                <li className="main__list__items">Was released in 2013</li>
                <li className="main__list__items">Was originally created by Jordan Walke</li>
                <li className="main__list__items">Has well over 100k start on GitHub</li>
                <li className="main__list__items">Is maintained by Facebook.</li>
                <li className="main__list__items">Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

export default Main;