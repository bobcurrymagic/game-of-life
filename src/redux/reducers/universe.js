const universe = (state = 'Home', action) => {
	switch(action.type){
		case "NOTIFY-CURRENT-PAGE":
            //return action.payload;   // return state, return state + action.payload
            state = action.payload;
            return state;
        default:
            return state;
	}
}

export default universe;
