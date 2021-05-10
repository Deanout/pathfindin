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
    },
    {
        name: "sand",
        weight: 7,
        color: "#eddf95"
    },
    {
        name: "water",
        weight: 50,
        color: "#0362fc"
    },
    {
        name: "stone",
        weight: 35,
        color: "#636363"
    }],
    selectedNodeIndex: 0
};
const getters = {
    selectedNodeType: (state) => state.NodeTypes[state.selectedNodeIndex],
    air: (state) => state.NodeTypes[0],
    wall: (state) => state.NodeTypes[1],
    grass: (state) => state.NodeTypes[2],
    sand: (state) => state.NodeTypes[3],
    water: (state) => state.NodeTypes[4],
    stone: (state) => state.NodeTypes[5],
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