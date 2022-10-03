import React from 'react';

class Info extends React.Component {

  render() {
    return (
      <>
        {this.props.list.map((item) => {
          return (
            <div className="info" key={item.value}>
              Card is {item.value} • unmount is {item.count}  <br/> <br/>
            </div>
          );
        })}
      </>
    );
  }
}

export default Info;