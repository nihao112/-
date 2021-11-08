<template>
  <div>
    <el-menu>
      <div style='width:800px'>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in arr" :key="item">
            <img :src="item" alt="" style='width:100%;height:100%' />
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-menu>

  </div>
</template>
<script>

export default {

  setup () {
    let arr = ['1.jpg', '2.jpg', '3.png', '4.png', '5.png',]
    return {
      arr
    }
  },
}
</script>
<style scoped>
</style>
