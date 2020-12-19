const currentPage = (state = 'Home', action) => {
	switch(action.type){
		case "NOTIFY-CURRENT-PAGE":
            state = action.payload;
            return state;
        default:
            return state;
	}
}

export default currentPage;
