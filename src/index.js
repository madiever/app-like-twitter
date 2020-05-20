import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             years: 26
//         }
//         this.nextYear = () => {
//             this.setState(state => ({
//                 years: ++state.years
//             }))
//         }
//     }
//     render() {
//         const {name, surname, link} = this.props;
//         const {years} = this.state;
//         return (
//             <>
//                 <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//                 <a href={link}>My profile</a>
//                 <button onClick={this.nextYear}>++</button>
//             </>
//         )   
//     }
// }

// const All = () => {
//     return (
//         <>
//             <WhoAmI name="John" surname="Smith" link="facebook.com"/>
//             <WhoAmI name="Erzhan" surname="Smith" link="vk.com"/>
//             <WhoAmI name="Arslan" surname="Shahan" link="facebook.com"/>
//         </>
//     )
// }

ReactDOM.render(<App/>, document.getElementById('root'));

