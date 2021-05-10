<template>
    <h1>Hello World!</h1>
    <div id="grid" 
    class="grid" 
    :style="{'width': width +'px', 'height': height + 'px'}"
    @click="setTopLeft">
        <div v-for="column in grid" :key="column.id">
            <div v-for="node in column" :key="node.id">
                <Node 
                :nodeWidth="23" 
                :nodeHeight="23"
                :xPosition="node.xPosition"
                :yPosition="node.yPosition"
                :nodeType="node.nodeType" />
            </div>
        </div>
    </div>
</template>

<script>
import Node from "@/components/Node";
import { mapActions } from "vuex";
export default {
  name: 'Grid',
  props: {
    width: Number,
    height: Number,
    numberOfColumns: Number,
    numberOfRows: Number,
    grid: {}
  },
  components: {
    Node
  },
  mounted() {
  },
  methods: {
      ...mapActions(["updateTopLeft"]),
      setTopLeft() {
        
        let gridElement = document.getElementById("grid");
        /*
        If you need the bounding rectangle relative to the top-left 
        corner of the document, just add the current scrolling position
        to the top and left properties (these can be obtained using 
        window.scrollX and window.scrollY) to get a bounding rectangle
        which is independent from the current scrolling position.
        https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        */
        let rect = gridElement.getBoundingClientRect();
        let data = {
            gridTop: rect.top,
            gridBottom: rect.bottom,
            gridLeft: rect.left,
            gridRight: rect.right
        }
        this.updateTopLeft(data);
      }
  },
  data: function () {
    return {
    }
  },
}
</script>

<style scoped>
.grid {
    border: 1px solid;
    display: flex;
}
.row {

}
.column {

}
</style>
