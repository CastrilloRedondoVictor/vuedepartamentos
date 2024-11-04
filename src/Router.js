import { createRouter, createWebHistory } from 'vue-router';

import DepartamentosView from './components/DepartamentosView.vue';
import DepartamentosPost from './components/DepartamentosPost.vue';
import DepartamentosUpdate from './components/DepartamentosUpdate.vue';
import DepartamentosDelete from './components/DepartamentosDelete.vue';
import DepartamentosGet from './components/DepartamentosGet.vue';

const routes = [
    {path: '/', component: DepartamentosView},
    {path: '/post', component: DepartamentosPost},
    {path: '/update/:id', component: DepartamentosUpdate},
    {path: '/delete/:id', component: DepartamentosDelete},
    {path: '/get/:id', component: DepartamentosGet},
]

const router = createRouter({history: createWebHistory(), routes})

export default router;