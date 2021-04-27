import React from 'react';
import '../App.css';
import Banner from '../img/space_invaders_banner.png';
import Grandpa from '../img/space_invader_Grandpa.png';
import Grandma from '../img/space_invader_Grandma.png';

class FinishedGame extends React.Component {
  render() {
    console.log(Grandpa);
    return (

      <div className='container'>

        <img className='banner' src={Banner} alt='Title Game Banner' />

        <img className='grandpaImg' src={Grandpa} alt='Space Invader Grandpa' />

        <img className='grandmaImg' src={Grandma} alt='Space Invader Grandma' />
        <span className='grandpa'> Grandpa </span>
        <span className='grandma'> Grandma </span>

        <h2 className='gameOverDisplay'>
          {/* Si lostGame égale à true alors afficher Game Over sinon afficher You won */}
          {this.props.lostGame === true ? "GAME OVER" : "YOU WON !!!"}
        </h2>
      </div>
    )
  }
}

export default FinishedGame;