/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import toast from "react-hot-toast";

const ServicesDetails = () => {

    const { id } = useParams()
    const [services, setServices] = useState([]);
    const [servicedetails, setServicedetails] = useState(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) {
            toast.error("Please fill out all fields.");
            return;
        }
        toast.success("Booking successful!");
        setName("");
        setEmail("");
    }
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
                    <div className='mt-4'>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <h2 className='text-xl font-semibold text-center'>Book Service</h2>
                                <form onSubmit={handleSubmit}>
                                    <fieldset className="fieldset">
                                        <label className="label">Name</label>
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />

                                        <label className="label">Email</label>
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <button className="btn btn-neutral mt-4" type="submit">
                                            Book Now
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading service details...</p>
            )}

        </div>
    );
};

export default ServicesDetails;