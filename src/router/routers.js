import LOGIN from '../pages/LOGIN'
import REGISTER from '@/pages/REGISTER'

export default[
    {
        path: '/',
        // name: 'LOGIN',
        component: LOGIN
      },
    {
        path: '/register',
        name: 'REGISTER',
        component: REGISTER
    }
    ]