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

  export class InefficientList extends React.Component {
    render() {
      const items = this.props.items.map((item) => {
        return <div>{item}</div>;
      });
  
      return <div>{items}</div>;
    }
  }

  export class UnsafeComponent extends React.Component {
    componentDidMount() {
      fetch('https://api.example.com/data')
        .then((response) => response.json())
        .then((data) => {
          this.setState({ data });
        });
    }
  
    render() {
      return <div>{this.state.data}</div>;
    }
  }


  export const X = () => {
    return <div>Click me!</div>;
  };
