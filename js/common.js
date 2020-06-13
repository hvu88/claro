var APP = APP || {};



var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); 

Vue.use(VeeValidate,{
  //errorBagName: 'errores', // change if property conflicts.
  //fieldsBagName: 'campos', 
  //events: 'input', // validate on input only
  locale: 'es',
  inject: false,
  dictionary: {
    es:{
      messages: {
        after: function after(field, _ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              target = _ref2[0];

          return 'El campo ' + field + ' debe ser posterior a ' + target + '.';
        },
        alpha_dash: function alpha_dash(field) {
          return 'El campo ' + field + ' solo debe contener letras, números y guiones.';
        },
        alpha_num: function alpha_num(field) {
          return 'El campo ' + field + ' solo debe contener letras y números.';
        },
        alpha: function alpha(field) {
          return 'El campo ' + field + ' solo debe contener letras.';
        },
        before: function before(field, _ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
              target = _ref4[0];

          return 'El campo ' + field + ' debe ser anterior a ' + target + '.';
        },
        between: function between(field, _ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              min = _ref6[0],
              max = _ref6[1];

          return 'El campo ' + field + ' debe estar entre ' + min + ' y ' + max + '.';
        },
        confirmed: function confirmed(field, _ref7) {
          var _ref8 = _slicedToArray(_ref7, 1),
              confirmedField = _ref8[0];

          return 'El campo ' + field + ' no coincide con ' + confirmedField + '.';
        },
        date_between: function date_between(field, _ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              min = _ref10[0],
              max = _ref10[1];

          return 'El campo ' + field + ' debe estar entre ' + min + ' y ' + max + '.';
        },
        date_format: function date_format(field, _ref11) {
          var _ref12 = _slicedToArray(_ref11, 1),
              format = _ref12[0];

          return 'El campo ' + field + ' debe tener formato formato ' + format + '.';
        },
        decimal: function decimal(field) {
          var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'],
              _ref14 = _slicedToArray(_ref13, 1),
              decimals = _ref14[0];

          return 'El campo ' + field + ' debe ser númerico y contener ' + (decimals === '*' ? '' : decimals) + ' puntos decimales.';
        },
        digits: function digits(field, _ref15) {
          var _ref16 = _slicedToArray(_ref15, 1),
              length = _ref16[0];

          return 'El campo ' + field + ' debe ser númerico y contener exactamente ' + length + ' dígitos.';
        },
        dimensions: function dimensions(field, _ref17) {
          var _ref18 = _slicedToArray(_ref17, 2),
              width = _ref18[0],
              height = _ref18[1];

          return 'El campo ' + field + ' debe ser de ' + width + ' pixeles por ' + height + ' pixeles.';
        },
        email: function email(field) {
          return 'El campo ' + field + ' debe ser un correo electrónico válido.';
        },
        ext: function ext(field) {
          return 'El campo ' + field + ' debe ser un archivo válido.';
        },
        image: function image(field) {
          return 'El campo ' + field + ' debe ser una imagen.';
        },
        in: function _in(field) {
          return 'El campo ' + field + ' debe ser un valor válido.';
        },
        ip: function ip(field) {
          return 'Dirección IP inválida.';
        },
        max: function max(field, _ref19) {
          var _ref20 = _slicedToArray(_ref19, 1),
              length = _ref20[0];

          return 'Máximo ' + length + ' caracteres.';
        },
        mimes: function mimes(field) {
          return 'El campo ' + field + ' debe ser un tipo de archivo válido.';
        },
        min: function min(field, _ref21) {
          var _ref22 = _slicedToArray(_ref21, 1),
              length = _ref22[0];

          return 'Al menos ' + length + ' caracteres.';
        },
        not_in: function not_in(field) {
          return 'El campo ' + field + ' debe ser un valor válido.';
        },
        numeric: function numeric(field) {
          return 'El campo solo debe contener números.';
        },
        regex: function regex(field) {
          return 'El formato del campo ' + field + ' no es válido.';
        },
        required: function required(field) {
          return 'Campo obligatorio.';
        },
        size: function size(field, _ref23) {
          var _ref24 = _slicedToArray(_ref23, 1),
              _size = _ref24[0];

          return 'El campo ' + field + ' debe ser menor a ' + _size + ' KB.';
        },
        url: function url(field) {
          return 'El campo ' + field + ' no es una URL válida.';
        }
      }
    }
  }
});

VeeValidate.Validator.extend('string', {
  getMessage: function(field){ return 'No es un formato valido' },
  validate: function(value){
    return new Promise( function(resolve, reject){

      //var reg = /^[a-z][a-z\s]*$/i;
      var reg = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

      if(reg.test(value)) {
        resolve({ valid: true })
      } else {
        resolve({ valid: false })
      }

    })
  }
});



APP.vue = new Vue({
  data: function(){
    return{
      modal:{
        show: false,
        page2: false
      },
      register1:{
        nombres:'',
        telefono:'',
        productointeres: 'movil-renovacion',
        datospersonales: ''
      },
    }
  },
  computed: {
    isCompleted1: function () {
      return this.register1.nombres && this.register1.telefono  &&  this.register1.datospersonales ;
    }
  },
  mounted: function(){
    const self = this;

  },
  methods:{
    showModal: function(active){
      this.modal.show = true;

      if(active == "active2"){
        this.modal.page2 = true;
      }
      document.querySelector("body").style.overflow = 'hidden';
    },
    closeModal: function(){
      this.modal.show = false;
      document.querySelector("body").style.overflow = 'auto';
    },
  }
}).$mount('#app');


var main = (function(APP, win, $, undefined) {
  "use strict";

  var st = {
    list1 : '#list4',
    list2 : '#list5',
    list3 : '#list6',
  };

  var dom = {

  };

  var page;


  var plugins = {
    slick: function(){
      dom.slick1 = $(st.list1).slick({
        dots: false,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
          {
              breakpoint: 9999,
              settings: "unslick"
          }, 
          {

            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              infinite: false,
              dots: false
            },

          }
        ]
      });

      dom.slick2 = $(st.list2).slick({
        dots: false,
        slidesToShow: 1,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
          {
              breakpoint: 9999,
              settings: "unslick"
          }, 
          {

            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
              infinite: false
            }

          }
        ]
      });

      dom.slick3 = $(st.list3).slick({
        dots: false,
        slidesToShow: 1,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
          {
              breakpoint: 9999,
              settings: "unslick"
          }, 
          {

            breakpoint: 769,
            settings: {
              slidesToShow: 1,
               slidesToScroll: 1,
              arrows: false,
              dots: false,
              infinite: false
            }

          }
        ]
      });

    }
  }

  $('#burger').on('click', function(){
    $(this).toggleClass('active')
    $('#menu_item').toggleClass('active')
    $('body').toggleClass('active')
  })

  return {
    init: function(x){
      page = x;

      if(page == "page1"){
        plugins.slick();
      }

    }
  }

})(APP, window, jQuery);