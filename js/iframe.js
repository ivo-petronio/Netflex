var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        height: '200',
        width: '520',
        videoId: 'glaG64Ao7sM',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        pauseVideo(event.target.a.id);
    }
}

function pauseVideo(player_id) {
    if (player_id == "player1") {
        player2.pauseVideo();
    }
}