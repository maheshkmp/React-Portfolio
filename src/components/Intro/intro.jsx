import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <dev className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm<span className="introName"> Smith</span><br/>Website Designer</span>
            <p className="introPara">I'm skilled web designer with experience in creating <br />visually applying and user freindly website</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </dev>
        <img src={bg} alt="Profile" className="bg" />
        
    </section>
  ); 
}

export default Intro
