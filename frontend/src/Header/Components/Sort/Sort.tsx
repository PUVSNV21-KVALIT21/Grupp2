import useCollapse from 'react-collapsed';
import './style.css';

function Sort() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible">
      {/* <div className="field" {...getToggleProps()}>
        {isExpanded ? 'Hide' : 'Sort'}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <button>Alphabetical A-Z</button>
          <br />
          <button>Alphabetical Z-A</button>
          <br />
          <button>Highest price first</button>
          <br />
          <button>Highest price last</button>
          <br />
          <button>Discounted products</button>
        </div>
      </div> */}
    </div>
  );
}

export default Sort;
