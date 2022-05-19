import useCollapse from 'react-collapsed';
import './sort-style.css';

function Sort() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible">
      <div className="field" {...getToggleProps()}>
        {isExpanded ? 'Göm' : 'Sortera'}
        <i className="arrow-down"></i>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <button>A-Z</button>
          <br />
          <button>Z-A</button>
          <br />
          <button>Högsta pris</button>
          <br />
          <button>Lägsta pris</button>
        </div>
      </div>
    </div>
  );
}

export default Sort;
