export function changeZen(state, action) {
    if (action.type === 'CHANGE_ZEN') {
        console.log(action.type);
        return {...state, zen: action.zen}
    } else {
        return state
    }
}
