import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');

//JSX transpiled before it reaches the js (parcel-babel)
//JSX => React.createElement => ReactElement-JS Object => HTMLELement(Render)
const Title = () => (<h1 id='heading' className='head' tabIndex='5'>
    Namaste Javscript using jsx
</h1>);
const count = 1000;
const Heading = () => <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    {count}
    <h1 className='heading'>Namaste Javascript using functional component</h1>
</div>


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />);