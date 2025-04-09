import React, {  createContext, useContext, useState, ReactNode }  from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
import { BE_URL } from "../utils/Constant";

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
   
  const [user ,setUser]=useState<User|null>(null); 

 const register = async (username:string,email:string,password:string)=>{   
   if(!username || !password || !email) {
 console.log('fill the fields')
 
 return;;
    }
      try{
        const response =await axios.post(`${BE_URL}/user/register`,    {
          username,
          email,
          password,
        })
        console.log(response)
        console.log("registerUser:", response);
        redirect('/home')      
      }
      catch(error:any)
      {
        console.log(error.response?.data || error.message);
      }
  } 
  const signin = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BE_URL}/user/login`, {
        email,
        password
      }, { withCredentials: true });
  
      console.log("loginUser:", response);
      return response.data.token;
    } catch (error: any) {
      console.error("Login failed:", error);
      throw new Error("Login failed"); // Throw an error to be handled by the caller
    }
  };  
    
  const signout = async() => {
    setUser(null);
    localStorage.removeItem('token');
  }; 
   return (
    <AuthContext.Provider value={{ user, register, signin, signout }}>
    {children}
</AuthContext.Provider>
  );

  };
  
  export const UseAuth =():AuthContexType => {
  const context = useContext(AuthContext);  
  
  if(!context){
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

