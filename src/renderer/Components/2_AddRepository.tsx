import React from 'react';

export const AddRepository: React.FC = () => {
  return (
    <div className="add-repository-container">
      <div style={{ width: '100%', height: '28em', margin: '4% 0 2%' }}>
        <textarea style={{ width: '100%', height: '100%' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button type="button">Save</button>
      </div>
    </div>
  );
};
