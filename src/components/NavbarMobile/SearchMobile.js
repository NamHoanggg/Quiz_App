import { ActionIcon } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';

const SearchMobile = () => {
  return (
    <>
      <ActionIcon
        variant="default"
        size="xl"
        aria-label="search header"
        component={NavLink}
        to="/search"
      >
        <IconSearch size={16} stroke={1.5} />
      </ActionIcon>
    </>
  );
};

export default SearchMobile;
