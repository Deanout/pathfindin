<template>
    <h1>Hello World!</h1>
    <div class="grid" :style="{'width': width +'px', 'height': height + 'px'}">
        <div v-for="column in grid" :key="column.id">
            <div v-for="node in column" :key="node.id">
                <Node 
                :nodeWidth="23" 
                :nodeHeight="23"
                :nodeType="node.nodeType"
                :color="node.color"
                :weight="node.weight" />
            </div>
        </div>
    </div>
</template>

<script>
import Node from "@/components/Node";
import { mapGetters } from "vuex";

export default {
  name: 'Grid',
  props: {
    width: Number,
    height: Number,
    numberOfColumns: Number,
    numberOfRows: Number
  },
  components: {
    Node
  },
  mounted() {
      this.initializeGrid();
      console.log(this.numberOfColumns);
  },
  methods: {
      initializeGrid() {
        this.grid = [];
        for (let i = 0; i < this.numberOfColumns; i++) {
            this.grid.push([]);
            for (let j = 0; j < this.numberOfRows; j++) {
                let _id = i + j;
                this.grid[i].push({
                    id: _id,
                    nodeType: this.wall,
                    color: this.wall.color,
                    weight: this.wall.weight
                });
            }
        }
        window.grid = this.grid;
      }
  },
  data: function () {
    return {
      grid: []
    }
  },
    computed: {
        ...mapGetters([
            'air',
            'wall',
        ])
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
