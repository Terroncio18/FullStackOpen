const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>

  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>

  )
}


const Content = (props) => {
  return (
    <div>
      {props.parts.map((part,index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>

  )
}

const Total = (props) => {
  let total = 0;
  props.parts.forEach(part => {
    total += part.exercises;
  });

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>

  )
}

const App = () => {
 const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}



export default App