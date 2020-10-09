<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active: isActive}">
      <!-- slot中不能加class属性，因为会替换掉 -->
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      
    };
  },
  props: {
    path: {
      type: String,
      default: "/home"
    }
  },
  methods: {
    itemClick() {
      if(this.path !== this.$route.path){
        this.$router.replace(this.path);
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path.startsWith(this.path);
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 30px;
  height: 30px;
  margin-top: 3px;
  /* 图片下面会多三个像素 */
  vertical-align: middle;
}

.active {
  color: '#D4237A'
}

</style>