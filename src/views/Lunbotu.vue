<template>
  <div>
    <div class="lunbotu">
      <el-carousel :interval="9000"
                   type="card"
                   height="280px">
        <el-carousel-item v-for="item in imgst"
                          :key="item">
          <img :src="item.imas"
               alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="lunbotu_1">
      <div class="kapian"
           v-for="(item,index) in jiche"
           :key="index">
        <img :src="item.url"
             alt="">
        <a target="_blank"
           :title="item.psp"
           :href="item.hrefs"
           name="pn50"
           style="width: 178px;">{{item.psp}}</a>
        <div class="animated  bounceInUp">
          <p>价钱：{{item.manei}}￥</p>
        </div>
      </div>
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
    var jiche = [
      {
        manei: "13445.3",
        url: "https://img0.baidu.com/it/u=3921070994,1135400193&fm=26&fmt=auto",
        psp: "炫酷丰富多彩火焰特效摩托车3d造型设计火灾揭示模板",
        hrefs: "/search/detail?ct=503316480&amp;z=&amp;tn=baiduimagedetail&amp;ipn=d&amp;word=%E6%9C%BA%E8%BD%A6%20%E7%82%AB%E9%85%B7&amp;step_word=&amp;ie=utf-8&amp;in=&amp;cl=2&amp;lm=-1&amp;st=-1&amp;hd=undefined&amp;latest=undefined&amp;copyright=undefined&amp;cs=3921070994,1135400193&amp;os=4188170910,1783397343&amp;simid=3437461422,208439061&amp;pn=2&amp;rn=1&amp;di=170060&amp;ln=1438&amp;fr=&amp;fmq=1389861203899_R&amp;fm=&amp;ic=0&amp;s=undefined&amp;se=&amp;sme=&amp;tab=0&amp;width=&amp;height=&amp;face=undefined&amp;is=0,0&amp;istype=2&amp;ist=&amp;jit=&amp;bdtype=0&amp;spn=0&amp;pi=0&amp;gsm=0&amp;oriquery=机车&amp;objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fup.92sucai.com%252Fimage%252F20181115%252F1542262022928656.jpg%26refer%3Dhttp%253A%252F%252Fup.92sucai.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1638932578%26t%3Df09760f789e6bec6994a873a959812a8&amp;rpstart=0&amp;rpnum=0&amp;adpicid=0&amp;nojc=undefined&amp;dyTabStr=MCwzLDYsMSw0LDUsOCw3LDIsOQ%3D%3D"
      },
      {
        manei: "234545.5",
        url: "https://img1.baidu.com/it/u=2474203880,3729020612&fm=15&fmt=auto",
        psp: "炫酷机车_机车_机车骑士_汽车_摩托车",
        hrefs: "/search/detail?ct=503316480&amp;z=&amp;tn=baiduimagedetail&amp;ipn=d&amp;word=%E6%9C%BA%E8%BD%A6%20%E7%82%AB%E9%85%B7&amp;step_word=&amp;ie=utf-8&amp;in=&amp;cl=2&amp;lm=-1&amp;st=-1&amp;hd=undefined&amp;latest=undefined&amp;copyright=undefined&amp;cs=2474203880,3729020612&amp;os=3390020919,1171895199&amp;simid=2474203880,3729020612&amp;pn=22&amp;rn=1&amp;di=145540&amp;ln=1438&amp;fr=&amp;fmq=1389861203899_R&amp;fm=&amp;ic=0&amp;s=undefined&amp;se=&amp;sme=&amp;tab=0&amp;width=&amp;height=&amp;face=undefined&amp;is=0,0&amp;istype=2&amp;ist=&amp;jit=&amp;bdtype=15&amp;spn=0&amp;pi=0&amp;gsm=0&amp;oriquery=机车&amp;objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fci.xiaohongshu.com%252F5a3e4b75-f5ab-3107-3ca8-6fe33f21a491%253FimageView2%252F2%252Fw%252F1080%252Fformat%252Fjpg%26refer%3Dhttp%253A%252F%252Fci.xiaohongshu.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1638932578%26t%3Dc3b4c57769e7367b0842fbf05d688c3f&amp;rpstart=0&amp;rpnum=0&amp;adpicid=0&amp;nojc=undefined&amp;dyTabStr=MCwzLDYsMSw0LDUsOCw3LDIsOQ%3D%3D"
      }, {
        manei: "432543.6",
        url: "https://img2.baidu.com/it/u=799439539,1248872067&fm=26&fmt=auto",
        psp: "我和我的炫酷机车",
        hrefs: "/search/detail?ct=503316480&amp;z=&amp;tn=baiduimagedetail&amp;ipn=d&amp;word=%E6%9C%BA%E8%BD%A6%20%E7%82%AB%E9%85%B7&amp;step_word=&amp;ie=utf-8&amp;in=&amp;cl=2&amp;lm=-1&amp;st=-1&amp;hd=undefined&amp;latest=undefined&amp;copyright=undefined&amp;cs=799439539,1248872067&amp;os=1299424944,3133921827&amp;simid=3402629436,324204913&amp;pn=26&amp;rn=1&amp;di=72930&amp;ln=1438&amp;fr=&amp;fmq=1389861203899_R&amp;fm=&amp;ic=0&amp;s=undefined&amp;se=&amp;sme=&amp;tab=0&amp;width=&amp;height=&amp;face=undefined&amp;is=0,0&amp;istype=2&amp;ist=&amp;jit=&amp;bdtype=0&amp;spn=0&amp;pi=0&amp;gsm=0&amp;oriquery=机车&amp;objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fdownload-p168-drcn.platform.hicloud.com%252Fdl%252Fhuafans%252Fpic%252F2019%252F03%252F16%252Fd387d8541eb1a7752c89ad7e01d630c8_mmexport1552741777299.jpg%253Fmode%253Ddownload%26refer%3Dhttp%253A%252F%252Fdownload-p168-drcn.platform.hicloud.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1638932578%26t%3D453c80ec737b5ca2ce15ab62876cdb86&amp;rpstart=0&amp;rpnum=0&amp;adpicid=0&amp;nojc=undefined&amp;dyTabStr=MCwzLDYsMSw0LDUsOCw3LDIsOQ%3D%3D"
      }, {
        manei: "982484.4",
        url: "https://img0.baidu.com/it/u=1966670054,2845363727&fm=15&fmt=auto",
        psp: "哈雷机车 炫酷_写真_机车_摄影_左岸摄影(和平店)自由",
        hrefs: "/search/detail?ct=503316480&amp;z=&amp;tn=baiduimagedetail&amp;ipn=d&amp;word=%E6%9C%BA%E8%BD%A6%20%E7%82%AB%E9%85%B7&amp;step_word=&amp;ie=utf-8&amp;in=&amp;cl=2&amp;lm=-1&amp;st=-1&amp;hd=undefined&amp;latest=undefined&amp;copyright=undefined&amp;cs=1966670054,2845363727&amp;os=218075088,1954199684&amp;simid=1966670054,2845363727&amp;pn=50&amp;rn=1&amp;di=59410&amp;ln=1438&amp;fr=&amp;fmq=1389861203899_R&amp;fm=&amp;ic=0&amp;s=undefined&amp;se=&amp;sme=&amp;tab=0&amp;width=&amp;height=&amp;face=undefined&amp;is=0,0&amp;istype=2&amp;ist=&amp;jit=&amp;bdtype=15&amp;spn=0&amp;pi=0&amp;gsm=0&amp;oriquery=机车&amp;objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fci.xiaohongshu.com%252F4ff7ecd5-a453-61fc-70a3-ba9b56e687c4%253FimageView2%252F2%252Fw%252F1080%252Fformat%252Fjpg%26refer%3Dhttp%253A%252F%252Fci.xiaohongshu.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1638933651%26t%3De54ca1c2453fd9e14303128ec0b33562&amp;rpstart=0&amp;rpnum=0&amp;adpicid=0&amp;nojc=undefined&amp;dyTabStr=MCwzLDYsMSw0LDUsOCw3LDIsOQ%3D%3D"
      }
    ]

    return {
      imgst,
      jiche
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
.lunbotu_1 {
  width: 100%;
  height: 330px;
  display: flex;
  justify-content: space-around;
}
.kapian {
  width: 270px;
  border-radius: 10px;
  background: rgb(248, 240, 240);
  position: relative;
  overflow: hidden;
}
.kapian:hover {
  cursor: pointer;
  box-shadow: 0px 2.5px 10px rgba(0, 0, 0, 0.115),
    0px 20px 80px rgba(0, 0, 0, 0.23);
}
.kapian img {
  width: 100%;
  height: 220px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.kapian a {
  color: black;
}
.kapian:hover .bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
.kapian:hover .animated {
  bottom: 0px;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: -50px;
  text-align: center;
  line-height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
}
@-webkit-keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>