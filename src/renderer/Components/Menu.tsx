import React, { useState } from 'react';
import { RepositoryManager } from './1_RepositoryManager';
import { AddRepository } from './2_AddRepository';
import { AlgorithmManager } from './3_AlgorithmManager';
import { AddAlgorithm } from './4_AddAlgorithm';
import { TemporalData } from './5_TemporalData';
import { ExecutedJobs } from './6_ExecutedJobs';
import { PathsLocal } from './7_PathsLocal';
import { APIResults } from './8_APIResults';
import { Fingerprints } from './9_Fingerprints';

const menuStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  background: '#333',
  marginTop: '4%',
};

const columnStyle = {
  margin: '0 10px',
};

const topButtons = {
  padding: '10px 10px',
  background: '#fff',
  color: '#333',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const bottomBar: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  position: 'fixed',
  bottom: '0',
  padding: '10px',
  background: '#333',
  marginBottom: '1%',
};

const bottomButtons: React.CSSProperties = {
  padding: '10px 10px',
  margin: '0 5px',
  background: '#fff',
  color: '#333',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

// Define your header component
export const Menu: React.FC = () => {
  const headerItems = [
    'Repository Manager',
    'Add a Repository',
    'Algorithm Manager',
    'Add an Algorithm',
    'Temporal Data',
  ];

  const additionalItems = [
    'Executed Jobs',
    'Path Results Local',
    'API Results Centralizer',
    'Fingerprints Import',
  ];

  const [selectedItem, setSelectedItem] =
    useState<string>('Repository Manager');

  const handleItemClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    const item = event.currentTarget.textContent;
    setSelectedItem(item !== null ? item : '');
  };

  const activateButtonStyle = {
    background: 'lightblue',
  };

  // Map header items to corresponding content components
  const contentComponentMap: { [key: string]: React.ReactNode } = {
    'Repository Manager': <RepositoryManager />,
    'Add a Repository': <AddRepository />,
    'Algorithm Manager': <AlgorithmManager />,
    'Add an Algorithm': <AddAlgorithm />,
    'Temporal Data': <TemporalData />,
    'Executed Jobs': <ExecutedJobs />,
    'Path Results Local': <PathsLocal />,
    'API Results Centralizer': <APIResults />,
    'Fingerprints Import': <Fingerprints />,
  };

  return (
    <>
      <header style={menuStyle}>
        {headerItems.map((item) => (
          <div key={item} style={columnStyle}>
            <button
              type="button"
              style={{
                ...topButtons,
                ...(item === selectedItem ? activateButtonStyle : {}),
              }}
              onClick={handleItemClick}
            >
              {item}
            </button>
          </div>
        ))}
      </header>
      {selectedItem && contentComponentMap[selectedItem]}
      <div style={bottomBar}>
        {additionalItems.map((item) => (
          <button
            key={item}
            type="button"
            style={{
              ...bottomButtons,
              ...(item === selectedItem ? activateButtonStyle : {}),
            }}
            onClick={handleItemClick}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
