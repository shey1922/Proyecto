import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context'

export default function PrivateRoute({ children }) {

  const { currentUser } = useContext(AuthContext);

  return currentUser ? children : <Navigate replace to="/login" />
}