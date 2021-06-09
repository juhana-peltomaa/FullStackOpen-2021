import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Person from './components/Person'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ filtteri, setFilter ] = useState('')
  const [ popMessage, setPopMessage] = useState(null)

  
  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
  })
}, [])

  const Notification = ({ message }) => {
    const notificationStyle = {
      color: 'green',
      background: 'lightgrey',
      borderStyle: 'solid',
      fontSize: 20,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    }
  
    if (message === null) {
      return null
    }

    return (
      <div style={notificationStyle}>
        {message}
      </div>
    )
  }

  const setToNewName = (e) => {
    e.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const names = persons.map(person => person.name)
    const id = persons.filter(person => person.name === newName).map(person => person.id)

    if (names.includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        
        personService
          .update(personObject, id.toString())
          .then(response => {
            personService
              .getAll()
              .then(initialPersons => {
                setPersons(initialPersons)
            })

        })
        setPopMessage(
          `${newName}'s number was successfully updated!`
          )
          setTimeout(() => {
            setPopMessage(null)
          }, 3000)
      } 
    } else {
      personService
        .create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
          
          setPopMessage(
            `${newName} was successfully added!`
            )
            setTimeout(() => {
              setPopMessage(null)
            }, 3000)
        })
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

  const handleDelete = (e) => {

    if (window.confirm(`Delete ${e.target.value} ?`)) {

      const currentPerson  = {
        id: e.target.id,
        name: e.target.value,
        number: e.target.number
      }

      personService
      .deletePerson(currentPerson)          
      .then(response => {
        personService
          .getAll()
          .then(initialPersons => {
            setPersons(initialPersons)
          })
      })
    }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={popMessage}/>

      <Filter filtteri={filtteri} handleFilter={handleFilter} />

      <h2>Add a new</h2>
      
      <PersonForm setToNewName={setToNewName} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      
      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => 
          <Person key={person.name} name={person.name} number={person.number} id={person.id} onClick={handleDelete}/>)
        }
      </div>
    </div>
  )
}

export default App