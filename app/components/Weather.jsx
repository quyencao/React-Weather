var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
    }
  },
  handleSearch: function(location) {

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    OpenWeatherMap.getTemp(location)
      .then((temp) => {
          this.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
      }, (err) => {
         this.setState({
           isLoading:false,
           errorMessage: err.message
         });
      });
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;

    if(location && location.length > 0) {
      // Search Location
      this.handleSearch(location);

      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0) {
      // Search Location
      this.handleSearch(location);

      window.location.hash = '#/';
    }
  },
  render: function() {

    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetch Weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
