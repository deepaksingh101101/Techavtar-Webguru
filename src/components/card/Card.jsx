import { Link } from 'react-router-dom';
import mern from '../../assets/images/mearn.png';
import './Card.css'
export default function Card({ courses }) {
  return (
    <div className="row d-flex flex-wrap mt-5">
      {courses?.map(course => (
        <div className="course_card d-flex justify-content-center col-12 col-sm-6 col-md-4 col-lg-3 mb-5" key={course.id}>
          <div className="card  border-0" style={{ width: "18rem" }}>
            <img src={course?.img} style={{height:"172px"}} className="card-img-top" alt={course?.title} />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course?.description?.length > 50 ? course?.description?.substring(0, 50) + "..." : course?.description}</p>
              <Link to={`/course/${course?.id}`} className="btn view_details_btn w-100 mt-2">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
