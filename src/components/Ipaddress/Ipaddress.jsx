import React, { useEffect, useState } from 'react';
import { WEBSITE_NAME } from '../../constants/constants';

const Ipaddress = () => {
    const [ipInfo, setIpInfo] = useState({
        ip: '',
        city: '',
        region: '',
        country: '',
        zip: '',
        lat: '',
        lon: '',
        timezone: '',
        isp: '',
        org: ''
    });
    const [browserTimezone, setBrowserTimezone] = useState('');

    useEffect(() => {
        // Fetch the IP address from ipify
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                setIpInfo(prev => ({ ...prev, ip: data.ip }));
                // Using the fetched IP address to get more detailed IP info
                const url = `http://ip-api.com/json/${data.ip}`;

                return fetch(url);  // Return the fetch promise to chain the next .then()
            })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                if (data.status === 'fail') {
                    throw new Error('Failed to fetch IP data: ' + data.message);
                }
                // Update state with the received data
                setIpInfo({
                    ip: data.query,
                    city: data.city,
                    region: data.regionName,
                    country: data.country,
                    zip: data.zip,
                    lat: data.lat,
                    lon: data.lon,
                    timezone: data.timezone,
                    isp: data.isp,
                    org: data.org
                });
        /* To display info in Title Tag */
        document.title = "Your Ip address is  " + data.query  +" - "+ WEBSITE_NAME;
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // Set timezone immediately available from the browser's locale settings
        setBrowserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);


    }, []);

    return (
        <div className="pomo-body body-content">
          <div className="ip">
            <h1>IP Address and Timezone Information</h1>
            <p>Browser Timezone: {browserTimezone}</p>
            <table className="tableip">
                <tbody>
                    <tr><th>IP Address:</th><td>{ipInfo.ip}</td></tr>
                    <tr><th>City:</th><td>{ipInfo.city}</td></tr>
                    <tr><th>Region:</th><td>{ipInfo.region}</td></tr>
                    <tr><th>Country:</th><td>{ipInfo.country}</td></tr>
                    <tr><th>ZIP Code:</th><td>{ipInfo.zip}</td></tr>
                    <tr><th>Latitude:</th><td>{ipInfo.lat}</td></tr>
                    <tr><th>Longitude:</th><td>{ipInfo.lon}</td></tr>
                    <tr><th>Timezone:</th><td>{ipInfo.timezone}</td></tr>
                    <tr><th>ISP:</th><td>{ipInfo.isp}</td></tr>
                    <tr><th>Organization:</th><td>{ipInfo.org}</td></tr>
                </tbody>
            </table>
          </div>
        </div>
    );
};

export default Ipaddress;
