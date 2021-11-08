<template>
  <div>
    <!-- <div style='width:800px'>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in arr" :key="item">
          <img :src="item" alt="" style='width:100%;height:100%' />
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <div>2222</div>
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
</style>
