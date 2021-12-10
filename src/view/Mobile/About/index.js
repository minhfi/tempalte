import React from 'react'
import logo from '@/static/svg/logo-icon.svg'
import logoMb from '@/static/svg/logo-mb.svg'
import background from '@/static/image/about/about-bg.png'
import mrTrungLe from '@/static/image/about/mr-trung-le.png'
import mrVietLe from '@/static/image/about/mr-viet-le.png'
import mrQuangLe from '@/static/image/about/mr-quang-le.png'
import mrQuocLe from '@/static/image/about/mr-quoc-le.png'
import mrThaiNguyen from '@/static/image/about/mr-thai-nguyen.png'
import mrTrungLeMb from '@/static/image/about/mr-trung-le-mobile.png'
import mrVietLeMb from '@/static/image/about/mr-viet-le-mobile.png'
import mrQuangLeMb from '@/static/image/about/mr-quang-le-mobile.png'
import mrQuocLeMb from '@/static/image/about/mr-quoc-le-mobile.png'
import mrThaiNguyenMb from '@/static/image/about/mr-thai-nguyen-mobile.png'
import shakeHands from '@/static/image/about/shake-hands.png'
import { Link } from 'react-router-dom'

const index = props => {
  const strengthList = [
    'human',
    'empathy',
    'innovation',
    'practical Technology'
  ]

  const humanList = [
    {
      avatar: mrTrungLe,
      avatarMobile: mrTrungLeMb,
      name: 'Trung Le',
      position: 'Founder & Chairman'
    },
    {
      avatar: mrVietLe,
      avatarMobile: mrVietLeMb,
      name: 'Viet Le',
      position: 'CEO'
    },
    {
      avatar: mrQuangLe,
      avatarMobile: mrQuangLeMb,
      name: 'Quang Le',
      position: 'CTO'
    },
    {
      avatar: mrThaiNguyen,
      avatarMobile: mrThaiNguyenMb,
      name: 'Thai Nguyen',
      position: 'CSO'
    },
    {
      avatar: mrQuocLe,
      avatarMobile: mrQuocLeMb,
      name: 'Quoc Le',
      position: 'Technology Director'
    }
  ]

  const handleScroll = e => {
    props.aboutRef.current = e.target.scrollTop
  }

  return (
    <>
      <div className="about" onScroll={handleScroll}>
        <div className="about-main">
          <div className="about-background">
            <img className="" src={background} alt="background-software"/>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} className="logo-image" alt="logo Dinovative"/>
              <img src={logoMb} className="logo-image logo-mobile" alt="logo Dinovative"/>
            </Link>
            <h2 className="logo-heading heading-5">Our Core Values & People</h2>
          </div>
          <div className="about-content">
            <h1 className="heading-2 about-content-heading">We define, then develop tech products that make a difference.</h1>
            <p className="description paragraph-3">Our work encompasses the different steps of building technology solutions, often starting with research before defining the business strategy and needs, mapping out the architecture and the roadmap. We then concentrate our minds on powerful ideas for the technology before developing and implementing those ideas into the final product.</p>
            <div className="about-strength-list">
              {strengthList.map(txt => (
                <h1 key={txt} className="about-strength-item heading-extra">
                  {txt}
                </h1>))}
            </div>
            <div className="about-strength-list-marquee">
              <div className="about-strength">
                <div className="about-strength-list-mobile">
                  <div className="about-strength-list-mobile-content">
                    {strengthList.slice(0, 3).map(txt => (
                      <h1 key={txt} className="about-strength-item-mobile">
                        {txt}
                      </h1>))}
                  </div>
                  <div className="about-strength-list-mobile-content">
                    {strengthList.slice(0, 3).map(txt => (
                      <h1 key={txt} className="about-strength-item-mobile">
                        {txt}
                      </h1>))}
                  </div>
                </div>

              </div>
            </div>
            <div className="about-strength-list-marquee">
              <div className="about-strength" style={{ top: 108 }}>
                <div className="about-strength-list-mobile">
                  <div className="about-strength-list-mobile-content">
                    <div className="about-strength-list-mobile">
                      <div className="about-strength-list-mobile-content">
                        {strengthList.slice(3).map(txt => (
                          <h1 key={txt} className="about-strength-item-mobile">
                            {txt}
                          </h1>))}
                      </div>
                    </div>
                  </div>
                  <div className="about-strength-list-mobile-content">
                    <div className="about-strength-list-mobile">
                      <div className="about-strength-list-mobile-content">
                        {strengthList.slice(3).map(txt => (
                          <h1 key={txt} className="about-strength-item-mobile">
                            {txt}
                          </h1>))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="about-human">
              {humanList.map(({ avatar, name, position }) => (
                <div key={name} className="about-human-card">
                  <div className="human-card-img">
                    <img src={avatar} alt={`${name} - ${position}`} />
                  </div>
                  <div className="human-card-info">
                    <h4 className="human-card-name heading-4">
                      {name}
                    </h4>
                    <span className="human-card-position paragraph-3">
                      {position}
                    </span>
                  </div>
                </div>))}
            </div>
            <div className="about-human-mb">
              {humanList.map(({ avatarMobile, name, position }) => (
                <div key={name} className="about-human-mb-card">
                  <div className="human-card-mb-img">
                    <img src={avatarMobile} alt={`${name} - ${position}`} />
                  </div>
                  <div className="human-card-info-mb">
                    <h4 className="human-card-mb-name heading-4">
                      {name}
                    </h4>
                    <span className="human-card-mb-position paragraph-3">
                      {position}
                    </span>
                  </div>
                </div>))}
            </div>
            <div className="about-contact">
              <div className="about-contact-img">
                <img src={shakeHands} alt="shake-hands" />
              </div>
              <h2 className="about-contact-heading heading-2">
                Let’s get in touch
              </h2>
              <p className="about-contact-info display-5">
                <span>A</span>
                8, Street 12, Tan Hung, Distrist 7, Ho Chi Minh City
              </p>
              <p className="about-contact-info display-5">
                <span>E</span>
                <a href="mailto:contact@dinovative.com.vn">
                  contact@dinovative.com.vn
                </a>
              </p>
              <p className="about-contact-info display-5">
                <span>P</span>
                <a href="tel:+84993103203">
                  0993 103 203
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
