import React, { useState } from 'react';
import Select from 'react-select';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options] = useState([
    {
      label: 'all',
      value: '',
    },
    {
      label: 'admin only',
      value: 'drafting',
    },
    {
      label: 'public (page X)',
      value: 'as_data',
    },
    {
      label: 'private',
      value: 'restricted',
    },
    {
      label: 'public',
      value: 'published',
    },
  ]);

  return (
    <div className='App'>
      <div style={{ width: '20%', margin: '0 auto' }}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          placeholder='Select the status'
          isSearchable={false}
          options={options}
        />
      </div>
    </div>
  );
}
