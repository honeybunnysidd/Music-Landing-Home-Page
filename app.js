var mySong = document.getElementById("song");
      var icon = document.getElementById("icon");

      icon.onclick = function () {
        if (mySong.paused) {
          mySong.play();
          icon.src = "Media/pause.png";
        } else {
          mySong.pause();
          icon.src = "Media/play.png";
        }
      };