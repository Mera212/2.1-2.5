import App from "../App"    

const Course = ({course})=>{
    const total = course.parts.reduce((a,b) => a + b.exercises, 0)
      return (
      <div>
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <h2>parts</h2>
      <ul>
      {course.parts.map(part => <li key={part.id}> 
      {part.name} {part.exercises}</li>
      )}
      </ul>
      <p>total of {total} exercises</p>
      
      </div>
    )
  }
  export default Course