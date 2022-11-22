<template>
    <form @submit.prevent="handleSubmt">
        <label for="">Title</label>
        <input type="text" name="" id="" v-model="title" required>
        <label for="">Details</label>
        <textarea name="" id=""  v-model="details" required></textarea>
        <button @click="handleSubmit">Update Project</button>
    </form>
</template>

<script setup>
import {  ref , onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps(['id'])
const title = ref('')
const details = ref('')

const uri = ref('http://localhost:3000/projects/'  + props.id) ;
onMounted(() => {
    fetch(uri.value)
    .then((res) => res.json())
    .then(data => {
        title.value = data.title;
        details.value = data.details

    })
})


function handleSubmit() {
    fetch(uri.value, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ title:title.value, details:details.value})

    }).then(() => {
        router.push('/')

    }).catch((err) =>  console.log(err))
    
}








    






</script>

<style lang="scss" scoped>
form{
    background: white;
    padding: 20px;
    border-radius: 10px;
}
label{
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px;
}
input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
}
form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
}

</style>













