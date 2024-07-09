import { faGoogle, faMicrosoft, faSearchengin, faYahoo, IconDefinition } from "@fortawesome/free-brands-svg-icons";

export enum SearchEngines {
    Google = "Google",
    Bing = "Bing",
    DuckDuckGo = "DuckDuckGo",
    Yahoo = "Yahoo"
};

interface SearchEngineItem {
    name: string;
    value: SearchEngines;
    icon: IconDefinition;
};

export const Engines: SearchEngineItem[] = [
    {
        name: 'Google',
        value: SearchEngines.Google,
        icon: faGoogle
    },
    {
        name: 'Bing',
        value: SearchEngines.Bing,
        icon: faMicrosoft
    },
    {
        name: 'Yahoo',
        value: SearchEngines.Yahoo,
        icon: faYahoo
    },
    {
        name: 'DuckDuckGo',
        value: SearchEngines.DuckDuckGo,
        icon: faSearchengin
    }
];

function queryTabURL() {
    return new Promise((resolve, reject) => {
      try {
        chrome.tabs &&
          chrome.tabs.query(
            {
              active: true,
              currentWindow: true,
            },
            tabs => {
              // use `url` here inside the callback because it's asynchronous!
              resolve(tabs[0].url);
            },
          );
      } catch (e) {
        reject(e);
      }
    });
  }
  
  export const fetchTabURL = async () => {
    let responseURL = await queryTabURL();
    return responseURL;
  };