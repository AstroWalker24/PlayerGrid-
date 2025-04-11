import React, { useState, useEffect } from "react";
import axios from "axios";


import PlayerCard from "./PlayerCard";
import Loader from "./Loader";
import Error from "./Error";
import GridHeader from "./GridHeader";

export default function PlayerGrid() {
    const [teamData, setTeamData] = useState(null);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://192.168.125.196:3000/players");
                setTeamData(response.data);
                setLoading(false);
            }
            catch (error) {
                setError("Failed to fetch data from the server : ", error);
                setLoading(false);
            }
        };
        fetchData();

    }, []);


    if (loading === true) {
        return (
            <Loader />
        );
    }

    if (error) {
        return (
            <Error errorMessage={error} />
        )
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-2">
            <div className="w-full max-w-sm h-[90vh] flex flex-col">
                <GridHeader teamLogo={teamData.logo} teamName={teamData.team} SportName={teamData.sport_type} />

                <div className="flex-1 overflow-y-auto">
                    {teamData.players.map((player) => (

                        <div
                            key={player.name}
                            className="flex items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-200"
                            onClick={() => setSelectedPlayer(player)}
                        >
                            <img src={player.image} alt="" className="w-6 h-6 rounded-full mr-2" />
                            <span className="text-xs flex-1">{player.name}</span>
                            <span className="text-xs">{player.country}</span>
                        </div>
                    ))}
                </div>
            </div>

            {selectedPlayer && (
                <PlayerCard player={selectedPlayer} onClose={() => setSelectedPlayer(null)}/>
            )}
        </div>

    );


}