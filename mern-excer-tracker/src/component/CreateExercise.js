import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateExercise() {
    const [desc, setDesc] = useState('');
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState(new Date())
    const [username, setUsername] = useState([])

    // getting all the data from database using api
    useEffect(() => {
        axios.get("http://localhost:5000/users/")
        .then( (res) => {
            if (res.data.length > 0){
                const users =  res.data.map( user => user.username)
                setUsername(users)
            }
        } )
    }, [])

    const submitForm = (e) => {
        e.preventDefault()
        const Exercise = {
            username : username,
            description : desc,
            duration : duration,
            date : date
        }

        console.log(Exercise)
        
        // saving data to database
        axios.post('http://localhost:5000/exercises/add', Exercise)
        .then(res => console.log(res.data));


        // window.location = '/'

        setUsername('')
        setDate('')
        setDesc('')
        setDuration('')
    }

    return (
           <div>
                <h3 className="my-4">Create New Exercise Log</h3>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <select id="username" className="form-select" onChange={(e) => setUsername(e.target.value)}>
                        {username.map(user =>  <option key={user} value={user}>{user}</option> )}
                    </select>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Description</label>
                        <input type="text"  className="form-control" id="description" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Duration</label>
                        <input type="text" className="form-control" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label >Date:</label>
                        <br />
                        <DatePicker selected={date} onChange={(date) => setDate(date)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        
           </div>
    )
}
