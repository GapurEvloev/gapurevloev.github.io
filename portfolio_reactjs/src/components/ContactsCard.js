import React from 'react';
import '../styles/ContactsCard.css';
import Anime from 'react-anime';

function ContactsCard(props) {
  return(
    <Anime easing="easeInSine" scale={props.scaleArr} opacity={[0, 1]} delay={300} duration={300}>
      <div className="card contacts-card" onClick={props.onClick('contact')} onMouseEnter={props.MouseEnter('contact')} onMouseLeave={props.MouseLeave('contact')}>
        <h2>Связаться</h2>
        <p>Я дружелюбный</p>
      </div>
    </Anime>
  )
}

export default ContactsCard;