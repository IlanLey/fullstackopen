/* 2.9 Phonebook Step 4 - Add Filter */
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  // Display person
  const contactInfo = persons.map((person) => (<p key={person.id}>{person.name} {person.number}</p>));

  // Add new name
  const handleName = (event) => {
    event.preventDefault();
    console.log("Entering letter...", event.target.value);
    setNewName(event.target.value);
  }

  // Add new number
  const handleNumber = (event) => {
    event.preventDefault();
    console.log("Entering number...", event.target.value);
    setNewNumber(event.target.value);
  }

  // Submit form change
  const handleSubmit = (event) => {
    
    // Prevents page reloading
    event.preventDefault();
    console.log(newName);

    // Check if name exists in phonebook
    const foundPerson = persons.find(person => person.name === newName);
    console.log(foundPerson);

    // If person exists in phonebook, alert the user
    if (foundPerson) {
      alert(`${newName} is already addded to phonebook`);
      return;
    }
    
    // New person object
    const newPerson = {
      name: newName, 
      id: persons.length + 1,
      number: newNumber,
    }
    
    // Combine the two object together inside the array
    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  }

  return (
    <>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input type="text"></input>
      </div>
      <h3>Add New Number</h3>
      <form onSubmit={handleSubmit}>
        <div> 
          name: <input value={newName} onChange={handleName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> 
        {contactInfo}
      </div>
    </>
  )
}

export default App