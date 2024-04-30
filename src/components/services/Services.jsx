
import service1 from '../../assets/images/service-icon-01.png'
import service2 from '../../assets/images/service-icon-02.png'
import service3 from '../../assets/images/service-icon-03.png'
import courcebg from '../../assets/images/course bg.jpg'

import mern from '../../assets/images/mearn.png'
import mean from '../../assets/images/mean.jpg'
import react  from '../../assets/images/react js.png'
import node from '../../assets/images/node js.png'
import ai from '../../assets/images/ai.jpeg'
import python from '../../assets/images/python.webp'
import java from '../../assets/images/java.png'
import datascience from '../../assets/images/data science.webp'
import './Services.css'
import Card from '../card/Card'
export default function Services() {

  const courses=[{
    id:1,
    title:"REACT JS",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:react
  },
  {
    id:2,
    title:"NODE JS",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:node
  },
  {
    id:3,
    title:"MERN Stack",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:mern
  },
  {
    id:4,
    title:"Data Science",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:datascience

  },
  {
    id:5,
    title:"Python",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:python

  },
  {
    id:6,
    title:"Java",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:java
  },
  {
    id:7,
    title:"MEAN Stack",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:mean,
  },
  {
    id:8,
    title:"AI",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:ai
  }

]

  return (
    <div className="">
      
      {/* <img className='position-absolute' src={courcebg} alt=''/> */}
      <div className="services_outer">
      
      <h1 className='text-center position-relative pt-5  fw-semibold' ><span className='position-relative' style={{color:"#EEA127"}} >Our</span> Courses</h1>

<div className="container-fluid d-flex justify-content-center">
<Card courses={courses} />
   
</div>
    </div>
    </div>
  

  )
}
