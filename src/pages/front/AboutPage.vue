<template lang="pug">
#about
  .about-left.fixed-left
    .cursor-pointer.about.row.items-end.justify-end.q-pa-md(style="height: calc(31vh - 58px);display: block")
      .text-h5 節目企劃
      .text-h3.text-black(style="display: block;") 節目<br>&nbsp;企劃
        q-icon(font-awesome-icon name="fa-solid fa-angles-right" color="black" size="30px")
    .cursor-pointer.about.row.items-end.justify-end.q-pa-md(style="height: 18vh;")
      .text-h5 人物介紹
      .text-h3.text-black 人物<br>&nbsp;介紹
        q-icon(font-awesome-icon name="fa-solid fa-angles-right" color="black" size="30px")
    .cursor-pointer.about.row.items-end.justify-end.q-pa-md(style="height: 18vh;")
      .text-h5 現場照片
      .text-h3.text-black 現場<br>&nbsp;照片
        q-icon(font-awesome-icon name="fa-solid fa-angles-right" color="black" size="30px")
    .cursor-pointer.about.row.items-end.justify-end.q-pa-md(style="height: 18vh;")
      .text-h5 影片合集
      .text-h3.text-black 影片<br>&nbsp;合集
        q-icon(font-awesome-icon name="fa-solid fa-angles-right" color="black" size="30px")

  .about-right
      q-select.q-mb-xl(v-if="model" rounded outlined v-model='model' :options='options' label='選擇類別' color="warning")
      #INFO(v-if="model.tab === 1")
        .q-gutter-y-md
          .row.q-ma-md.items-end
            .col-12.col-md-5.INFO-title 蹦蹦地球娛樂室
            .col-12.col-md-7.text-h6.INFO-kreng 뿅뿅 지구오락실 | Earth Arcade
          q-card
            q-tabs.text-grey(v-if="abouts.length > 0" v-model='infoTab' dense active-color='warning'
              indicator-color='warning' align='justify' narrow-indicator)
              template(v-for="about in abouts" :key="about._id")
                q-tab(:name="getTabName(about.session)" :label="getTabName(about.session)")
              q-tab(:name="getTabName(abouts.length + 1)" :label="getTabName(abouts.length + 1)")

            q-separator
            q-tab-panels(v-if="abouts.length > 1" v-model='infoTab' animated)
              template(v-for="about in abouts" :key="about._id")
                q-tab-panel(:name="getTabName(about.session)")
                  .row
                    .col-12.col-md-4.q-px-md.text-center
                      q-img(:src="about.image" min-width="300px" spinner-color="white")
                    .col-12.col-md-8.q-pl-md-xl
                      .column
                        .col.text-h6.bg-warning.text-center.q-mb-md(style="border-radius: 16px") 節目背景
                        .col.text-subtitle1.text-justify.text-indent.q-mx-md {{ about.intro }}
                        .col.q-mt-xl
                          .text-h6.bg-warning.text-center.q-mb-md(style="border-radius: 16px") 播出資訊
                          .row.q-mx-md
                            .col-3.text-subtitle1 播出時間
                            .col-9.text-subtitle1 {{ about.info.dateStart }} ~ {{ about.info.dateEnd }}
                          .row.q-mx-md
                            .col-3.text-subtitle1 主要來賓
                            .col-9.text-subtitle1
                              template(v-for="star in about.info.Starring" :key="star")
                                span {{ star }} &nbsp;&nbsp;
                          .row.q-mx-md
                            .col-3.text-subtitle1 導演
                            .col-9.text-subtitle1
                              template(v-for="pd in abouts[1].info.director" :key="pd")
                                span {{ pd }} &nbsp;&nbsp;
                          .row.q-mx-md
                            .col-3.text-subtitle1 季集數
                            .col-9.text-subtitle1 第 {{ about.session }} 季、{{ about.info.episode }} 集
                          .row.q-mx-md
                            .col-3.text-subtitle1 串流平台
                            .col-9.text-subtitle1
                              template(v-for="ott in about.info.TWott" :key="ott")
                                span {{ ott }} &nbsp;&nbsp;
                  .q-mt-xl
                    .text-h6.bg-warning.text-center.q-mb-md(style="border-radius: 16px") 節目介紹
                    p.text-subtitle1.q-mx-md {{ about.info.description }}
              q-tab-panel(:name="getTabName(abouts.length + 1)")
                .text-h6(align="center") 地球勇士探險 ING

      #PROFILE(v-if="model.tab === 2")
        q-card
          q-tabs.text-grey(v-if="members.length > 0" v-model='infoTab' dense active-color='warning'
            indicator-color='warning' align='justify' narrow-indicator)
            template(v-for="about in abouts" :key="about._id")
              q-tab(:name="getTabName(about.session)" :label="getTabName(about.session)")
            q-tab(:name="getTabName(abouts.length + 1)" :label="getTabName(abouts.length + 1)")

          q-separator
          q-tab-panels(v-if="members.length > 0" v-model='infoTab' animated)
            template(v-for="about in abouts" :key="about._id")
              q-tab-panel(:name="getTabName(about.session)")
                div.column.items-center.row-md(v-for="member in members.filter(m => m.session === about.session)" :key="member._id")
                  .col-md-4.q-mr-md
                    q-img(:src="member.image" width="230px")
                  .col-md-7
                    .q-mt-md.q-mt-md-none.text-h4 {{ member.name }}
                    .text-h5.q-my-md {{ member.features }}
                    p(v-html="member.story" style="white-space: pre-line")
                  hr.q-my-xl(v-if="member.num < 3")

            q-tab-panel(:name="getTabName(abouts.length + 1)")
              .text-h6(align="center") 地球勇士探險 ING

      #GALLERY(v-if="model.tab === 3")
        .text-h5 最新上傳
        .q-pa-md
          swiper(v-bind="swiperOptions")
            swiper-slide(v-for="photo in photos.slice(0, 1)" :key="photo._id")
              q-img(:src="photo.image")
            template(v-for="photo in photos.slice(0, 1)")
              swiper-slide(v-for="p in photo.images" )
                q-img(:src="p")

        q-separator.q-my-md

        .text-h5 All
          .row-md.justify-evenly
            .col-3.cursor-pointer.q-ma-md(v-for="(photo, idx) in photos" :key="photo._id" @click="swiperDialog(idx)")
              q-card.card
                q-img(:src='photo.image' height="150px")
                q-card-section
                  .text-subtitle1.text-ellipsis {{ photo.name }}
                  .text-subtitle2 {{ new Date(photo.date).toLocaleString() }}

      #VIDEO(v-if="model.tab === 4")
        q-expansion-item.q-my-sm.shadow-1.overflow-hidden(default-opened group="ablum" style='border-radius: 16px' icon='album' label='HIGHLIGHT' header-class='bg-warning text-black text-weight-bold' expand-icon-class='text-black')
          .row-md.justify-evenly
            q-card.my-card.col-3.q-mx-sm.q-my-md
              //- q-skeleton( width="100vh" )
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/Q-NxDZLtELc")
              q-card-section
                .text-body2 전설의 레전드 지락실.ZIP??
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/9J28BsI-Z14")
              q-card-section
                .text-body2 未發布的“天氣任務”史詩即將發布
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed//nc3dfwflC4s")
              q-card-section
                .text-body2 KG받는 토롱이 잡기 대작전.ZIP📂
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/durLpBwXh9g")
              q-card-section
                .text-body2 전설의 레전드 지락실.ZIP??
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/g_ETO-W-0lU")
              q-card-section
                .text-body2 憤怒的地球娛樂室老闆.ZIP
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed//1DtzFseJnV4")
              q-card-section
                .text-body2 地娛室成員首次碰面後的未公開花絮

        q-expansion-item.q-my-sm.shadow-1.overflow-hidden(group="ablum" style='border-radius: 16px' icon='album' label='SPECIAL' header-class='bg-warning text-black text-weight-bold' expand-icon-class='text-black')
          .row-md.justify-evenly
            q-card.my-card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/Q-NxDZLtELc")
              q-card-section
                .text-subtitle1 전설의 레전드 지락실.ZIP??
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/9J28BsI-Z14")
              q-card-section
                .text-subtitle1 未發布的“天氣任務”史詩即將發布
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed//nc3dfwflC4s")
              q-card-section
                .text-subtitle1 KG받는 토롱이 잡기 대작전.ZIP📂
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/durLpBwXh9g")
              q-card-section
                .text-subtitle1 전설의 레전드 지락실.ZIP??
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/g_ETO-W-0lU")
              q-card-section
                .text-subtitle1 憤怒的地球娛樂室老闆.ZIP
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed//1DtzFseJnV4")
              q-card-section
                .text-subtitle1 地娛室成員首次碰面後的未公開花絮

        q-expansion-item.q-my-sm.shadow-1.overflow-hidden(group="ablum" style='border-radius: 16px' icon='album' label='PREVIEW' header-class='bg-warning text-black text-weight-bold' expand-icon-class='text-black')
          .row-md.justify-evenly
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/EFN9_cj1IfU")
              q-card-section
                .text-subtitle1 [最終話預告] 深夜動作劇★ 過去約定的“覺醒任務”COMING SOON
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/puVobEsPsyc")
              q-card-section
                .text-subtitle1 【最終話預告】震撼曼谷一夜的那個？？ 令人心碎的天氣任務大公開
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed//uPqku0EPkH0")
              q-card-section
                .text-subtitle1 【第11集預告】從吃貨到舞會！ 來一場全程課程包價遊♬
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/A5Jb246DLJ4")
              q-card-section
                .text-subtitle1 【第11集預告】綜合大禮包st暑期獎勵假期？？ 順帶一提...？
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed/2kkHqDS4XEQ")
              q-card-section
                .text-subtitle1 [第10集預告] 點心餅乾測驗！ 吉拉克斯咆哮事件的來龍去脈……？
            q-card.card.col-3.q-mx-sm.q-my-md
              q-video(:ratio='16/9' src="https://www.youtube.com/embed//seqQbIDKr04")
              q-card-section
                .text-subtitle1 【第10集預告】“玉皇大帝請客！”紀念抓到兔瓏！ 國內獎勵假期開始？？

