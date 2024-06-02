import './Hero.css'

export default function Hero({img , title}) {
  return (
    <section className='Hero'>
      <img src={img} alt="" />
      <h1>{title}</h1>
    </section>
  )
}
