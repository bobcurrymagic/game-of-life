export const notifyCurrentPage = currentPage => {
	return {
        type: 'NOTIFY-CURRENT-PAGE',
        payload: currentPage
	}
}
