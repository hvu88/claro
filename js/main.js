var vm = new Vue({
  data:{
    video:{
      url: null
    },
    modal:{
      show: false
    }
  },
  mounted: function(){
    const self = this;



    var menu = '.section2__main .tab .menu ul li';
    var tab = '.section2__main .tab .info .info__tab';

    // var slick1 = $('#list1').slick({
    //   arrows: false,
    //   dots: true,
    //   slidesToShow: 1,
    //   infinite: false,
    // });

    var slick1 = $('#list1').slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
       variableWidth: true,
      infinite: false,
      responsive: [
      {
          breakpoint: 9999,
          settings: "unslick"
      },
      {
        breakpoint: 770,
        settings: {
  
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

    });

    var slick2 = $('#list4').slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]

    });

    var slick3 = $('#list6').slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      variableWidth: true,
      infinite: false,
      responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        }
      },
      {
          breakpoint: 650,
          settings: "unslick"
      },

    ]

    });



    
    $(menu).filter(function(i){
      $(this).on('click', function(){

        $(menu).removeClass('active');
        $(menu).eq(i).addClass('active');

        $(tab).removeClass('active');
        $(tab).eq(i).addClass('active');

        slick1.slick('setPosition');
        slick2.slick('setPosition');

      });

      //slick1.slick("getSlick").refresh();
      //slick2.slick("getSlick").refresh();

    });

    $(window).resize(function() {
      slick1.slick('resize');
      slick2.slick('resize');
    });

    $(tab).eq(1).removeClass('active');


    var questions = Array.apply(null, document.querySelectorAll('.questions__list ul li h3'));

    questions.filter(function (element, index) {

      /*element.firstChild.addEventListener("click", function(event){ 
        if (event.stopPropagation) {
          event.stopPropagation();
        } else {
          event.cancelBubble = true;
        }
      });*/

      element.addEventListener("click", function(event){ 

        var buttonClass = this.parentNode.classList;

        if(buttonClass.contains("active")){
          buttonClass.remove("active");
        }else{
          buttonClass.add("active");
        }

        var panel = this.nextElementSibling;

        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 

      });

    });


    var considerations = document.querySelector('.considerations__subtitle');

    considerations.addEventListener("click", function(){ 

      var buttonClass = event.target.parentNode.parentNode.children[0].classList;

      if(buttonClass.contains("active")){
        buttonClass.remove("active");
      }else{
        buttonClass.add("active");
      }

      var panel = this.nextElementSibling;

      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 

    });
  
  },
  methods: {
    openVideo: function(url){
      this.video.url = url;

      //this.video.url = '<iframe id="video" width="560" height="315" :src="'+ url +'" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>';
      //this.video.url = '<iframe width="560" height="315" src="https://www.youtube.com/embed/mvV5AloFRsY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      this.showModal();
    },
    showModal: function(){
      this.modal.show = true;
      document.querySelector("body").style.overflow = 'hidden';
    },
    closeModal: function(){
      this.modal.show = false;
      document.querySelector("body").style.overflow = 'auto';
    }
  }
}).$mount('#app');

function openVideo(url){
  vm.openVideo(url);
}