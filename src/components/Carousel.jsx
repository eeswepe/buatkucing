import './Carousel.css'

function Carousel() {

  const pindah = () => {
    window.location.href = "https://photos.app.goo.gl/3DgterkDh2SiKbdu9"
  }

  return (
    <div className='carousel'>
        <h1>Galleries</h1>
        <div className="cover">
            <img src="/images/2.jpg" alt="" />
        </div>
        <button onClick={pindah}>Lihat Foto Lain</button>
    </div>
  )
}

export default Carousel