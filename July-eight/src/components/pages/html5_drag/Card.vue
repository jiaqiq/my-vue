<template>
  <div class="card" @dragstart="drag" v-dragable draggable="true">
    <div class="card-bd">
      {{data.content}}
    </div>
    <div class="card-ft">
     {{ '计划完成时间' + data.targetTime }}
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: ["data", "index", "innerIndex"],
  directives: {
    dragable: {
      inserted: el => {
        el.addEventListener("selectstart", ev => {
          ev.preventDefault();
        });
      }
    }
  },
  methods: {
    drag(ev) {
      ev.dataTransfer.effectAllowed = "move";
      ev.dataTransfer.setData("index", this.index);
      ev.dataTransfer.setData("innerIndex", this.innerIndex);
    }
  }
};
</script>
<style lang="scss" scoped>
.card:hover {
  cursor: pointer;
  transition: all 0.3s linear;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px #82c4b5;
}
.card {
  transition: all 0.3s linear;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
}
.card-bd {
  font-size: 14px;
  width: 80%;
}
.card-ft {
  color: #888;
  text-align: right;
  font-size: 12px;
  margin-top: 10px;
}
</style>
