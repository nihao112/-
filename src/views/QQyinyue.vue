<template>
  <div class='pink'>
    <div style='width:1000px'>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in arr" :key="item">
          <img :src="item" alt="" style='width:500px;height:100%' />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style='display:flex;align-items:center'>
      <h2>大家都在听</h2>
      <div class='red'>
        <i :class="el-icon-lx-voice"></i>
        <h4>播放全部</h4>
      </div>
    </div>
    <div style='display:flex;flex-wrap:wrap'>
      <div v-for='item of obj' :key='item.id' style='display:flex;width:500px;margin-top:20px' class='pp'>
        <div><img :src="item.tu" alt="" style='width:80px;height:70px'></div>
        <div style='font-size:13px;margin-left:30px;margin-top:10px;width:130px'>
          <div>
            <h4>{{item.name}}</h4>
          </div>
          <div style='margin-top:5px;color:#c5c5c5'>{{item.writer}}</div>
        </div>
        <div>
          <div class='yinyue'>
            <img src="yinyue/4.png" alt="" style='width:20px' class='begin' title='播放' @click='fn(item)'
              v-if='index!=item.id'>
            <img src="yinyue/2.png" alt="" style='width:20px' class='begin1' title='暂停' v-if='index==item.id'
              @click='fn1'>
            <img src="yinyue/6.png" alt="" style='width:20px' class='begin2' title='循环播放' v-if='username!=item.name'
              @click='fn2(item.name)'>
            <img src="yinyue/5.png" alt="" style='width:20px' class='begin2' title='停止循环播放' v-if='username==item.name'
              @click='fn3'>
            <img src="yinyue/8.png" alt="" style='width:20px' title='加入我喜欢'
              v-if='item.userwriter || obj1.includes(item)' @click='fn4(item)'>
            <img src="yinyue/7.png" alt="" style='width:20px' title='移除我喜欢' v-if='!item.userwriter' @click='fn5(item)'>
          </div>
        </div>
      </div>
      <div>
        <audio controls style='width:950px' ref='qq' :src="playmusic">

        </audio>
      </div>
    </div>
  </div>
</template>
<script>
import { nextTick, ref, reactive } from 'vue'
import { useStore } from 'vuex'
export default {

  setup () {
    let arr = ['1.jpg', '2.jpg', '3.png', '4.png', '5.png',]
    const qq = ref(null)
    let playmusic = ref('')
    let index = ref('')
    let username = ref('')
    const store = useStore()
    let obj = reactive(store.state.obj)
    let obj1 = []
    let obj2 = []
    function fn (item) {
      playmusic.value = item.music
      nextTick(() => {
        qq.value.play();
      })

      index.value = item.id
    }
    function fn1 () {
      qq.value.pause();
      index.value = ''
    }
    function fn2 (name) {
      qq.value.loop = true;
      username.value = name
    }
    function fn3 () {
      qq.value.loop = false;
      username.value = ''
    }
    function fn4 (item) {
      item.userwriter = !item.userwriter;
      obj1 = {
        id: item.id,
        music: item.music,
        name: item.name,
        tu: item.tu,
        writer: item.writer,
        standof: item.standof,
        userwriter: true,
      }

      store.commit('sendobj', obj1)
    }
    function fn5 (arr) {
      arr.userwriter = !arr.userwriter;
      obj2 = arr
      store.commit('sendobjj', obj2)
    }
    return {
      arr,
      obj,
      fn,
      qq,
      index,
      fn1,
      username,
      fn2,
      fn3,
      playmusic,
      obj1,
      fn4,
      fn5,
      store,
      obj2
    }
  },
}
</script>
<style scoped>
.red {
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  background: #e3e3e3;
  margin-left: 40px;
  cursor: pointer;
}
.red:hover {
  background: #dbdbdb;
}
.yinyue {
  display: none;
}
.pp:hover {
  background: #f8f8f8;
}
.yinyue {
  margin-top: 10px;
}
.pp:hover .yinyue {
  display: block;
  background: #f8f8f8;
}
.yinyue img {
  margin-left: 20px;
  cursor: poniter;
}
.yinyue {
  margin-top: 20px;
  margin-left: 50px;
}
</style>
