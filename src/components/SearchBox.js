import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  console.log('SearchBox');
  return (
    <div className='pa2'>
      <input
        id="Search-Robots"
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
      <label for="Search-Robots">Search here!</label>
    </div>
  );
}

export default SearchBox;