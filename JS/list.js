function popUp(url){
    popUpWindow = window.open(url, 'popUpWindow',
    'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
}

document.getElementById('media').addEventListener('change', function() {
    console.log('You selected: ', this.value);
    if(this.value == "vhs") {
        popUp("https://cdn.pixabay.com/photo/2016/04/11/14/22/vhs-1322179_960_720.png");
	}
    else if(this.value == "dvd") {
        popUp("https://tellis-flugfiske.se/wp-content/uploads/2015/04/dvd.jpg");
    }
    else if(this.value == "betamax") {
        popUp("https://ichef.bbci.co.uk/news/976/cpsprodpb/FE24/production/_86606056_img_20151110_102027.jpg");
    }
    else if(this.value == "streaming") {
        popUp("https://thumbs.dreamstime.com/z/multimedia-television-video-streaming-media-tv-demand-multimedia-television-video-streaming-media-tv-demand-web-banner-160340449.jpg")
    }
    }
  );