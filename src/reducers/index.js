export default(state={},action) => {
    console.log(action)
    console.log(state.balance)
    switch(action.type){
        case "SET_WITHDRAWAL":
            return{
                ...state,
              balance:state.balance-action.payload
            }
        default:
            return state;
    }
}