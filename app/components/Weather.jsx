var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {

    this.setState({isLoading: true});

    OpenWeatherMap.getTemp(location)
      .then((temp) => {
          this.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
      }, (err) => {
         this.setState({isLoading:false});
         alert("Error: " + err);
      });
  },
  render: function() {

    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetch Weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