//- 個別相簿
q-dialog(v-model="dialog")
  q-card
    q-card-section
      swiper(v-bind="albumOptions")
        swiper-slide
          q-img(:src="photos[dialogidx].image" width="550px")
        swiper-slide(v-for="p in photos[dialogidx].images" :key="p")
          q-img(:src="p")
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import Swal from 'sweetalert2'
import { api } from 'src/boot/axios'
import { useRouter } from 'vue-router'
import 'swiper/css/bundle'

const tab = ref(0)
const dialog = ref(false)
const dialogidx = ref(0)
const router = useRouter()
const photos = reactive([])
const abouts = reactive([])
const members = reactive([])
const options = reactive([
  {
    label: '節目企劃',
    value: '節目企劃',
    tab: 1
  },
  {
    label: '人物介紹',
    value: '人物介紹',
    tab: 2
  },
  {
    label: '現場照片',
    value: '現場照片',
    tab: 3
  },
  {
    label: '影片合集',
    value: '影片合集',
    tab: 4
  }])
const model = ref(options[0])
const infoTab = ref('session 1')
const swiperDialog = (idx) => {
  dialog.value = true
  dialogidx.value = idx
}

const swiperOptions = {
  modules: [Navigation, Pagination, Scrollbar, Autoplay],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  // autoplay: {
  //   delay: 2500
  // },
  loop: true,
  scrollbar: {
    draggable: true,
    hide: true
  }
}
const albumOptions = {
  modules: [Navigation, Pagination, Scrollbar, Autoplay],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  // autoplay: {
  //   delay: 2500
  // },
  loop: true,
  scrollbar: {
    draggable: true
  }
}

