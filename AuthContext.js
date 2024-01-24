import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
  
      if (user) {
        dispatch({ type: 'LOGIN', payload: user });
      }
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      // Optionally, you can handle the error or log it for further investigation
    }
  }, []);
  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}