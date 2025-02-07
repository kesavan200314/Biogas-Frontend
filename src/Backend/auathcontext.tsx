import React, {  createContext, useContext, useState, ReactNode }  from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

interface User{
    username:string;
    token:string;
    email:string;
}
interface AuthContexType{
    user:User|null;
    // lodaing:Boolean;
    register:(username:string,email:string, password:string) => Promise<void>
    signin:(username:string,password:string ) => Promise<void>
    signout:() => Promise<void>
}
const AuthContext= createContext<AuthContexType|undefined>(undefined)

export const Authprovider:React.FC<{children:ReactNode }> = ({children})=>{
    const [user ,setUser]=useState<User|null>(null);  const register = async (username:string,email:string,password:string)=>{    if(!username || !password || !email) {
 console.log('fill the fields')
 return;
    }
      try{
        const response =await axios.post('http://localhost:3000/api/register',    {
          username,
          email,
          password,
        })
        console.log("registerUser:", response);
        redirect('/home')      }
      catch(error:any)
      {
        console.log(error.response?.data || error.message);
      }
  } 
   const signin = async (username:string,password:string) => {
    try{
      const response = await axios.post('http://localhost:3000/api/login', {
        username,
         password
      })     
       console.log("loginUser:", response)
    }
    catch(error:any){
      console.log(error)
    }
  }  
  const signout = async() => {
    setUser(null);
    localStorage.removeItem('token');
  };  return (
    <AuthContext.Provider value={{ user, register, signin, signout }}>
    {children}
</AuthContext.Provider>
  );
  };export const UseAuth =():AuthContexType => {
  const context = useContext(AuthContext);  if(!context){
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};