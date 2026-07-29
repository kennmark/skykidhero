import manta from './../assets/images/animated/animated-9.gif'
import skylogo from './../assets/images/skylogo.png'
import Footer from './Footer'

const ComingSoon = () => {
  return (
    <div>
      <div>
        <a href="https://www.thatskygame.com/" title="That Sky Game">
          <img src={skylogo} alt="Sky logo" className="skylogo" />
        </a>

        <h4>Sky: Children of the Light-PH</h4>
      </div>
      <h2>
        Gabay Skykid{' '}
        <span>
          <img src={manta} alt="crabby" className="manta" />
        </span>{' '}
        Malapit Na!
      </h2>
      <p>
        Ang website na ito ay ginawa para makatulong sa mga baguhang manlalaro
        ng Sky. Paalala lamang, ito ay walang kahit anumang koneksyon sa mismong
        laro at may-ari ng laro.
      </p>
      <Footer />
    </div>
  )
}

export default ComingSoon
