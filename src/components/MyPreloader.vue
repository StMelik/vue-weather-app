<template>
  <div id="floatingCirclesG">
    <div class="f_circleG" id="frotateG_01"></div>
    <div class="f_circleG" id="frotateG_02"></div>
    <div class="f_circleG" id="frotateG_03"></div>
    <div class="f_circleG" id="frotateG_04"></div>
    <div class="f_circleG" id="frotateG_05"></div>
    <div class="f_circleG" id="frotateG_06"></div>
    <div class="f_circleG" id="frotateG_07"></div>
    <div class="f_circleG" id="frotateG_08"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#floatingCirclesG{
  position:relative;
  width:144px;
  height:144px;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%) scale(0.8);
}

.f_circleG{
  position:absolute;
  background-color:rgb(79,79,79);
  height:22px;
  width:22px;
  border-radius:50%;
  animation-name:f_fadeG;
  animation-duration:0.992s;
  animation-iteration-count:infinite;
  animation-direction:normal;
}

#frotateG_01{
  left:0;
  top:59px;
  animation-delay:0.3695s;
  -o-animation-delay:0.3695s;
  -ms-animation-delay:0.3695s;
  -webkit-animation-delay:0.3695s;
  -moz-animation-delay:0.3695s;
}

#frotateG_02{
  left:17px;
  top:17px;
  animation-delay:0.496s;
  -o-animation-delay:0.496s;
  -ms-animation-delay:0.496s;
  -webkit-animation-delay:0.496s;
  -moz-animation-delay:0.496s;
}

#frotateG_03{
  left:59px;
  top:0;
  animation-delay:0.6125s;
  -o-animation-delay:0.6125s;
  -ms-animation-delay:0.6125s;
  -webkit-animation-delay:0.6125s;
  -moz-animation-delay:0.6125s;
}

#frotateG_04{
  right:17px;
  top:17px;
  animation-delay:0.739s;
  -o-animation-delay:0.739s;
  -ms-animation-delay:0.739s;
  -webkit-animation-delay:0.739s;
  -moz-animation-delay:0.739s;
}

#frotateG_05{
  right:0;
  top:59px;
  animation-delay:0.8655s;
  -o-animation-delay:0.8655s;
  -ms-animation-delay:0.8655s;
  -webkit-animation-delay:0.8655s;
  -moz-animation-delay:0.8655s;
}

#frotateG_06{
  right:17px;
  bottom:17px;
  animation-delay:0.992s;
  -o-animation-delay:0.992s;
  -ms-animation-delay:0.992s;
  -webkit-animation-delay:0.992s;
  -moz-animation-delay:0.992s;
}

#frotateG_07{
  left:59px;
  bottom:0;
  animation-delay:1.1085s;
  -o-animation-delay:1.1085s;
  -ms-animation-delay:1.1085s;
  -webkit-animation-delay:1.1085s;
  -moz-animation-delay:1.1085s;
}

#frotateG_08{
  left:17px;
  bottom:17px;
  animation-delay:1.235s;
  -o-animation-delay:1.235s;
  -ms-animation-delay:1.235s;
  -webkit-animation-delay:1.235s;
  -moz-animation-delay:1.235s;
}



@keyframes f_fadeG{
  0%{
    background-color:rgb(71,148,255);
  }

  100%{
    background-color:rgb(79,79,79);
  }
}

@-o-keyframes f_fadeG{
  0%{
    background-color:rgb(71,148,255);
  }

  100%{
    background-color:rgb(79,79,79);
  }
}

@-ms-keyframes f_fadeG{
  0%{
    background-color:rgb(71,148,255);
  }

  100%{
    background-color:rgb(79,79,79);
  }
}

@-webkit-keyframes f_fadeG{
  0%{
    background-color:rgb(71,148,255);
  }

  100%{
    background-color:rgb(79,79,79);
  }
}

@-moz-keyframes f_fadeG{
  0%{
    background-color:rgb(71,148,255);
  }

  100%{
    background-color:rgb(79,79,79);
  }
}
</style>