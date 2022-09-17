import { useEffect, useState } from 'react';

//Components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if(response.ok){
                setWorkouts(json);
            }
        }

        fetchWorkouts();
    }, []) 
    // the [] is a dependency array, if it's empty useEffect
    // will only fire once (first render)

    return (
        <div className="home">
            <div className="workouts">
                {/* Only map if workout != null */}
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;