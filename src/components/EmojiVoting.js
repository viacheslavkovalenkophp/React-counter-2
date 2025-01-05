import React, { useState, useEffect } from 'react';
import '../App.css';

const emojis = ['😊', '😂', '😍', '😎', '😜'];

const EmojiVoting = () => {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        const storedVotes = JSON.parse(localStorage.getItem('votes'));
        if (storedVotes) {
            setVotes(storedVotes);
        } else {
            setVotes(Array(emojis.length).fill(0));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(votes));
    }, [votes]);

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    };

    const getWinner = () => {
        const maxVotes = Math.max(...votes);
        const winnerIndex = votes.indexOf(maxVotes);
        return emojis[winnerIndex];
    };

    const clearResults = () => {
        setVotes(Array(emojis.length).fill(0));
        localStorage.removeItem('votes');
    };

    return (
        <div>
            <h1>Vote for Your Favorite Emoji!</h1>
            <div>
                {emojis.map((emoji, index) => (
                    <button key={index} onClick={() => handleVote(index)}>
                        {emoji} ({votes[index]})
                    </button>
                ))}
            </div>
            <div>
                <h2>Winner: {getWinner()}</h2>
            </div>
            <button onClick={clearResults}>Clear Results</button>
        </div>
    );
};

export default EmojiVoting;
