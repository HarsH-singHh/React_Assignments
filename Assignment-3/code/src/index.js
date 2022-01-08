import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
const employee={ 
  Name:'Alan Ford',
  empid:'00005152',
  Appointment:'9:00 (24-05-2016)',
  Email:'alan.form@email.nl',
  Phone:'+31123456789',
  Status:'In Progress',
  Door:'Mark',
  Time:'10:30 (25-05-2016)',
  prodimg:'https://www.w3schools.com/howto/img_avatar.png',
  prodname:'Boltaart Bosbessen',
  prodDesc:'Overheerlijke boltaart met Bosbessen uit de keuken van de bijenkorf.'
}
*/
ReactDOM.render(
  <React.StrictMode>
    <App /*employee={employee}*/ />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
