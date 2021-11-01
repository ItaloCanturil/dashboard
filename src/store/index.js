import { readonly } from 'vue'
import UserModule from './user.js'
import GlobalModule from './global'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})
