import React from 'react';

export default function Notes({ notes, isLoading, error }) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>{note.name}</div>
      ))}
    </div>
  );
}
