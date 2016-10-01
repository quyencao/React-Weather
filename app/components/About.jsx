var React = require('react');

var About = (props) => {
  return (
      <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application build on React.</p>
        <p>Here are some of the tool I used:</p>
        <ol>
          <li><a href="https://facebook.github.io/react/" target="_blank">React</a> - A Javascript Framework.</li>
          <li><a href="https://github.com/quyencao/React-Weather" target="_blank">Github Repo</a> - Github repo for this app.</li>
          <li><a href="http://openweathermap.org/" target="_blank">Open Weather Map</a> - Weather API.</li>
        </ol>
      </div>
  );
}

module.exports = About;
