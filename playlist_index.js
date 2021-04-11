var player; //YouTube播放器

//當YouTube API準備好時
onYouTubeIframeAPIReady(() => {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "UizXV2DPI5c",
    playerVars: {
      autoplay: 1, //自動撥放
      controls: 0, //控制項
      start: 26, //起始秒數
      //"showinfo":0, //上方標題顯示(2018/9已關掉此功能)
      //"erl":0, //影片最後的推薦影片(2018/9後還是會顯示)
      iv_load_policy: 3, //不顯示影片註解行銷
    },
    events: {
      onReady: onPlayerReady,
    },
  });
});
//當YouTube播放器準備好時
onPlayerReady((event) => {
  player.playVideo();
});

$(document).ready(() => {
  $("#player").hide();
});
