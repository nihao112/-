<template>
  <div>
    <div class="lunbotu">
      <el-carousel :interval="9000"
                   type="card"
                   height="280px">
        <el-carousel-item v-for="item in imgst"
                          :key="item">
          <!-- {{item.imas}} -->
          <img :src="item.imas"
               alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import img1 from "../assets/img/1.jpg"
import img2 from "../assets/img/2.jpg"
import img3 from "../assets/img/3.jpg"
import img4 from "../assets/img/4.jpg"
import img5 from "../assets/img/5.jpg"
import img6 from "../assets/img/6.jpg"
import img7 from "../assets/img/7.jpg"
export default {
  name: "lunbotu",
  setup (props) {
    var imgst = [
      {
        imas: img1
      }, {
        imas: img2
      }, {
        imas: img3
      }, {
        imas: img4
      }, {
        imas: img5
      }, {
        imas: img6
      }, {
        imas: img7
      }
    ]
    return {
      imgst
    }
  }

}
</script>
<style  scoped>
.lunbotu {
  width: 100%;
  height: 300px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>