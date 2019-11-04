import React, { Component } from 'react';

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }
  
  render() {
    const { handleInputChange } = this;
    const { searchUser } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        <p>Github Username: </p>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={() => {
          searchUser(inputValue);
        }}>GET USER</button>
      </div>
    )
  }
}

export default SearchUser;  