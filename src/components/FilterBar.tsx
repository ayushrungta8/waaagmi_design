import React, { useContext, useEffect, useState } from 'react';

import { Website, WebsiteContext } from '@/contexts/websiteContext';

const FilterBar = ({ websites }: { websites: Website[] }) => {
  const { filters, setFilters } = useContext(WebsiteContext);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const tempTags: string[] = [];
    websites?.map((website) => {
      const temp = website.tags?.split(',');
      if (temp === undefined) return;
      tempTags.push(...temp);
    });

    setTags(Array.from(new Set(tempTags)));
  }, [websites]);

  const handleFilterClick = (tag: string) => {
    if (filters.includes(tag)) {
      setFilters(filters.filter((filter) => filter !== tag));
    } else {
      setFilters([...filters, tag]);
    }
  };

  return (
    <div className='mt-8 flex flex-wrap gap-3'>
      {tags?.map((tag) => (
        <div
          key={tag}
          className='flex cursor-pointer bg-white bg-opacity-10 px-4 py-2 text-center '
          style={
            filters.includes(tag)
              ? {
                  color: '#EFFE09',
                  border: '1px solid #EFFE09',
                }
              : {
                  border: '1px solid transparent',
                }
          }
          onClick={() => handleFilterClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
