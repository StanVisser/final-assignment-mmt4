
$(document).ready(function(){

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true

});
});

$(document).ready(function(){
  $(".accordion_header").click(function(){
    $(".accordion_header").removeClass("active");
    $(this).addClass("active");
  })
});

$(document).ready(function(){
  $(document).ready(function(){
    $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: $('.next'),
      prevArrow: $('.prev'),
      responsive: [{
          breakpoint: 1300,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 900,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]
    });
  });
  
var checkbox = document.querySelector('input[name=theme]');

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }
});
/*video pause/play*/
$(document).ready(function(){
  $('.playButton').click(function(){
    $('img').toggleClass('active')
  })
  });
  
  var video = document.querySelector('.video-js');
  var btn = document.querySelector('.playButton');
  
  function togglePlayPause(){
   if(video.paused){
    video.play();
   } else{
     video.pause();
   }
  }
  btn.onclick = function(){
   togglePlayPause();
  };

/*video hover (show controls)*/
$(document).ready(function(){
$('.accordion_video').hover(function(){
  $('.control').css({
      'opacity': '1',
});
}, function(){
  $('.control').css({
      'opacity': '0',
});
});
});

/*video forward/back*/
var buttonBack = document.getElementById('backButton');
var buttonForward = document.getElementById('forwardButton');
var videoT = videojs('.accordion_video');

videoT.ready (function(){
videoT.on('timeupdate', function(){

var time = videoT.currentTime();
var duration = videoT.duration();

console.log(time);

if (time>= duration){
  $('.popup').css({
    'display': 'block'
  })
}
});
console.logo('einde');

buttonBack.onclick = function(){
  videoT.currentTime(videoT.currentTime() - 10);
};

 
 
 btnForward.onclick = function(){
  videoT.currentTime(videoT.currentTime() + 10);
 };
});

/*popup*/
