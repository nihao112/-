<template>
  <div style='margin-left:10px'>
    <h1 style='margin-top:30px'>我喜欢</h1>
    <div style='width:900px;display:flex;justify-content:space-between;color:#b2b2b2;margin-top:20px;font-size:13px'>
      <div style='width:380px'>歌曲</div>
      <div style='width:150px'>歌手</div>
      <div style='width:150px'>专辑</div>
    </div>
    <div v-for='(item,index) of obj1'
         :key='item.id'
         class='pink'
         style='display:flex;width:900px;justify-content:space-between;margin-top:10px;font-size:13px'>
      <div style='width:350px;display:flex;'>
        <div><img src="yinyue/7.png"
               alt=""
               style='width:20px;vertical-align:middle'
               title='移除我喜欢'
               @click='we(index,item)'>&nbsp;{{item.name}}
        </div>
        <div class='yinyue'>
          <img src="yinyue/4.png"
               alt=""
               style='width:15px'
               title='播放'
               @click='fn(item)'
               v-if='index!=item.id'>
          <img src="yinyue/2.png"
               alt=""
               style='width:15px'
               title='暂停'
               v-if='index==item.id'
               @click='fn1'>
          <img src="yinyue/6.png"
               alt=""
               style='width:15px'
               title='循环播放'
               v-if='username!=item.name'
               @click='fn2(item.name)'>
          <img src="yinyue/5.png"
               alt=""
               style='width:15px'
               title='停止循环播放'
               v-if='username==item.name'
               @click='fn3'>
        </div>
      </div>
      <div style='width:150px'>{{item.writer}}</div>
      <div style='width:150px'>{{item.standof}}</div>
    </div>
    <div>
      <audio controls
             style='width:950px;'
             ref='qq'
             :src="playmusic"></audio>
    </div>

  </div>
</template>
<script>
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from "element-plus";
import { nextTick, isProxy, onMounted, ref, reactive, toRaw } from 'vue'
export default {
  setup () {
    let qq = ref(null)
    let playmusic = ref('')
    const store = useStore()
    let obj1 = reactive(store.state.obj1)
    let ret = reactive("")
    let index = ref('')
    let username = ref('')
    onMounted(() => {
      console.log(store.state.obj1)
    })
    function fn (item) {
      index.value = item.id;
      playmusic.value = item.music;
      nextTick(() => {
        qq.value.play()
      })
    }
    function fn1 () {
      index.value = '';
      qq.value.pause()
    }
    function fn2 (name) {
      username.value = name;
      qq.value.loop = true
    }
    function fn3 () {
      username.value = '';
      qq.value.loop = false
    }
    function we (index, item) {
      ElMessageBox.confirm(`确定要删除${item.name}吗？`, "提示", {
        type: "warning",
      })
        .then(() => {
          ElMessage.success(`${item.name}删除成功`);
          obj1.splice(index, 1);
          store.commit("dele", item)

        })
        .catch(() => { });
    }
    return {
      store,
      obj1,
      qq,
      playmusic,
      index,
      fn,
      fn1,
      username,
      fn2,
      fn3,
      we,
      ret
    }
  },
}
</script>
<style scoped>
.pink {
  height: 50px;
  line-height: 50px;
}
.pink:hover {
  background: white;
}
.pink:hover .yinyue {
  display: block;
}
.yinyue {
  margin-top: 3px;
  margin-left: 100px;
  display: none;
}
.yinyue img {
  margin-left: 20px;
}
</style>
