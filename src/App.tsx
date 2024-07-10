import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Divider, Input, Typography } from 'antd';
import { getSearchText, performSearch } from './ConvertSearch';
import { Engines, fetchTabURL } from './helpers';
import { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const tabPromise = fetchTabURL();
    tabPromise.then(value => {
      const text = getSearchText(value as string);
      setSearchText(text);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        margin: '0px 20px',
      }}
    >
      <Typography.Title>Engine Swap</Typography.Title>
      <Input
        size="large"
        value={searchText}
        suffix={<SearchOutlined />}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Enter your search here"
      />
      {Engines.map(engine => (
        <Button
          key={engine.value}
          type="primary"
          size="large"
          shape="round"
          icon={<FontAwesomeIcon icon={engine.icon} />}
          onClick={() => window.open(performSearch(engine.value, searchText))}
        >
          {engine.name}
        </Button>
      ))}
      <div>
        <Divider />
        Made with ❤️ by{' '}
        <Button type="dashed" href="https://n818pe.com">
          Ryan Hunter
        </Button>
      </div>
    </div>
  );
}

export default App;
