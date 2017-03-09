import _ from 'lodash/object';

const initialState = {
    songs: {},
    users: {}
};

export default function entities(state = initialState, action) {
    if (action.entities) {
        return _.merge({}, state, action.entities);
    }

    return state;
}
