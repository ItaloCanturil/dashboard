<template>
  <modal-factory/>
  <router-view/>
</template>

<script>
import { watch } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import ModalFactory from './components/ModalFactory'
import services from './services'
export default {
  components: { ModalFactory },
  setup () {
    const router = useRouter()
    const route = useRoute()

    /*  função watch recebe dois parametros
      O primeiro é uma função que retorna o que vai ser escutado
      E quando mudar vai ser chamado a segunda função */
    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')
        if (!token) {
          router.push({ name: 'Home' })
          return
        }
        const { data } = await services.users.getMe()
        console.log(data)
      }
    })

    return {
      router
    }
  }
}
</script>
