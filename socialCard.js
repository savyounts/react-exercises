import React from 'react'
import logo from './logo.svg';
import './App.css';


export default (props) => (
  <div style={divStyles}>
    <header style={headerStyles}>
      <img src={logo} alt="logo" style={imgStyles}/>
      <h1>{props.header}</h1>
      <div className="author" style={authorStyles}>
        <p>{props.author}</p>
        <img src={logo} alt={props.author} style={imgStyles}/>
      </div>
    </header>
    <footer style={footerStyles}>
      <p><span style={{fontWeight: 'bold'}}>{props.header}</span><br></br>
      {props.text}</p>
    </footer>

  </div>
)

const divStyles={
  width: "500px",
  margin: "3em",
  borderRadius: '5px',
  border: "1px solid lightgrey",
  height: '350px',


}
const headerStyles = {
  display:'grid',
  gridTemplateRows: 'auto 1fr auto',
  backgroundColor:"orange",
  color:"white",
  padding: '10px',
  justifyitems: "end",
  textAlign: 'center',
  height: '225px'
}

const authorStyles = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  backgroundColor: 'white',
  color: 'orange',
  placeItems: 'center center',
  justifySelf: 'end'
}

const imgStyles = {
  width: '50px'
}

const footerStyles = {
  padding: '0 10px'
}
