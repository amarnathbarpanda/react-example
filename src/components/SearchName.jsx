import React, { useEffect, useState } from 'react'

const SearchName = () => {
    const [value, setValue] = useState('');
    const [names, setNames] = useState(['Rakesh', 'Mukesh', 'Rahul', 'Ram', 'Mukul']);
    
    useEffect(() => {
      
        const updatedNames = names.filter(name => (
            name.includes(value)
        ))
        setNames(updatedNames);
    }, [value]);
    

    // const handleChange = (e) =>{
    //     setValue(e.target.value);

    //     const updatedNames = names.toLowerCase().includes(value)
        
    //     setNames(updatedNames);
    // }

  return (
    <div>
        <form action="">
            {names.map((name) => (
                <p>{name}</p>
            ))}
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        </form>
    </div>
  )
}

export default SearchName;