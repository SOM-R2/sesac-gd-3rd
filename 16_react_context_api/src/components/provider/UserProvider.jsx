import { useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function UserProvider(props) {
    const [name, setName] = useState('layla');
    return (
        <UserContext.Provider value={{ name, setName }}>
            {props.children}
        </UserContext.Provider>
    );
}
