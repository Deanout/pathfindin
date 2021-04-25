<template>
  <Grid 
  :width="this.width" 
  :height="this.height" 
  :numberOfColumns="calculateNumberOfColumns()"
  :numberOfRows="calculateNumberOfRows()" />
</template>

<script>
import Grid from './components/Grid.vue'

export default {
  name: 'App',
  components: {
    Grid
  },
  created() {
    // Don't use arbitrary constants
    // change 0.9 to be a store value

    let scaledWidth = window.innerWidth * 0.9
    let scaledHeight = window.innerHeight * 0.8;
    // Add nodewidth instead of just random 25 value
    this.width = scaledWidth - (scaledWidth % 25);
    this.height = scaledHeight - (scaledHeight % 25);
  },
  methods: {
     calculateNumberOfColumns() {
      // Add nodewidth instead of just random 25 value
      let numColumns = this.width / 25;
      return numColumns;
    },
    calculateNumberOfRows() {
      let numRows = this.height / 25;
      return numRows;
    }
  },
  data() {
    return {
      width: 400,
      height: 200,
      numRows: 4,
      numColumns: 4,
    }
  },
}
</script>

<style>

</style>
