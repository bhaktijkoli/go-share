<template>
  <div class="center">
    <div class="lds-css ng-scope" style="width: 50px; height: 50px;">
      <div style="width:100%;height:100%" class="lds-rolling">
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
@keyframes lds-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@-webkit-keyframes lds-rolling {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.lds-rolling {
  position: relative;
}
.lds-rolling div,
.lds-rolling div:after {
  position: absolute;
  width: 160px;
  height: 160px;
  border: 20px solid #43e97b;
  border-top-color: transparent;
  border-radius: 50%;
}
.lds-rolling div {
  -webkit-animation: lds-rolling 1s linear infinite;
  animation: lds-rolling 1s linear infinite;
  top: 100px;
  left: 100px;
}
.lds-rolling div:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.lds-rolling {
  width: 200px !important;
  height: 200px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
</style>
