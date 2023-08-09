const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, 'Hi i am H1 tag'), React.createElement('h2', {}, 'Hi i am H2 tag')]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);