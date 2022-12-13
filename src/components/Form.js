import {useState} from 'react'

function Form() {
    function registerUser(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        
        console.log(`User: ${name}, registered sucessfull with the password: ${password}`)
    }

const [name, setName] = useState()
const [password, setPassword] = useState()

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <div>
                <label htmlFor='password'>Name:</label>
                    <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Type your name"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input 
                    type="password" 
                    id="password"
                    name="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default Form