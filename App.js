import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, 'Hi Namsaste React'), React.createElement('h2', {}, 'Hi i am H2 tag')]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);