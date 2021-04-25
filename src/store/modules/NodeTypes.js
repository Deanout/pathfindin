const state = {
    NodeTypes: [{
        name: "air",
        weight: 0,
        color: "#FFF"   
    },
    {
        name: "wall",
        weight: Infinity,
        color: "#0c3547"
    }]
};
const getters = {
    air: (state) => state.NodeTypes[0],
    wall: (state) => state.NodeTypes[1]
};

const actions = {

};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
}