import { useState } from 'react'
import './Form.css'

export default function Form() {

      const [Name, setName] = useState('')
      const [Email, setEmail] = useState('')
      const [Img, setImg] = useState()
      const [Data, setData] = useState([])

      function HandelName(e) {
            setName(e.target.value)
      }

      function HandelEmail(e) {
            setEmail(e.target.value)
      }

      function Handelimage(e) {
            const file = e.target.files[0]
            const url = URL.createObjectURL(file)
            setImg(url)
      }
      9
      function HandelArrey() {
            let body =
            {
                  name: Name,
                  email: Email,
                  img: Img,
            }

            setData([...Data, body])
            console.log(Data);
      }


      return (
            <section className='Form'>
                  <form action="">
                        <input type="text" placeholder='Enter Your Name' onChange={HandelName} />
                        <input type="email" placeholder='Enter Your E-Mail' onChange={HandelEmail} />
                        <input type="file" onChange={Handelimage} />
                  </form>
                  <button onClick={() => HandelArrey()}>Test</button>

                  <div>
                        {
                              Data.map((e, index) => (
                                    <div>
                                          <h2>{e.name}</h2>
                                          <h3>{e.email}</h3>
                                          <img src={e.img} alt="" />
                                    </div>
                              ))
                        }
                        {/* {
                              Data.map((object) => (
                                    <div>{object.name}</div>
                              ))
                        } */}
                  </div>
            </section>
      )
}
