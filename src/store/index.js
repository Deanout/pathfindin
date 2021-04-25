import { createStore } from 'vuex'
import grid from "@/store/modules/grid";
import nodeTypes from "@/store/modules/NodeTypes";

export default createStore({
  modules: {
    grid,
    nodeTypes
  }
})
