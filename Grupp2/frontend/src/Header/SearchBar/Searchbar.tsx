import { useEffect, useRef } from 'react';
import './Searchbar-style.css';

function SearchBar({ query, onQueryChange }: { query: any; onQueryChange: any }) {
  const searchInput: any = useRef();

  function changeEvent() {
    const q = searchInput.current?.value;
    onQueryChange?.(q);
    console.log(q, onQueryChange);
  }

  useEffect(() => {
    searchInput.current.value = query;
  });

  return (
    //action = url to send 'get' to
    <form className="searchbar-wrapper" method="get" action="/search">
      <input
        ref={searchInput}
        id="searchbar"
        name="q"
        type="text"
        placeholder={'Search...'}
        onChange={changeEvent}
      />
    </form>
  );
}

export default SearchBar;
