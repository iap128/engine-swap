import { SearchEngines } from "./helpers"

/**
 * 
 * @param source search engine we're currently using
 * @param destination search engine we want to use
 * @param query the URL of the current search
 * @returns the URL of the new search
 */
export const performSearch = (source: SearchEngines, destination: SearchEngines, query: string): string => {
    const searchText = getSearchText(query);
    const url = buildURL(destination, searchText);

    return url;
};

export const getSearchText = (query: string): string => {
    const url = new URL(query);
    const searchParams = url.searchParams;
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
    }
};