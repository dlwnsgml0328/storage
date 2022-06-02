import React, { useState } from 'react';
import Select from 'react-select';

const Selection = () => {
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
    <div>
      <h3>react-select</h3>

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
};

export default Selection;
