import React from 'react';

const Error = () => (
    <div className='error error--404'>
        <h1 className='panel__heading'>
            Oops, I can{"'"}t seem to find that page. Try returning to the <a href='/'>home<span className='highlight'>page</span></a>
        </h1>
    </div>
);

export default Error;
