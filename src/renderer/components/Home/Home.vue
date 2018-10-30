<template>
  <div id="wrapper">
    <div class="overlaypath"></div>
    <div class="center" style="margin-top:20vh">
      <h3 class="white">Create a portal or join a portal.</h3>
    </div>
    <div class="center" style="margin-top:10vh">
      <button class="button white rounded wide">Create</button>
    </div>
    <div class="center" style="margin-top:20vh">
      <button class="button primary rounded wide">Join</button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style media="screen">
.overlaypath {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  clip-path: polygon(0 0, 100% 0, 100% 39%, 0 63%);
  z-index: -1;
}
</style>
