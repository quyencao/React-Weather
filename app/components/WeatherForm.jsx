var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    // get value in input form
    var location = this.refs.location.value;

    if(location.length > 0) {
      // clear input
      this.refs.location.value = '';
      // call parent function to fetch data
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button type="submit" className="hollow success expanded button">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
