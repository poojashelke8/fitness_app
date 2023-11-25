import React from 'react'
import './Commpages.css';
import { useParams } from 'react-router-dom';

const CommPages = () => {
    const { testId } = useParams();
    return (
        <div className='pages'>
            <h1>
                CommPages {testId}
            </h1>
            </div>
    )
}

export default CommPages