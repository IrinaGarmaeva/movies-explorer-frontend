import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; {year}</p>
        <ul className='footer__links'>
          <li className='footer__link link'><a href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс Практикум</a></li>
          <li  className='footer__link link'><a href="https://github.com/IrinaGarmaeva" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