const getTabName = (session) => {
  return `session ${session}`
}

// Vue 的生命週期(beforeCreate(setup()) → created(setup()) → beforeMount(onbeforeCreate) → mounted(onMounted)) 中
// 在 setup 階段 Vue 實體剛建立，狀態事件剛初始化完成，但資料尚未被擋定
// 在 onMounted 階段才綁定好網頁的 DOM 和節點到 Vue 的實體，所以在這時候才可進行操作 DOM
onMounted(() => {
  const about = document.querySelectorAll('.about')
  const h5 = document.querySelectorAll('.text-h5')
  const h3 = document.querySelectorAll('.text-h3')

  h3.forEach((h, idx) => {
    h.style.display = 'none'
    h5[idx].style.color = 'grey'
  })
  h3[0].style.display = 'block'
  h5[0].style.display = 'none'
  about[0].style.background = 'linear-gradient(135deg, #53C2BA 0%, #fff 50%, #C0538A 100%)'

  about.forEach((a, idx) => {
    a.addEventListener('click', function () {
      about.forEach((a, idx) => {
        a.style.background = '#000'
        a.style.height = '18vh'
        a.style.display = 'flex'
        h3[idx].style.display = 'none'
        h5[idx].style.display = 'block'
        h5[idx].style.color = 'grey'
      })
      model.value = options[idx]
      this.style.background = 'linear-gradient(135deg, #53C2BA 0%, #fff 50%, #C0538A 100%)'
      this.style.height = 'calc(31vh - 58px)'
      this.style.display = 'block'
      h5[idx].style.display = 'none'
      h3[idx].style.display = 'block'
    })
  })
});

