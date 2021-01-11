import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

function AddTodo({ addTodo }) {
    const [value, setValue] = useState(''); //initial state for add new task
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }
//In function handleChange receive as parameter event and is it represented with a e
//e allows access to some properties inside of target
    const handleAdd = () => {
        setValue('')
        addTodo(value)
    }

    return (
        <>
            <input type="text" onChange={handleOnChange} value={value} placeholder="You text here" />
            {value===''? <button >Add</button>
            :<button onClick={handleAdd}>Add</button>}
        </>
    )
}

export default connect(null, { addTodo })(AddTodo)