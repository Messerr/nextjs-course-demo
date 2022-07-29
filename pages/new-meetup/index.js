import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
    function onMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={onMeetupHandler} />
    )
}

export default NewMeetup;