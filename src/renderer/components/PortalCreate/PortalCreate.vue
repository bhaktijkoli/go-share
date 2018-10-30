<template>
  <div id="wrapper">

  </div>
</template>

<script>
import {ipcRenderer} from 'electron'
export default {
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
