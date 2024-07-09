import { faGoogle, faMicrosoft, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "antd";
import { getSearchText } from "./ConvertSearch";

function App() {
  return (
    <div>
      <Input defaultValue={getSearchText('https://duckduckgo.com/?q=parse+url+javascript&t=osx&ia=web')}/>
      <Button type="primary" icon={<FontAwesomeIcon icon={faGoogle} />}>Google</Button>
      <Button type="primary" icon={<FontAwesomeIcon icon={faMicrosoft} />}>Bing</Button>
      <Button type="primary" icon={<FontAwesomeIcon icon={faSearchengin} />}>DuckDuckGo</Button>
    </div>
  );
}

export default App;
