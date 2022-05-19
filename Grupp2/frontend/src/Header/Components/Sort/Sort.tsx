import useCollapse from 'react-collapsed';
import './sort-style.css';

function SortComp({ setSort }: { setSort: any }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  function handleClick(event) {
    setSort(event.target.value);
  }

  return (
    <div className="collapsible">
      <div className="field" {...getToggleProps()}>
        {isExpanded ? 'Göm' : 'Sortera'}
        <i className="arrow-down"></i>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <button onClick={handleClick} value={'AToZ'}>
            A-Z
          </button>
          <br />
          <button onClick={handleClick} value={'ZToA'}>
            Z-A
          </button>
          <br />
          <button onClick={handleClick} value={'highestPriceFirst'}>
            Högsta pris
          </button>
          <br />
          <button onClick={handleClick} value={'lowestPriceFirst'}>
            Lägsta pris
          </button>
        </div>
      </div>
    </div>
  );
}

export default SortComp;
