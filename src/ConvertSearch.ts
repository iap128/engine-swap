import { SearchEngines } from "./helpers"

/**
 * 
 * @param destination search engine we want to use
 * @param query the URL of the current search
 * @returns the URL of the new search
 */
export const performSearch = (destination: SearchEngines, query: string): string => {
    const searchText = getSearchText(query);
    const url = buildURL(destination, searchText);

    return url;
};

export const getSearchText = (query: string): string => {
    const url = new URL(query);
    const searchParams = url.searchParams;
    
    // Yahoo uses 'p' instead of 'q'
    if (url.host === 'search.yahoo.com') {
        return searchParams.get('p') || '';
    }
    return searchParams.get('q') || '';
};

const buildURL = (destionation: SearchEngines, query: string): string => {
    const encodedQuery = encodeURIComponent(query);

    switch (destionation) {
        case SearchEngines.Google:
            return 'https://www.google.com/search?q=' + encodedQuery;
        case SearchEngines.Bing:
            return 'https://www.bing.com/search?q=' + encodedQuery;
        case SearchEngines.DuckDuckGo:
            return 'https://duckduckgo.com/?q=' + encodedQuery;
        case SearchEngines.Yahoo:
            return 'https://search.yahoo.com/search?p=' + encodedQuery;
    }
};