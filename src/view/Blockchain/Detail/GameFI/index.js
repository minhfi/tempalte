import React from 'react'
import ButtonClose from '@/components/Buttons/ButtonClose'
import ButtonGo from '@/components/Buttons/ButtonGo'
import Banner from '@/static/image/blockchain/blockchain-banner-gamefi.png'
import Character from '@/static/image/blockchain/blockchain-character.png'

const index = () => {
  return (
    <div className="gamefi">
      <ButtonClose path="/blockchain"/>

      <div className="gamefi-content" >
        <div className="gamefi-content__left">
          <div>
            <img src={Character} alt="character"/>
          </div>
          <div className="heading-4 gamefi-content__left--description">
            <div>Be rich, be free, be your own champion</div>
            <div>and be the mightiest ruler of the 7 kingdoms</div>
          </div>
          <ButtonGo title="GO FOR A TOUR"/>
        </div>
        <div className="gamefi-content__right">
          <img src={Banner} alt="banner"/>
        </div>
      </div>

      <div className="heading-6 gamefi-author">Powered by Dinovative</div>
    </div>
  )
}

export default index
