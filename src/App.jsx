import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image_hero_left from './assets/desktop/image-hero-left.png'
import image_hero_right from './assets/desktop/image-hero-right.png'
import logo from './assets/logo.svg';
import image_woman_in_videocall from './assets/desktop/image-woman-in-videocall.jpg'
import image_women_videochatting from './assets/desktop/image-women-videochatting.jpg'
import image_men_in_meeting from './assets/desktop/image-men-in-meeting.jpg'
import image_man_texting from './assets/desktop/image-man-texting.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {
        <div className="body">
          <header>
            <nav>
              <a href="index.html" className="logo">
                <img src={logo} alt="logo" />
              </a>
            </nav>
          </header>
          <main>
            <section className="head flex">
              <div className="img">
                <img src={image_hero_left} alt="image-hero-left" />
              </div>
              <div className="main-content">
                <h1>Group Chat<br />for Everyone</h1>
                <p className="body-text p">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
                <div className="buttons flex">
                  <button className="blue-btn btn">Download <span>v1.3</span></button>
                  <button className="purple-btn btn">What is it?</button>
                </div>
              </div>
              <div className="img">
                <img src={image_hero_right} alt="image-hero-right" />
              </div>
            </section>
            <div className="line-container flex">
              <div className="line"></div>
              <div className="num body-text">01</div>
            </div>
            <section className="item-container">
              <div className="items flex">
                <div className="item">
                  <img src={image_woman_in_videocall} alt="image woman in videovcall" />
                </div>
                <div className="item">
                  <img src={image_women_videochatting} alt="image woman in videochatting" />
                </div>
                <div className="item">
                  <img src={image_men_in_meeting} alt="image men in meeting" />
                </div>
                <div className="item">
                  <img src={image_man_texting} alt="image man texting" />
                </div>
              </div>
              <div className="text">
                <h5 className='overline'>Built for modern use</h5>
                <h2>Smarter meetings, all<br /> in one place</h2>
                <p className='body-text'>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
              </div>
            </section>
          </main>
          <footer>
            <div className="line-container flex _line">
              <div className="line"></div>
              <div className="num body-text">02</div>
            </div>
            <div className="footer-container flex">
              <h2>Experience more together</h2>
              <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
              <div className="btn purple-btn flex">Download <span>v1.3</span></div>
            </div>
          </footer>
        </div>
      }
    </>
  )
}

export default App
