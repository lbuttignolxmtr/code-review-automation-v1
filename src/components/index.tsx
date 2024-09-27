import React from 'react';

class BadButton extends React.Component {
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

export default BadButton;