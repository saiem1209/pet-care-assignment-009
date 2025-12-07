import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Myservices = () => {
    const [myservices, setmyServices] = useState([]);

    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:3000/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setmyServices(data))
            .catch(err => console.log(err))
    }, [user?.email])

    console.log(myservices)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myservices.map(service =>
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={service?.imgurl}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{service?.name}</div>
                                                <div className="text-sm opacity-50">{service?.date}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{service?.category}</p>
                                    </td>
                                    <td><p>{service?.price}</p></td>
                                    <td className='flex gap-2'>
                                        <button className="btn btn-error btn-xs">Delete</button>
                                        <button className="btn btn-primary btn-xs">Edit</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myservices;