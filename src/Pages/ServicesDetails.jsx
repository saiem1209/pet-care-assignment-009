/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {

    const { id } = useParams()
    const [services, setServices] = useState([]);
    const [servicedetails, setServicedetails] = useState(null)

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const findresult = services.find(service => service.serviceId == id)
        setServicedetails(findresult)

    }, [id, services])

    console.log(servicedetails)
    return (
        <div className='p-8'>

            {servicedetails ? (
                <div className='bg-white p-6 rounded-lg shadow'>
                    <img className='h-[400px] w-full object-cover' src={servicedetails?.image} alt="" />
                    <h2 className='text-3xl font-bold mb-4'>
                        {servicedetails.serviceName}
                    </h2>
                    <p><b>Category:</b> {servicedetails.category}</p>
                    <p><b>Provider Name:</b> {servicedetails.providerName}</p>
                    <p><b>Provider Email:</b> {servicedetails.providerEmail}</p>
                    <p><b>Price:</b> {servicedetails.price}</p>
                    <p><b>Rating:</b> {servicedetails.rating}</p>
                    <p><b>Description:</b> {servicedetails.description}</p>
                    <p><b>Slot Available:</b> {servicedetails.slotsAvailable}</p>
                </div>
            ) : (
                <p>Loading service details...</p>
            )}

        </div>
    );
};

export default ServicesDetails;