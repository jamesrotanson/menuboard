import {signOut} from 'firebase/auth'
import Button from "./Button";
import {auth} from '../firebase-config';

const LogoutButton = () => {
  
    // Somehow this does not work - to show the logged in email. 
    // const [user, setUser] = useState({});
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser)
    // })

    

    const logout = async () => {
        await signOut(auth);
    }

  return (
    <div>

        {/* {user?.email} */}
        <Button name="Log out" appearance="default" onClick={logout}/>
        
    </div>
  );
}

export default LogoutButton