(async () => {
  try {
    const result = await Promise.all([api.get('/photos'), api.get('/abouts'), api.get('/members')])
    photos.push(...result[0].data.result)
    abouts.push(...result[1].data.result)
    members.push(...result[2].data.result)
    await nextTick()
    photos.reverse()
    abouts.sort((a, b) => a.session < b.session ? -1 : 1)
    members.sort((a, b) => a.session !== b.session ? a.session - b.session : a.num - b.num)
    tab.value = 1
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '發生錯誤！'
    })
  }
})()
</script>

<style lang="scss">
#about {
  .about-left {
    height: calc(100vh - 70px);
    margin-top: 58px;
    width: 230px;
    display: none;
    .text-h3 {
      font-family: 'Cubic';
    }
  .about {
    background: #000;
    transition: 0.3s;
    .q-icon {
      margin-left: 30px;
    }
    &:hover {
      background: #222;
    }
  }
  }
  .about-right {
    min-height: calc(100vh - 58px);
    margin-left: auto;
    padding: 12px 12px;
    .INFO-title {
      font-size: 40px;
      font-family: 'Cubic';
      margin: 0;
      text-align: center;
    }
    .INFO-kreng {
      text-align: center;
    }
  }

  #PROFILE {
    .text-h4 {
      font-family: 'Cubic';
      text-align: center;
    }
    hr {
      width: 100%;
      border: 1px solid #404040;
    }
  }

  #INFO {
    p.text-subtitle1 {
      white-space: pre-line;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: aliceblue;
  }
  .card .text-subtitle1 {
    -webkit-line-clamp: 1;
  }

  .memberInfo {
    height: 50px;
    background: $secondary;
    margin-right: 10px;
  }

  @media (min-width: 1024px) {
    .about-left {
      display: block;
    }
    .about-right {
      width: calc(100vw - 230px);
      padding: 12px 36px 25px;
      .q-select {
        display: none;
      }
      .INFO-title, .INFO-kreng {
        text-align: left;
      }
      #PROFILE .text-h4 {
        text-align: left;
      }
    }
  }
}
</style>
