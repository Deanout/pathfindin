<template>
    <div class="node" :style="
    {
      'width': nodeWidth +'px',
      'height': nodeHeight + 'px',
      'background-color': nodeType.color
    }">
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Node',
  props: {
    id: Number,
    nodeWidth: Number,
    nodeHeight: Number,
    color: String,
    weight: Number,
    nodeType: {
      name: String,
      weight: Number,
      color: String
    },
    xPosition: Number,
    yPosition: Number
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    ...mapGetters([
        'air',
        'wall',
        'selectedNodeType'
    ])
  },

}
</script>

<style scoped>
.node {
    border: 1px solid;
}
</style>
