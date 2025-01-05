import React, { useState } from 'react';

const emojis = [
    { id: 1, symbol: "😀", votes: 0 },
    { id: 2, symbol: "😃", votes: 0 },
    { id: 3, symbol: "😅", votes: 0 },
    { id: 4, symbol: "🤣", votes: 0 },
];

const EmojiVoting = () => {
    const [emojiVotes, setEmojiVotes] = useState(emojis);

    const handleVote = (id) => {
        setEmojiVotes((prevVotes) =>
            prevVotes.map((emoji) =>
                emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
            )
        );
    };

    const handleClear = () => {
        setEmojiVotes(emojis);
    };

    const getWinner = () => {
        const maxVotes = Math.max(...emojiVotes.map((emoji) => emoji.votes));
        return emojiVotes.find((emoji) => emoji.votes === maxVotes);
    };

    return (
        <div className="emoji-voting">
            <h1>Emoji Voting</h1>
            <div className="emojis">
                {emojiVotes.map((emoji) => (
                    <div key={emoji.id} className="emoji">
            <span className="emoji-symbol" onClick={() => handleVote(emoji.id)}>
              {emoji.symbol}
            </span>
                        <span className="emoji-votes">Votes: {emoji.votes}</span>
                    </div>
                ))}
            </div>
            <div className="results">
                <button onClick={handleClear}>Очистити результати</button>
                {getWinner() && (
                    <div className="winner">
                        <h2>Переможець: {getWinner().symbol}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmojiVoting;
