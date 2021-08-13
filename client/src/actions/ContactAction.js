import { AddContact } from '../request'


export const addContact = (name,email,message)=> async (dispatch) =>{
    try{
        const res = await AddContact (name,email,message);
        dispatch ({
            type:"ADD_CONTACT_SUCCED",     
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}