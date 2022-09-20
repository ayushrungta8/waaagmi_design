import { createContext, useCallback, useEffect, useState } from 'react';
const initialValue = {
  websites: [],
  setWebsites: () => {
    null;
  },
  selectedWebsites: [],
  setSelectedWebsites: () => {
    null;
  },
  filterWebsites: () => {
    null;
  },
  filters: [],
  setFilters: () => {
    null;
  },
};
interface WebsiteContextProps {
  websites: Website[];
  setWebsites: (websites: Website[]) => void;
  selectedWebsites: Website[];
  setSelectedWebsites: (websites: Website[]) => void;
  filterWebsites: () => void;
  filters: string[];
  setFilters: (filters: string[]) => void;
}
interface homePage {
  url: string;
}
const WebsiteContext = createContext<WebsiteContextProps>(initialValue);
export interface Website {
  name?: string;
  url: string;
  image?: string;
  date?: string;
  tags?: string;
  user?: string;
  email?: string;
  homePage?: homePage[];
  verified?: boolean;
}

const WebsiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [selectedWebsites, setSelectedWebsites] = useState<Website[]>(websites);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    setSelectedWebsites(websites);
  }, [websites]);

  const filterWebsites = useCallback(() => {
    if (filters.length === 0) {
      setSelectedWebsites(websites);
      return;
    }
    const temp: Website[] = [];
    websites.forEach((website) => {
      filters.forEach((filter) => {
        if (website?.tags?.includes(filter)) {
          temp.push(website);
        }
      });
    });
    // console.log(temp);
    setSelectedWebsites(temp);
  }, [websites, filters]);
  useEffect(() => {
    filterWebsites();
  }, [filters, websites, filterWebsites]);
  return (
    <WebsiteContext.Provider
      value={{
        websites,
        setWebsites,
        selectedWebsites,
        setSelectedWebsites,
        filterWebsites,
        filters,
        setFilters,
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
};

export { WebsiteContext, WebsiteProvider };
