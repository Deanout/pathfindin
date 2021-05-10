<template>
  <button @click="generateRandomTerrain(nodeTypes)">
    Generate Random Terrain
    </button>
      <button @click="generateSimplexTerrain(nodeTypes)">
      Generate Simplex Terrain
      </button>
    <select @change="selectNodeType($event)">
      <option value="0">Air</option>
      <option value="1">Wall</option>
      <option value="2">Grass</option>
      <option value="3">Sand</option>
      <option value="4">Water</option>
      <option value="5">Stone</option>
    </select>
  <div @click="setNodeType($event)">
    <Grid 
    :grid="grid"
    :width="widthInPixels" 
    :height="heightInPixels" 
    :numberOfColumns="numberOfColumns"
    :numberOfRows="numberOfRows" />
  </div>
</template>

<script>
import Grid from './components/Grid.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    Grid
  },
  created() {
    window.addEventListener("resize", this.windowResized);
      let data = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      this.calculateGridOnWindowResize(data);
      //this.initializeGrid();
      this.generateSimplexTerrain(this.nodeTypes);
  },
  unmounted() {
    window.removeEventListener("resize", this.windowResized);
  },
  mounted() {
  },
  methods: {
    ...mapActions(['calculateGridOnWindowResize',
                  'updateGrid',
                  'generateRandomTerrain',
                  'generateSimplexTerrain',
                  'selectNodeType',
                  'updateNodeAtPosition']),
    windowResized(event) {
      let data = {
        width: event.target.innerWidth,
        height: event.target.innerHeight,
      }
      this.calculateGridOnWindowResize(data);
    },
    setNodeType(event) {
      let column = Math.floor((event.clientX - this.gridLeft) / 25);
      let row = Math.floor((event.clientY - this.gridTop) / 25);
      let numColumns = this.clamp(column, 0, this.numberOfColumns - 1);
      let numRows = this.clamp(row, 0 , this.numberOfRows - 1);

      console.log("[" + column + ", " + row + "]");
      let data = {
        xPosition: numColumns,
        yPosition: numRows,
        nodeType: this.selectedNodeType
      };
      this.updateNodeAtPosition(data);
    },
    initializeGrid() {
        var localGrid = [];
        for (let i = 0; i < this.numberOfColumns; i++) {
            localGrid.push([]);
            for (let j = 0; j < this.numberOfRows; j++) {
                let _id = i + j;
                localGrid[i].push({
                    id: _id,
                    nodeType: this.air,
                    xPosition: i,
                    yPosition: j
                });
            }
        }
        this.updateGrid(localGrid);
      },
      /**
       * Returns a number whose value is limited to the given range.
       * 
       * Example: limit the output of this computation to between 0 and 255
       * (x * 255).clamp(0, 255)
       * @param {Number} value The value to clamp.
       * @param {Number} min The lower boundary of the output range
       * @param {Number} max The upper boundary of the output range
       * @returns A number in the range [min, max]
       * @type Number
       * @author = Otto Allmendinger from https://stackoverflow.com/questions/11409895/whats-the-most-elegant-way-to-cap-a-number-to-a-segment
       */
      clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
      }
  },
  data() {
    return {
      width: this.widthInPixels,
      height: this.heightInPixels,
      numRows: 4,
      numColumns: 4,
    }
  },
    computed: {
    ...mapGetters([
        'numberOfRows',
        'numberOfColumns',
        'widthInPixels',
        'heightInPixels',
        'grid',
        'air',
        'grass',
        'nodeTypes',
        'selectedNodeType',
        'gridTop',
        'gridBottom',
        'gridLeft',
        'gridRight'
    ])
  },
}
</script>

<style>

</style>
