import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Person from './components/Person'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ filtteri, setFilter ] = useState('')

  
  const setToNewName = (e) => {
    e.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const names = persons.map(person => person.name)

    if (names.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setShowAll(false)
    setFilter(e.target.value)

  }

  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filtteri.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filtteri={filtteri} handleFilter={handleFilter} />

      <h2>Add a new</h2>
      
      <PersonForm setToNewName={setToNewName} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => 
          <Person key={person.name} name={person.name} number={person.number} />)
        }
      </div>
    </div>
  )
}

export default App