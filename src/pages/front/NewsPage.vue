<template lang="pug">
#new-all
    .text-center.q-pt-xl
      img(src="../../assets/images/最新消息v3_animated.svg")
    .q-ma-sm(v-for="info in news" :key="info._id" @click="() => router.push('/news/' + info._id)")
      .news-info.row.q-pa-sm.justify-center.justify-sm-between.justify-md-center( data-aos="flip-up")
        .col-12.col-sm-2.q-mx-auto
          q-img(:src="info.image")
        .col-xs-12.col-sm-6.col-md-9.column.justify-evenly
          .text-subtitle2 {{ new Date(info.date).toLocaleString() }}
          .text-h6 {{ info.title }}
          .text-subtitle1.text-ellipsis {{ info.content }}
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import AOS from 'aos'

const router = useRouter()
const news = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/news')
    news.push(...data.result)
    news.reverse()
    await nextTick()
    AOS.init()
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '取得活動錯誤！'
    })
  }
})()
</script>

<style lang="scss">
#new-all {
  .news-info {
    border-radius: 16px;
    color: white;
    position: relative;
    width: 70%;
    box-shadow: 0px 0px 10px $warning;
    background: #2228;
    margin: 50px auto 0px;

    &:hover {
      background: linear-gradient(270deg, #b6f7f3 0%, #ffa6d3 100%);
      transition: 0.3s;
      color: #222;
      box-shadow: none;
      cursor: pointer;
      .q-img {
        top: -50px;
        transition: 0.3s;
      }
    }
  }
  .q-img {
    top: -35px;
    min-width: 150px;
    height: 150px;
  }

  .text-subtitle1 {
    -webkit-line-clamp: 2;
  }
}
</style>
