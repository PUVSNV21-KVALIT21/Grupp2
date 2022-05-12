import { useEffect } from 'react';

function SearchPage() {
  useEffect(() => {
    const query = window.location.search.replace('?q=', '');
    console.log(query);
  }, []);

  return <div></div>;
}

export default SearchPage;
