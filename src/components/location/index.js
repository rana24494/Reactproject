import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2900812806183!2d144.8682429148899!3d-37.78324107975781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65e0affb727cb%3A0xaf9dbe9d09df2481!2s190%20Ballarat%20Rd%2C%20Maidstone%20VIC%203012!5e0!3m2!1sen!2sau!4v1582063942538!5m2!1sen!2sau" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;