<script setup>
import { onMounted,reactive,ref, toRefs,computed } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import router from '@/router';
import { useWebSocket } from '@/hooks';

onMounted(()=>{
  const _Username = localStorage.getItem("UserId");
  
  if(!_Username) 
  {
    alert("请先登录");
    router.push('/login');
  }
})



let message = "";
const messageList = ref([]);
const ws = useWebSocket(handleMessage);

function handleSendBtn(){
  if(!message) return;
  const _Username = localStorage.getItem("UserId");
  const _message = message;
  const _date = new Date();
  const _data = {
    _Username,
    _message,
    _date
  };
  ws.send(JSON.stringify(_data));
  message = "";
}

function handleMessage(e){
  const {_Username,_message,_date} = JSON.parse(e.data);
  messageList.value.push({
    _Username,
    _message,
    _date
  })
}

</script>

<template>
  <main>
    <TheWelcome :messageList />
    <input type="text" v-model="message">
    <button @click="handleSendBtn">发送</button>
  </main>
</template>


