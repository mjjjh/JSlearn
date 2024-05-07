<template>
    <div>
        <input type="text" placeholder="请输入" v-model="Username">
        <button @click="handleEnterBtn">登录</button>
    </div>
</template>

<script setup>
import router from '@/router';
import { ref } from 'vue';
let Username = ref('');

function handleEnterBtn(){
    if(Username.value.length <= 6)
    {
        alert("请输入大于六位");
        return;
    }
    localStorage.setItem("UserId",Username.value);
    router.push('/');
}


</script>



<style>

</style>