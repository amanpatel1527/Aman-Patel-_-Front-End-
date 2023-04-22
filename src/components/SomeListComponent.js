import React from 'react'
import "./SomeList.css";

class SomeListComponent extends React.Component {

  /**
   * 
   * super(props) must be called on the first line,
   * if the component is recieving props
   */
  // constructor (props) {
  //   this.state = { items: props.items }
  // }
  constructor (props) {
    super(props)
    this.state = { items: props.items }
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.items !== this.props.items
  }

  /**
   * handleClick should have been arrow function or the
   * function should have bind 'this'
   */
  // handleClick (index) {
  //   this.props.onClick(index)
  // }
  handleClick = (index) => {
    this.props.onClick(index)
  }

  /**
   * renderElement should have been arrow function or the
   * function should have bind 'this'
   */
  // renderElement (item, index) {
  //   return <li onClick={() => this.handleClick(index)}>{item.text}</li>
  // }
  renderElement = (item, index) => {
    return <li onClick={() => this.handleClick(index)}>{item.text}</li>
  }

  render () {
    return (
      <div className='main'>
      <h1>Click on the  Item </h1>
      <ul>
        {this.state.items.map((item, i) => this.renderElement(item, i+1))}
      </ul>
      </div>
    )
  }
}

export default SomeListComponent;