var player; //YouTube播放器

//當YouTube API準備好時
onYouTubeIframeAPIReady = () => {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "GAKy6m83yME",
    playerVars: {
      autoplay: 1, //自動撥放
      controls: 0, //控制項
      start: 20, //起始秒數
      //"showinfo":0, //上方標題顯示(2018/9已關掉此功能)
      //"erl":0, //影片最後的推薦影片(2018/9後還是會顯示)
      iv_load_policy: 3, //不顯示影片註解行銷
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
};
//當YouTube播放器準備好時
onPlayerReady = (event) => {
  player.playVideo();
};

//當播放器播放狀態改變時

onPlayerStateChange = (event) => {
  //console.log("change");
  //目前撥放秒數與預期撥放結束秒數相同時，去撥下一首
  if (player.getPlayerState() == 0) {
    player.cueVideoById({
      autoplay: 1, //自動撥放
      videoId: "GAKy6m83yME",
      startSeconds: 20,
      //"suggestedQuality":"large"
    });
    //console.log("end song");
  }
};

$(document).ready(() => {
  $("#player").hide();
});
