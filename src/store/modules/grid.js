const state = {
    grid: [],
    widthInPixels: 400,
    heightInPixels: 200,
    widthInNodes: 25,
    heightInNodes: 25,
    numberOfRows: 4,
    numberOfColumns: 4,
    nodeWidth: 25,
    nodeHeight: 25,
    widthScalar: 0.9,
    heightScalar: 0.8,
    gridTop: 0,
    gridBottom: 0,
    gridLeft: 0,
    gridRight: 0
};

const getters = {
    grid: (state) => state.grid,
    numberOfRows: (state) => state.numberOfRows,
    numberOfColumns: (state) => state.numberOfColumns,
    widthInPixels: (state) => state.widthInPixels,
    heightInPixels: (state) => state.heightInPixels,
    gridTop: (state) => state.gridTop,
    gridBottom: (state) => state.gridBottom,
    gridLeft: (state) => state.gridLeft,
    gridRight: (state) => state.gridRight,
};

const actions = {
    calculateGridOnWindowResize: ({ commit }, data) => {
        let width = data.width;
        let height = data.height;
        let scaledWidth = width * state.widthScalar
        let scaledHeight = height * state.heightScalar;
        width = scaledWidth - (scaledWidth % state.nodeWidth);
        height = scaledHeight - (scaledHeight % state.nodeHeight);
        commit("setGridSize", {width, height});
    },
    updateGrid: ({commit}, data) => {
        commit("setGrid", data)
    },
    updateNodeAtPosition: ({commit}, data) => {
        commit("setNodeAtPosition", data);
    },
    generateRandomTerrain: ({commit}, nodeTypes) => {
        var localGrid = [];
        window.nodeTypes = nodeTypes;
        for (let i = 0; i < state.numberOfColumns; i++) {
            localGrid.push([]);
            for (let j = 0; j < state.numberOfRows; j++) {
                let _id = i + j;
                let nodeTypeIndex = Math.floor(Math.random() * nodeTypes.length);
                localGrid[i].push({
                    id: _id,
                    nodeType: nodeTypes[nodeTypeIndex],
                    xPosition: i,
                    yPosition: j
                });
            }
        }
        commit("setRandomTerrain", localGrid);
    },
    updateTopLeft: ({commit}, data) => {
        commit("setTopLeft", data);
    }
};

const mutations = {
    setGridSize: (state, data) => {
        state.widthInPixels = data.width;
        state.heightInPixels = data.height;
        state.numberOfColumns = data.width / 25;
        state.numberOfRows = data.height / 25;
    },
    setGrid: (state, data) => {
        state.grid = data;
    },
    setNodeAtPosition: (state, data) => {
        state.grid[data.xPosition][data.yPosition].nodeType = data.nodeType;
    },
    setRandomTerrain: (state, data) => {
        state.grid = data;
    },
    setTopLeft: (state, data) => {
        state.gridTop = data.gridTop;
        state.gridBottom = data.gridBottom;
        state.gridLeft = data.gridLeft;
        state.gridRight = data.gridRight;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}