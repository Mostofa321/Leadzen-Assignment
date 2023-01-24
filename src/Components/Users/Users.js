import React, { useEffect, useState } from 'react';
import User from './User';
import './Users.css'

const Users = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const totalUsers = users.length;
    const usersPerPage = 3;
    const pages = Math.ceil(totalUsers / usersPerPage);
    const [correntPage, setCorrentPage] = useState(0);
    const startUser = correntPage * 3;
    const endUser = startUser + usersPerPage;
    const correntUsers = users.slice(startUser, endUser);
    return (
        <div >
            <div className='mt-24 mb-12'>
                {
                    correntUsers.map(user => <User key={user.id} userInfo={user}></User>)
                }
            </div>
            <div className='mb-12 text-center'>
                {
                    (correntPage !== 0) && <button className='p-5' onClick={() => setCorrentPage(correntPage > 0 && correntPage - 1)}> Prv </button>
                }
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                    className={correntPage === number ? 'selected p-5' : 'p-5'}
                    onClick={() => setCorrentPage(number)}
                    >
                        {number + 1}
                    </button>)
                }
                {
                    correntPage !== (pages - 1) && <button className='p-5' onClick={() => setCorrentPage(correntPage + 1)}> Next </button>
                }
            </div>
        </div>
    );
};

export default Users;

