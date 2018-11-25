export function changeZen(state, action) {
    if (action.type === 'CHANGE_ZEN') {
        return {...state, zen: action.zen}
    } else {
        return state
    }
}
