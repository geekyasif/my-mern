import React, { useState } from 'react'
import axios from 'axios'

export default function CreateUser() {
    const [user, setUser]  = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        const newUser = {
            username : user
        }
        console.log(newUser)
        
        axios.post('http://localhost:5000/users/add', newUser)
        .then(res => console.log(res.data));

        setUser('')
    }

    return (
        <div>
                <h3 className="my-4">Create New User</h3>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label  className="form-label">Username</label>
                        <input type="text"  className="form-control" id="description" value={user} onChange={(e) => setUser(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        
           </div>
    )
}
