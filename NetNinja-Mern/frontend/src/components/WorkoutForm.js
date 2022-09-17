/**
 * e = event 
 * e.target.value = the input value will be the title value
 * value={title} will reflect change in the input
 * for fetch use the Server.JS route
 * JSON.stringify returns object as a json object
 * 
 * Not checked: If reps/load > 0
 */
import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault(); //Reload the page

        const workout = {title, load, reps};

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }            
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        } else if (response.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            console.log("New Workout Added:", json);
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exersize Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
            />

            <label>Load (in kg):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)} 
                value={load}
            /> 

            <label>Reps:</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)} 
                value={reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;