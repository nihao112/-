<template>
  <div class='pink'>
    <div style='width:1000px'>
      <el-carousel :interval="4000"
                   type="card"
                   height="200px">
        <el-carousel-item v-for="item in arr"
                          :key="item">
          <img :src="item"
               alt=""
               style='width:500px;height:100%' />
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
      <div v-for='item of obj'
           :key='item.id'
           style='display:flex;width:500px;margin-top:20px'
           class='pp'>
        <div><img :src="item.tu"
               alt=""
               style='width:80px;height:70px'></div>
        <div style='font-size:13px;margin-left:30px;margin-top:10px;width:130px'>
          <div>
            <h4>{{item.name}}</h4>
          </div>
          <div style='margin-top:5px;color:#c5c5c5'>{{item.writer}}</div>
        </div>
        <div>
          <div class='yinyue'>
            <img src="yinyue/4.png"
                 alt=""
                 style='width:20px'
                 class='begin'
                 title='播放'
                 @click='fn(item)'
                 v-if='index!=item.id'>
            <img src="yinyue/2.png"
                 alt=""
                 style='width:20px'
                 class='begin1'
                 title='暂停'
                 v-if='index==item.id'
                 @click='fn1'>
            <img src="yinyue/6.png"
                 alt=""
                 style='width:20px'
                 class='begin2'
                 title='循环播放'
                 v-if='username!=item.name'
                 @click='fn2(item.name)'>
            <img src="yinyue/5.png"
                 alt=""
                 style='width:20px'
                 class='begin2'
                 title='停止循环播放'
                 v-if='username==item.name'
                 @click='fn3'>
          </div>
        </div>
      </div>
      <div>
        <audio controls
               style='width:950px'
               ref='qq'
               :src="playmusic">
        </audio>
      </div>
    </div>
  </div>
</template>
<script>
import { nextTick, ref } from 'vue'
export default {

  setup () {
    let arr = ['1.jpg', '2.jpg', '3.png', '4.png', '5.png',]
    const qq = ref(null)
    let playmusic = ref('')
    let index = ref('')
    let username = ref('')
    let obj = [
      {
        name: '带泪的鱼',
        writer: '带泪的鱼(戴丽丽)',
        id: 1,
        tu: '1.jpg',
        music: 'QQyinyue/nizou.mp3'
      },
      {
        name: 'Lifestyle(抖音热曲)',
        writer: '国民好洲道',
        id: 2,
        tu: '2.jpg',
        music: 'QQyinyue/1.mp3'
      },
      {
        name: '美丽的神话',
        writer: '男辰',
        id: 3,
        tu: '3.png',
        music: 'QQyinyue/2.mp3'
      },
      {
        name: '别错过',
        writer: '程jiajia',
        id: 4,
        tu: '4.png',
        music: 'QQyinyue/3.mp3'
      },
      {
        name: '坏女孩',
        writer: '徐良/小凌',
        id: 5,
        tu: '5.png',
        music: 'QQyinyue/4.mp3'
      },
      {
        name: 'Nemesis',
        writer: 'Ryllz',
        id: 6,
        tu: '3.png',
        music: 'QQyinyue/5.mp3'
      }
    ]
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
      playmusic
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
