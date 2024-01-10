<template>
<DefaultLayout>
<div v-auto-animate class="max-w-xl w-11/12 mx-auto">
  <h1 class=" text-center text-2xl/loose mb-4">轉帳QRCode</h1>
  <div class=" mb-6" v-if="show">
    <figure>
      <img class="mx-auto" :src="qrcode" alt="qr code">
    </figure>
  </div>
  <form @submit.prevent="submitHandler" class="bg-white grid gap-2 p-8 rounded shadow-md mb-10">
    <div class="mb-2">
      <input :disabled="show" required pattern="^\d{3}$" title="銀行代碼" class="p-3 w-full disabled:bg-gray-300 bg-gray-100 appearance-none outline-none ring-2 focus:ring-4 ring-primary rounded-xl" type="text" placeholder="銀行代碼*" list="bank" v-model="QRCodeData.bank">
    </div>
    <div class="mb-2">
      <input :disabled="show" required pattern="^\d+$" title="銀行帳號限數字" class="p-3 w-full disabled:bg-gray-300 bg-gray-100 appearance-none outline-none ring-2 focus:ring-4 ring-primary rounded-xl" type="tel" placeholder="銀行帳號*" v-model="QRCodeData.account">
    </div>
    <div class="mb-2">
      <input :disabled="show" pattern="^\d+$" title="金額限數字" class="p-3 w-full disabled:bg-gray-300 bg-gray-100 appearance-none outline-none ring-2 focus:ring-4 ring-primary rounded-xl" type="tel" placeholder="轉帳金額" v-model="QRCodeData.amount">
    </div>
    <div class="mb-2">
      <input :disabled="show" class="p-3 w-full bg-gray-100 disabled:bg-gray-300 appearance-none outline-none ring-2 focus:ring-4 ring-primary rounded-xl" type="tel" placeholder="備註" v-model="QRCodeData.msg">
    </div>
    <div class=" flex items-center justify-end gap-9">
      <button v-show="show" class="appearance-none text-primary" @click.prevent="show = false">修改</button>
      <button class="appearance-none bg-primary text-white px-3 py-2 rounded-xl hover:opacity-80" type="submit">產生</button>
    </div>
  </form>
</div>
<datalist id="bank">
  <option v-for="bank in BankCode" :key="bank.value" :value="bank.value">{{ bank.name }}</option>
</datalist>
</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BankCode from '../assets/twBankCode.json'
import useForm from '../composable/useForm'
import { useQRCode } from '@vueuse/integrations/useQRCode'
import { ref } from 'vue'

const {
  QRCodeData,
  resultStr
} = useForm()

const show = ref(false)

const qrcode = useQRCode(resultStr)

const submitHandler = async () => {
  show.value = true
}
</script>