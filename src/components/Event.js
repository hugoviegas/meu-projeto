import Button from "./Button"

function Event({ number }) {

    function myEvent() {
        console.log(`item added to cart`)
    }

    function favEvent(){
        console.log(`item added to favorite`)
    }

    return (
        <div>
            <p>Click to show the event</p>
            <Button event={myEvent} text="Add to cart" />
            <Button event={favEvent} text="Add to favorite" />
            
        </div>
    )
}

export default Event