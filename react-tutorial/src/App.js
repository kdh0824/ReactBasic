import React, {useRef} from 'react';
import UserList from "./UserList";

function App() {
    const users = [
        {
            id: 1,
            username: 'kdh',
            email: 'public.kdh@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com  '
        },
        {
            id: 3,
            username: 'kdh00',
            email: 'kdh00@example.com'
        }
    ];

    const nextId = useRef(4);

    const onCreate = () => {
        console.log(nextId.current);
        nextId.current += 1;
    }

    return (
        <UserList users={users}/>
    );
}

export default App;
