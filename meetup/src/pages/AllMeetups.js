import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage () {
    const[meetupData, setMeetupData] = useState(null);
    const[isFetching, setIsFetching] = useState(true);

    // We need to wrap the fetch process inside the useEffect component.
    // Otherwise the fetch runs into an infinite loop
    // because when setMeetupData or setIsFetching is called, AllMeetupPage will run again
    useEffect (() => {
      setIsFetching(true);

      fetch(
        'https://react-meetup-data-default-rtdb.firebaseio.com/meetups.json'
      ).then(response => {
        return response.json();
      }).then(data => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key, 
            ...data[key]
          };

          meetups.push(meetup);
        }

        setMeetupData(meetups);
        setIsFetching(false);
      });
    }, [])

    return (
        <section>
            <h1>All Meetups</h1>
            {! isFetching && <MeetupList meetups={meetupData} />}
        </section>
    )
}

export default AllMeetupsPage;