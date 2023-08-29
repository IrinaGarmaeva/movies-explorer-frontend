import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__container'>
        <div className='aboutProject__info'>
          <h3 className='aboutProject__info-title'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutProject__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutProject__info'>
          <h3 className='aboutProject__info-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutProject__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutProject__timeline-container'>
        <div className='aboutProject__timeline aboutProject__timeline_type_backend'>
          <div className='aboutProject__timeline-title'>1 неделя</div>
          <p className='aboutProject__timeline-text'>Back-end</p>
        </div>
        <div className='aboutProject__timeline aboutProject__timeline_type_other'>
          <div className='aboutProject__timeline-title aboutProject__timeline-title_type_dark'>4 недели</div>
          <p className='aboutProject__timeline-text'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject
