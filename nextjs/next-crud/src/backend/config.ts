import firebase from "firebase";
import 'firebase/firestore'


// colocar as credenciais direto

if(!firebase.apps.length){
    firebase.initializeApp(
        {
            apiKey: '', 
            authDomain: "",
            projectId:""
        }
    )
}

export default firebase