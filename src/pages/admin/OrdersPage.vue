<template lang="pug">
.q-ma-md
  .backH4.text-h4.text-center 訂單明細
  q-table.order-table.q-ma-md(:columns="columns" :rows="orders" row-key="_id" :filter="filter" :loading="loading")

    template(v-slot:top-right)
        q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
          template(v-slot:append)
            q-icon(name="search")

    template(v-slot:body-cell-product="props")
      q-td
        template(v-for="product in props.row.products")
          ul.q-pl-xs.text-left
            li {{ product?.quantity }} x &nbsp; &nbsp; {{ product.p_id?.name }}

    template(v-slot:body-cell-name="props")
      q-td
        span {{ props.row.u_id?.name }}
</template>

<script setup>
import { apiAuth } from 'src/boot/axios'
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'

const orders = reactive([])
const filter = ref('')
const columns = [
  {
    name: 'id',
    required: true,
    label: '訂單編號',
    align: 'center',
    field: '_id'
  },
  {
    name: 'name',
    required: true,
    label: '訂購人',
    align: 'center'
  },
  {
    name: 'date',
    required: true,
    label: '訂購日期',
    align: 'center',
    field: 'date',
    format: val => `${new Date(val).toLocaleDateString()}`,
    sortable: true
  },
  {
    name: 'product',
    required: true,
    label: '商品',
    align: 'center'
  },

  {
    name: 'total',
    required: true,
    label: '金額',
    align: 'center',
    field: 'totalPrice'
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '訂單錯誤！'
    })
  }
})()

</script>

<style lang="sass">
li
  list-style: none

.order-table
  max-height: calc(100vh - 150px)

  tr td
    text-align: center
    font-size: 14px

  tr th
    position: sticky
    z-index: 2
    background: #333
    font-size: 14px
    text-align: center

  thead tr:first-child th
    top: 0
    z-index: 1

</style>
