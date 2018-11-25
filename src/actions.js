export function loadZen() {
    return function (dispatch) {
        fetch('https://api.github.com/zen')
            .then(function (response) {
                return response.text()
            }).then(data => {
            dispatch({ type: 'CHANGE_ZEN', zen: data });
        })
    }
}
