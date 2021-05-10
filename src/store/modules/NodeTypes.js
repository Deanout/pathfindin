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
    },
    {
        name: "grass",
        weight: 5,
        color: "#09750e"
    }],
    selectedNodeIndex: 0
};
const getters = {
    selectedNodeType: (state) => state.NodeTypes[state.selectedNodeIndex],
    air: (state) => state.NodeTypes[0],
    wall: (state) => state.NodeTypes[1],
    grass: (state) => state.NodeTypes[2],
    nodeTypes: (state) => state.NodeTypes
};

const actions = {
    selectNodeType: ({commit}, event) => {
        let selectedIndex = parseInt(event.target.value);
        commit('setSelectedNodeType', selectedIndex);
    }
};

const mutations = {
    setSelectedNodeType: (state, selectedNodeTypeIndex) => {
        state.selectedNodeIndex = selectedNodeTypeIndex;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}