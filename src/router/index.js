import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/module/Dashboard'
import Tasks from '@/components/module/Tasks'
import TaskGroup from '@/components/module/TaskGroup'
import Workspace from '@/components/module/Workspace'
import Files from '@/components/module/Files'
import Connection from '@/components/module/Connection'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
    	path: '/tasks',
    	name: 'Tasks',
    	component: Tasks
    },
    {
    	path: '/taskgroup',
    	name: 'TaskGroup',
    	component: TaskGroup
    },
    {
    	path: '/workspace',
    	name: 'Workspace',
    	component: Workspace
    },
    {
    	path: '/files',
    	name: 'Files',
    	component: Files
    },
    {
    	path: '/connection',
    	name: 'Connection',
    	component: Connection
    }
  ]
})
