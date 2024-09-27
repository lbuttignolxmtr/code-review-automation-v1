import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Separate CSS for styling

export const Button = ({ label, onClick, disabled = false }) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled} aria-label={label}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export const TextInput = ({ placeholder, value, onChange }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-input"
        aria-label={placeholder}
      />
    );
  };
  
  TextInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  export const ItemList = ({ items }) => {
    return (
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id}>{item.name}</li> // Unique key for each item
        ))}
      </ul>
    );
  };
  
  ItemList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export class BadButton extends React.Component {
  render() {
    const style = {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px',
    };

    return (
      <button style={style} onClick={this.props.onClick}>
        {this.props.label}
      </button>
    );
  }
}


const DataFetcher = ({ url }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Network response was not ok');
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchData();
    }, [url]);
  
    if (error) return <div>Error: {error}</div>;
    return <div>{JSON.stringify(data)}</div>;
  };
  
  DataFetcher.propTypes = {
    url: PropTypes.string.isRequired,
  };
  
  export const ClickMeButton = () => {
    return <button>Click me!</button>;
  };