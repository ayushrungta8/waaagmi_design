import { createContext, useEffect, useState } from 'react';
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

const WebsiteContext = createContext<WebsiteContextProps>(initialValue);
export interface Website {
  name?: string;
  url: string;
  image?: string;
  date?: string;
  tags?: string;
  user?: string;
  email?: string;
  homepage?: string;
  verified?: boolean;
}

const WebsiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [selectedWebsites, setSelectedWebsites] = useState<Website[]>(websites);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    setSelectedWebsites(websites);
  }, [websites]);

  const filterWebsites = () => {
    const temp: Website[] = [];
    websites.forEach((website) => {
      if (website?.tags?.includes(filters[0])) {
        temp.push(website);
      }
    });
    setSelectedWebsites(temp);
  };

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
