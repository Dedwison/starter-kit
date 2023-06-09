import Firebase from 'src/configs/firebase'

// ** React Imports
import { createContext, useContext } from 'react'

// ** Hooks Imports
import useFirebaseAuth from 'src/hooks/useFirebaseAuth'

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signOut: async () => Promise.resolve(),
  signInWithEmailAndPassword: async () => Promise.resolve(),
  createUserWithEmailAndPassword: async () => Promise.resolve(),
  newDoc: async () => Promise.resolve,
  reviewDocs: async () => Promise.resolve(),
  updateDocs: async () => Promise.resolve(),
  updateUser: async () => Promise.resolve()

})

export const FirebaseAuthProvider = ({ children }) => {
  const auth = useFirebaseAuth()

  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
}

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext)
