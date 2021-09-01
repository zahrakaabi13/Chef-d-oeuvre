const product =  {
    datas : []

  }

export  const productReducer = (state = product, action ) => {
    const {type,payload}= action;
    switch(action.type) {
        case   "GET_PRODUCT_SUCCEDED":
            return {
                ...state,
                datas: payload,
              };
        case  "ADD_PRODUCT_API":
          return{
              ...state,
              datas:[ ...state.datas, payload]
          };
    }
return state
};