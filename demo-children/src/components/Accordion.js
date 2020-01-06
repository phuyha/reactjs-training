import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  }

  render() {
    const { heading, children } = this.props;
    const { isCollapsed } = this.state;
    return <div className="Arcordion" onClick={this.onClick}>
      <div className="Heading">
        <h2>{heading}</h2>
      </div>
    { !isCollapsed && <div className="Content">{ children }</div> }
    </div>
  }
}

export default Accordion;