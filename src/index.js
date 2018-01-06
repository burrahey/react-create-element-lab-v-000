import React from 'react';
import ReactDOM from 'react-dom';

var meInReact = React.createElement('h1', {}, 'My First React Code');

<div class="me">
  <h1>An Awesome Person</h1>
  <p>Who is learning React</p>

  <ul class="my-interests">
    <li>JavaScript</li>
    <li>React</li>
    <li>Movies</li>
    <li>Ice cream</li>
  </ul>
</div>

var liJ = React.createElement('li', {}, 'Javascript');
var liR = React.createElement('li', {}, 'React');
var liM = React.createElement('li', {}, 'Movies');
var liI = React.createElement('li', {}, 'Ice cream');

var h1 = React.createElement('h1', {}, "An Awesome Person");
var p = React.createElement('p', {}, "Who is learning React");
var ul = React.createElement('ul', { className = "my-interests" , key : '0'}, [ liJ,liR,liM,liI ] );

var div = React.createElement('div', { className = "me" }, [h1, p, ul]);


ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
