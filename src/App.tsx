import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'antd';
import { getSearchText, performSearch } from './ConvertSearch';
import { Engines } from './helpers';

function App() {
  const searchURL = 'https://duckduckgo.com/?q=parse+url+javascript&t=osx&ia=web';
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px'
    }}>
      <Input defaultValue={getSearchText(searchURL)} />
      {Engines.map(engine => (
        <Button
          key={engine.value}
          type="primary"
          icon={<FontAwesomeIcon icon={engine.icon} />}
          onClick={() => window.open(performSearch(engine.value, searchURL))}
        >
          {engine.name}
        </Button>
      ))}
    </div>
  );
}

export default App;
