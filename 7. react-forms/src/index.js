import React from 'react';
import { render } from 'react-dom';

class FavoriteColorForm extends React.Component {
  state = { 
    value: ''
  }
  
    newColor = e=> 
      this.setState({ value: e.target.value })

    submit = e => {
      console.log(`New Color: ${this.state.value}`)
      e.preventDefault()
    }
    
    render() {
    return (
      <form onSubmit={this.submit}>
        <label>Favorite Color</label>
        <input 
          type="color"
          onChange={this.newColor} />
      </form>
    )
  }
}

render(
  <FavoriteColorForm />,
  document.getElementById('root')
)