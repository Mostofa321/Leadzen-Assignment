import React, { useState } from 'react';

const User = ({ userInfo }) => {
    const { name, username, email, phone, address, company, website } = userInfo
    console.log(userInfo);
    const [hiden, setHiden] = useState(true);
    const handleHiden = () => {
        hiden ? setHiden(false) : setHiden(true);
    }
    return (
        <div>
            {/* Brief information of the user */}
            <div className='container  mx-auto flex justify-between mt-12 mb-5'>
                <div className='w-1/5 '>
                    {company.name}
                </div>
                <div className='w-1/5 '>
                    <p className='font-bold'>CONTACT</p>
                    <p>{name}</p>
                </div>
                <div className='w-1/5'>
                    <p className='font-bold'>CITY</p>
                    <p>{address.city}</p>
                </div>
                <div className='w-1/5'>
                    <p className='font-bold'>STREET</p>
                    <p>{address.street}</p>
                </div>
                <div className='px-auto'>
                    {
                        hiden ?
                            <button onClick={handleHiden} className='bg-red-600 px-5 rounded-full text-white'>view Details</button>
                            :
                            <button onClick={handleHiden} className='bg-red-600 px-5 rounded-full text-white'>Hide Details</button>
                    }
                </div>
            </div>

            {/* Detailed information of the user */}
            {
                !hiden &&
                <div className='md:w-10/12 mx-auto  '>
                    <div>
                        <p className='font-bold'>Description</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur facilisis
                            quam, vel facilisis quam. Donec molestie pellentesque rhoncus. Curabitur sit amet dolor
                            lectus. Proin rhoncus diam et neque convallis, nec lacinia enim ullamcorper. Cras ultrices
                            velit non est malesuada, sed imperdiet dui finibus.
                        </p>
                    </div>
                    <div className='mt-5 flex'>
                        <div>
                            <p className='font-bold'>Contact Person</p>
                            <p>{name}</p>
                            <p className='font-bold'>Email</p>
                            <p>{email}</p>
                            <p className='font-bold'>Phone</p>
                            <p>{phone}</p>
                        </div>
                        <div className='ml-24'>
                            <p className='font-bold'>Address</p>
                            <p>{address.street}</p>
                            <p className='font-bold'>City</p>
                            <p>{address.city}</p>
                            <p className='font-bold'>Zipcode</p>
                            <p>{address.zipcode}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default User;