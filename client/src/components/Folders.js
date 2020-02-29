import React from 'react';

export default function Folders({ folders, isLoading, error }) {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {folders.map(folder => (
        <div key={folder.id}>{folder.name}</div>
      ))}
    </div>
  );
}
