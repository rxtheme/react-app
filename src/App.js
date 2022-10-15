import './App.css';

function App() {
  return (
    <div className='personStyle'>
      <Person name='Aouf' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sed.'></Person>
      <Person name='Yousuf' address='Dhaka'></Person>
      <Person name='Samira'></Person>
      <Person name='Anas'></Person>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: "20px auto",
    padding: '10px',
    width: '400px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name} </h1>
      <h4>Hello {props.address}</h4>
      <p>{props.desc}Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sed.</p>

    </div>
  )
}

export default App;
