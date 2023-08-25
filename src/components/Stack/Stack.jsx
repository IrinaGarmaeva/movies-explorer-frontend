import './Stack.css'

const Stack = () => {
  return (
    <section className='stack'>
      <h2 className='stack__title'>Технологии</h2>
      <div className='stack__container'>
        <h3 className='stack__subtitle'>7 технологий</h3>
        <p className='stack__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='stack__items'>
          <li className='stack__item'>HTML</li>
          <li className='stack__item'>CSS</li>
          <li className='stack__item'>JS</li>
          <li className='stack__item'>React</li>
          <li className='stack__item'>Git</li>
          <li className='stack__item'>Express.js</li>
          <li className='stack__item'>mongoDB</li>
        </ul>
      </div>
    </section>
  )
}

export default Stack
