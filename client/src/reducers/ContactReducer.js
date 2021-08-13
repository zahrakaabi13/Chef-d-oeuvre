const contact =  {
    datas : []
  }

export  const contactReducer = (state = contact, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case  "ADD_contact_API":
                return{
                    ...state,
                    datas:[ ...state.datas, payload]
                };
    } 
return state
};