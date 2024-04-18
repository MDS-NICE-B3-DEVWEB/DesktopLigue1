import React, { useState, useEffect } from 'react';

function Classement() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://your-api-url/classementApi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_saison: 269, // Replace with the actual season ID
            }),
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <h1>{data.fullName}</h1>
                    {data.teams.map((team, index) => (
                        <div key={index}>
                            <h2>{team.teamName}</h2>
                            {team.logo && <img src={team.logo} alt={team.teamName} />}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Classement;