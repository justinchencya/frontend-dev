import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage () {
    const history = useHistory();
    
    function addMeetupHandler(meetupData) {
        fetch('https://react-meetup-data-default-rtdb.firebaseio.com/meetups.json', {
                method: 'POST', 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(meetupData)
            }).then(() => {
                console.log('New meetup created');
                history.replace('/');
            })
    }

    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
        </section>
    )
}

export default NewMeetupPage;