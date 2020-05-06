import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
  { path: '/', name: 'index', component: page('index.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/verification/verify/:id', name: 'verification', component: page('auth/verification/verify.vue') },
  { 
    path: '/verification/resend',
    name: 'verification.resend',
    component: page('auth/verification/resend.vue')
  },
  { 
    path: '/password/email',
    name: 'password.email',
    component: page('auth/password/reset-email.vue')
  },
  { 
    path: '/password/reset',
    name: 'password.reset',
    component: page('auth/password/password-reset.vue')
  },
  { 
    path: '/user/dashboard',
    name: 'user.dashboard',
    component: page('user/dashboard.vue')
  },
  { 
    path: '/designs/upload',
    name: 'designs.upload',
    component: page('user/designs/create.vue')
  },
  { 
    path: '/designs/:id/edit',
    name: 'designs.edit',
    component: page('user/designs/edit.vue')
  },
];

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  });
}
