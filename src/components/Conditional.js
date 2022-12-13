import { useState } from "react"

function Conditional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function clearEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>E-mail Register</h2>
            <form>
                <input type="email"
                    placeholder="Type your e-mail..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={sendEmail}>
                    Send e-mail
                </button>
                {userEmail && (
                    <div>
                        <p>E-mail: {userEmail} not registered</p>
                        <button onClick={clearEmail}>Clear</button>
                    </div>
                )}
                
            </form>
        </div>
    )

}

export default Conditional