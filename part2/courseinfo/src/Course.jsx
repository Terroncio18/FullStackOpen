const Header = ({ title }) => <h1>{title}</h1>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>

  )
}

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = ({ parts }) => {

  const total =
    parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>

  )
}

const Course = ({ course }) => {

  return (
    <div>
      <Header title="Web Development Curriculum" />
      {course.map(course => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}

    </div>
  )
}

export default Course