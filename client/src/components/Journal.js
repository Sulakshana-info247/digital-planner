import React, { useState } from 'react';

const Journal = () => {
  const [journalEntry, setJournalEntry] = useState('');

  const handleJournalChange = (e) => {
    setJournalEntry(e.target.value);
  };

  const saveJournalEntry = () => {
    // Implement logic to save journal entry to the backend (MongoDB)
    // You can use axios or fetch to make an HTTP request
    console.log('Saving Journal Entry:', journalEntry);
  };

  return (
    <div className='Journal'>
      <h2>Journal</h2>
      <textarea
        rows="10"
        cols="50"
        value={journalEntry}
        onChange={handleJournalChange}
        placeholder="Write your journal entry here..."
      ></textarea>
      <br />
      <button onClick={saveJournalEntry}>Save Entry</button>
    </div>
  );
};

export default Journal;
