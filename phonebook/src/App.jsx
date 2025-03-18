import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')

  // Display person
  const contacts = persons.map((person) => (<p key={person.id}>{person.name}</p>));

  // Add new name
  const handleChange = (event) => {
    event.preventDefault();
    console.log("My Input: ", event.target.value);
    setNewName(event.target.value);
  }

  // Submit form change
  const handleSubmit = () => {
    console.log(newName);
    

    
    setNewName('');
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {contacts}
      </div>
    </>
  )
}

export default App