import { faGoogle, faMicrosoft, faSearchengin, IconDefinition } from "@fortawesome/free-brands-svg-icons";

export enum SearchEngines {
    Google = "Google",
    Bing = "Bing",
    DuckDuckGo = "DuckDuckGo"
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
        name: 'DuckDuckGo',
        value: SearchEngines.DuckDuckGo,
        icon: faSearchengin
    }
]