import React from 'react';

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


export function ConfusingInput(props) {
    return (
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    );
  }
  
  export  const InvalidComponent = (props) => {
    return <ConfusingInput placeholder="Enter text" handleChange={props.onChange} />;
  };
  