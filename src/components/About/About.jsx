import './About.css'

const About = () => {
  return (
    <section className='about'>
      <h2 className='about__title'>О проекте</h2>
      <div className='about__container'>
        <div className='about__info'>
          <h3 className='about__info-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about__info'>
          <h3 className='about__info-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about__timeline-container'>
        <div className='about__timeline'>
          <p className='about__timeline-title'>1 неделя</p>
          <p className='about__timeline-text'>Back-end</p>
        </div>
        <div className='about__timeline'>
          <p className='about__timeline-title about__timeline-title_type_dark'>4 недели</p>
          <p className='about__timeline-text'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default About
