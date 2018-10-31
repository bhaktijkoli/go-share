<template>
  <div id="wrapper">
    <Loading/>
  </div>
</template>

<script>
import {ipcRenderer} from 'electron'

import Loading from './../Loading'
export default {
  components: {
    Loading
  },
  mounted() {
    ipcRenderer.send('portal-create');
    ipcRenderer.on('portal-created', ()=> {
      console.log("Portal Created");
    })
  }
}
</script>

<style media="screen">
</style>
