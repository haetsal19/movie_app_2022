import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (location.state === null) {
            navigate('/');
        }
    }, []);   //참고 https://xiubindev.tistory.com/100

    if (location.state) {
        return <span>{location.state.title}</span>
    } else {
        return null;
    }

}

export default Detail;