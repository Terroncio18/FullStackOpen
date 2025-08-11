import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 }
  ])
  const [newName, setNewName] = useState('')

  const [newPhone, setNewPhone] = useState('')



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (newName.trim() === '') return
    if (newPhone.trim() === '') return

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} with phone ${newPhone} is already added to phonebook`)
      setNewName('')
      setNewPhone('')
      return
    }

    const newPerson = { name: newName, phone: newPhone, id: persons.length + 1 }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number: <input value={newPhone} onChange={handlePhoneChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>



      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name} - {person.phone}</li>
        ))}
      </ul>
    </div>
  )
}

export default App