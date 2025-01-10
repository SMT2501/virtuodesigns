import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <img src={icon} alt={`${title} Icon`} style={{ width: '50px', marginBottom: '10px' }} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};


export default ServiceCard;

