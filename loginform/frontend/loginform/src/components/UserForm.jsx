import React, { useState,useEffect } from 'react'
import axios from 'axios'

function UserForm() {

    const [login, setLogin] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] =useState("")
    const [responseMsg, setResponseMsg] = useState({})

    const handleSubmit= async(event)=>{
      event.preventDefault();

      //if user login then show this

        try {
          const response = await axios.post("http://localhost:3000/api/users/login", {
            name: name,
            email: email
          })
          console.log(response.data.userExists)
          // setLogin()
          setResponseMsg(response.data)

          if (response.data.userExists) {
            setLogin(true); // Set user as logged in
        }
        } catch (error) {
          console.log("fetching error", error)
        }
      }

      const createUser = async(event)=>{
        event.preventDefault()
        try {
          const response = await axios.post("http://localhost:3000/api/users/signup", {
            name: name,
            email: email
          });
            console.log(response)
            setResponseMsg(response.data)
  
          } catch (error) {
          console.log("signup error", error)
        }
      }

      const updateUser = async(event)=>{
        event.preventDefault()
        try {
          const response = await axios.put("http://localhost:3000/api/users/:id", {
            name: name,
            email:email
          })
            setResponseMsg(response.data)
    
        } catch (error) {
          console.log("updating error", error)
        }
      }

      const deleteUser = async(event)=>{
        event.preventDefault();
        try {
          const response = await axios.delete("http://localhost:3000/api/users/:id",{
            name:name,
            email:email
          })
          setResponseMsg(response.data)
        } catch (error) {
          console.log("user deleting error", error)
        }
      }

      const getAllUsers = async(e)=>{
        e.preventDefault()
        try {
          const response = await axios.get("http://localhost:3000/api/users")
          setResponseMsg(response.data)
        } catch (error) {
          console.log("get all user error", error)
        }
      }


      return (
        <div>
            <h2>USER LOGIN</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text">Name:</label><br />
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    placeholder='Name'/>

                </div>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input 
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder='Email'/>

                </div>
                <button onClick={handleSubmit}>Login</button>
                <button onClick={createUser}>Create User</button>
            </form>
              {/* Conditionally render buttons based on login status */}
              {login && (
                <div>
                    <button onClick={updateUser}>Update User</button>
                    <button onClick={deleteUser}>Delete User</button>
                    <button onClick={getAllUsers}>Get All Users</button>
                </div>
            )}
      {/* Display user information after login */}
      {login && responseMsg && (
        <div>
          <h3>User Information:</h3>
          <p>Name: {responseMsg.userExists.name}</p>
          <p>Email: {responseMsg.userExists.email}</p>
        </div>
      )}

        </div>
      )
    }
export default UserForm;