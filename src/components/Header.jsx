import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';

function Header({ title, onSearchPersons, showSearchPersons, onAddPerson, showAddPerson }) {
  const location = useLocation();

  return (
    <Flex mb="3rem">
      <Heading size="xl">{title}</Heading>
      <Spacer />
      {location.pathname === '/' && (
        <Flex>
          <Button colorScheme="teal" onClick={onAddPerson}>
            {showAddPerson ? 'Hide' : 'Add person'}
          </Button>
          <Box m="5px" />
          <Button colorScheme="teal" onClick={onSearchPersons}>
            {showSearchPersons ? 'Hide filters' : 'Show filters'}
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

Header.defaultProps = {
  title: 'List of persons',
  showSearchPersons: true,
  showAddPerson: false,
  onSearchPersons: null,
  onAddPerson: null,
};

Header.propTypes = {
  title: PropTypes.string,
  showSearchPersons: PropTypes.bool,
  showAddPerson: PropTypes.bool,
  onSearchPersons: PropTypes.func,
  onAddPerson: PropTypes.func,
};

export default Header;
