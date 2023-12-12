/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './components.css';

export interface RepositoryManagerTable {
  id: number;
  repository: string;
  api: string;
  cronJob: string;
  status: boolean;
}
export const RepositoryManager: React.FC = () => {
  const [data, setData] = useState<RepositoryManagerTable[]>([
    {
      id: 1,
      repository: 'PACS system production',
      api: 'eitid=1, aid=1',
      cronJob: '*/5****',
      status: false,
    },
    {
      id: 2,
      repository: 'PACS system production',
      api: 'eitid=1, aid=1',
      cronJob: '*/5****',
      status: false,
    },
    {
      id: 3,
      repository: 'PACS system production',
      api: 'eitid=1, aid=1',
      cronJob: '*/5****',
      status: false,
    },
    {
      id: 4,
      repository: 'PACS system production',
      api: 'eitid=1, aid=1',
      cronJob: '*/5****',
      status: false,
    },
    {
      id: 5,
      repository: 'PACS system production',
      api: 'eitid=1, aid=1',
      cronJob: '*/5****',
      status: false,
    },
  ]);

  const handleStatusToggle = (index: number): void => {
    const updatedData = [...data];
    updatedData[index].status = !updatedData[index].status;
    setData(updatedData);
    // Update the API based on the updated state here
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="th" style={{ width: '8%' }}>
              Repo Id
            </th>
            <th className="th" style={{ width: '32%' }}>
              Medical Data Repository
            </th>
            <th className="th" style={{ width: '30%' }}>
              evalu@ + Med API
            </th>
            <th className="th" style={{ width: '15%' }}>
              Cron Job
            </th>
            <th className="th" style={{ width: '15%' }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td className="td">{row.id}</td>
              <td className="td">{row.repository}</td>
              <td className="td">{row.api}</td>
              <td className="td">{row.cronJob}</td>
              <td className="td">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={row.status}
                    onChange={() => handleStatusToggle(index)}
                  />
                  <span className="slider" />
                  {row.status ? 'On' : 'Off'}
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
