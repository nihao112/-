<template>
  <div class="error-page">
    <div style='margin-left:40px;margin-top:10px'><img src="6.png"
           alt=""
           style='width:100px'></div>
    <el-menu class="sidebar-el-menu"
             :default-active="onRoutes"
             :collapse="collapse"
             background-color="#f6f6f6"
             text-color="#bfcbd9"
             active-text-color="#20a0ff"
             unique-opened
             router>
      <template v-for="item in items">
        <template v-if="item.subs">

          <el-submenu :index="item.index"
                      :key="item.index">

            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>

            </template>

            <template v-for="subItem in item.subs">

              <el-submenu v-if="subItem.subs"
                          :index="subItem.index"
                          :key="subItem.index">

                <template #title>{{ subItem.title }}</template>
                <el-menu-item style="border: 1px solid red"
                              v-for="(threeItem, i) in subItem.subs"
                              :key="i"
                              :index="threeItem.index">
                  {{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else
                            :index="subItem.index"
                            :key="subItem.index">{{ subItem.title }}

              </el-menu-item>

            </template>

          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index"
                        :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div class='red'>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "Music",
  setup () {
    const items = [
      {
        icon: "el-icon-lx-favor",
        index: "/music/qqyinyue",
        title: "推荐",
      },
      {
        icon: "el-icon-lx-cascades",
        index: "/table",
        title: "音乐馆",
      },
      {
        icon: "el-icon-lx-recordfill",
        index: "/tabs",
        title: "视频",
      },
      {
        icon: "el-icon-lx-servicefill",
        index: "3",
        title: "电台",

      },
      {
        icon: "el-icon-lx-likefill",
        index: "/music/like",
        title: "我喜欢",
      },
      {
        icon: "el-icon-pie-exit",
        index: "/charts",
        title: "本地和下载",
      },
      {
        icon: "el-icon-lx-global",
        index: "/i18n",
        title: "最近播放",
      },
      {
        icon: "el-icon-lx-warn",
        index: "7",
        title: "试听列表",

      },
      {
        icon: "el-icon-lx-redpacket_fill",
        index: "/donate",
        title: "支持作者",
      },
      {
        icon: "el-icon-lx-notificationfill",
        index: "/musicf",
        title: "播放音乐",
      }
    ];

    const route = useRoute();

    const onRoutes = computed(() => {
      console.log(route.path)
      return route.path;
    });

    const store = useStore();
    const collapse = computed(() => store.state.collapse);

    return {
      items,
      onRoutes,
      collapse,

    }

  },
};
</script>


<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
.red {
  position: absolute;
  top: 50px;
  left: 270px;
}
</style>
