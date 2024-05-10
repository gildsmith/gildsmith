import DashboardIndex from './pages/DashboardIndex.vue'
import {IconHome} from '@tabler/icons-vue'

export default [
    {
        name: 'dashboard.index',
        component: DashboardIndex,
        path: '/',
        meta: {name: 'Dashboard Index', icon: IconHome}
    }
]
