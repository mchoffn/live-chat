<template>
<form >
    <textarea placeholder="Type a message and hit enter to send.." 
    v-model="message" @keypress.enter.prevent="handleSubmit">
    </textarea>
</form>
    
</template>

<script>
import {ref} from 'vue'
import getUser from '../composables/getUser'
import {timestamp} from '../firebase/config'


export default {
    setup() {
        const message = ref('')
        const user = getUser()

        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                name: user.displayName,
                createdAt: timestamp()
            }
            console.log(chat)
            message.value = ''
        }

        return {message, handleSubmit}
    }
    
}
</script>

<style>

</style>