<template>
    <div class="node" :style="
    {'width': nodeWidth +'px',
        'height': nodeHeight + 'px',
        'background-color': color
    }">
    </div>
</template>

<script>

export default {
  name: 'Node',
  props: {
    id: Number,
    nodeWidth: Number,
    nodeHeight: Number,
    color: String,
    weight: Number
  },
  mounted() {
  },

}
</script>

<style scoped>
.node {
    border: 1px solid;
}
</style>
