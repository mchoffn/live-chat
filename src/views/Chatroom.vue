<template>
    <div class="container">
        <Navbar/>
        <NewChatForm/>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import NewChatForm from '../components/NewChatForm'

export default {
    components: { Navbar, NewChatForm },
    setup() {
        const {user} = getUser()
        const router = useRouter()

        watch(user, () => {
            if(!user.value) {
                router.push({name: 'Welcome' })
            }
        })
    }
}
</script>

<style>

</style>