import React, { useEffect, useState } from 'react';
import { requests } from '../../api/requests';

export const useActsHook = () => {
    const [acts, setActs] = useState([])

    const effect = async () => {
        try {
            const res = await requests.getHistory.getActs();
            setActs(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        effect();
    }, [])
    return { acts }
}