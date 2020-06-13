var APP = APP || {};

Vue.prototype.$path = APP.CORE.Path.host;

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
          return 'El campo ' + field + ' debe contener solo caracteres númericos.';
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

VeeValidate.Validator.extend('robot', {
  getMessage: function(field){ return 'La suma no es correcta' },
  validate: function(value){
    return new Promise( function(resolve, reject){

      var answer = vm.robot.n1 + vm.robot.n2;

      if(answer == value) {
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
        page1: false,
        page2: false
      },
      robot:{
        n1:'',
        n2:''
      },
      //display: false, 
      //message: '',
      register1:{
        nombres:'',
        telefono:'',
        tipo_documento: 'Dni',
        documento:'',
        correo:'',
        terminos: ''
      },
      register2:{
        nombres:'',
        beneficio: 'movil',
        telefono:'',
        documento:'',
        autorizar: ''
      },
      ubigeo: {
        data:{
          departaments:[],
          provinces:[],
          districts:[]  
        },
        selected:{
          departament: '3926',
          province: '3927',
          district: '3928'
        }
      }
    }
  },
  /*created: function(){
    const self = this;

    self.randomNumbers();

    axios.all([
      axios.get(self.$path+'json/departamentos.json'),
      axios.get(self.$path+'json/provincias.json'),
      axios.get(self.$path+'json/distritos.json')
      ////axios.get('js/json/departamentos.json'),
      ////axios.get('js/json/provincias.json'),
      ////axios.get('js/json/distritos.json')
    ])
    .then(axios.spread(function (resp1,resp2,resp3) {

      self.ubigeo.data.departaments = resp1.data;
      self.ubigeo.data.provinces = resp2.data;
      self.ubigeo.data.districts = resp3.data;

    }))
    .catch(function (error) {
      console.log("error principal");
      console.dir(error);
    });
    
  },*/
  /*computed: { 
    formValidated() { 
      return Object.keys(this.fields).some(key => this.fields[key].validated) && Object.keys(this.fields).some(key => this.fields[key].valid); 
    } 
  },*/
  /*computed: {
    isFormValid: function() {
      return !Object.keys(this.fields).some(key => this.fields[key].invalid);
    }
  },*/
  computed: {
    isCompleted1: function () {
      return this.register1.nombres && this.register1.telefono && this.register1.documento && this.register1.tipo_documento && this.register1.terminos;
    }
  },
  mounted: function(){
    const self = this;

    //console.log("errors",self.$validator.validateAll('form_concurse1'));

    /*preguntas frecuentes*/
    /*var questions = Array.apply(null, document.querySelectorAll('.questions__list ul li h3'));
    questions.filter(function (element, index) {
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

    var considerations = Array.apply(null, document.querySelectorAll('.considerations__subtitle'));
    considerations.filter(function (element, index) {
      element.addEventListener("click", function(event){ 
        var buttonClass = this.classList;

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

    });*/


    
  },
  beforeDestroy: function() {
    //$('#countdown').countdown('stop');
  },
  methods:{
    showConsideration: function(option){

      var position = $(option).offset().top - 100;

      $("body, html").animate({
        scrollTop: position
      }  );
      
      var element = document.querySelector(option)

      if(element.classList.contains("active")){
        element.classList.remove("active");
      }else{
        element.classList.add("active");
      }

 
      var panel = element.nextElementSibling;

      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 

    },
    showModal: function(active){
      this.modal.show = true;

      if(active == "active1"){
        this.modal.page1 = true;
        this.modal.page2 = false;
      }else if(active == "active2"){
        this.modal.page2 = true;
        this.modal.page1 = false;
      }
      document.querySelector("body").style.overflow = 'hidden';
    },
    closeModal: function(){
      this.modal.show = false;
      document.querySelector("body").style.overflow = 'auto';
    },
    randomNumbers: function(){
      const self = this;

      self.robot.n1 = Math.floor(Math.random() * 10) + 1;
      self.robot.n2 = Math.floor(Math.random() * 10) + 1;

    },
    validate: function(scope) {
      const self = this;

      /*self.showModal();

      return;*/

      self.$validator.validateAll(scope).then(function(result) {
        if (result) {

          /*if(scope == "form_concurse1"){
            var envio = _.cloneDeep(self.register1);
          }else if(scope == "form_concurse2"){
            var envio = _.cloneDeep(self.register2);
          }*/

          var envio = _.cloneDeep(self.register1);

          /*console.log("enviado el resgitro", envio);
          self.showModal('active1');

          return;*/

          console.log("SEND RESULT APP.CORE.Path.register",APP.CORE.Path.register);
          console.log("SEND RESULT envio",envio);

          axios.post(APP.CORE.Path.register, envio).then(function(response){

            console.log("response",response);

            if(response.data.status == true && response.data.info == 'ok'){
              //self.display = response.data.status;
              //self.message = 'Gracias por participar';

              self.register1.nombres = '';
              self.register1.telefono = '';
              self.register1.tipo_documento = '';
              self.register1.documento = '';
              self.register1.correo = '';
              self.register1.terminos = '';

              /*if(scope == "form_concurse1"){
                self.register1.nombres = '';
                self.register1.beneficio = 'gigas';
                self.register1.telefono = '';
                self.register1.documento = '';
                self.register1.terminos = '';
              }else if(scope == "form_concurse2"){
                self.register2.nombres = '';
                self.register2.beneficio = 'movil';
                self.register2.telefono = '';
                self.register2.documento = '';
                self.register2.terminos = '';
              }*/

              self.$validator.pause();

              self.$nextTick(function() {
                self.$validator.reset();
                self.$validator.errors.clear();
                self.$validator.resume();
              })

              
              //self.register.genero = 'Hombre';
              
              //self.register.tipo_documento = 'Dni';
              
              //self.register.departamento = 'Lima';
              //self.register.provincia = 'Lima';
              //self.register.distrito = 'Cercado de Lima';
              //self.register.direccion = '';
              //self.register.terminos = '';
              

              //self.ubigeo.selected.departament = '3926';
              //self.ubigeo.selected.province = '3927';
              //self.ubigeo.selected.district = '3928';

              self.showModal('active1');

            }else if(response.data.status == false && response.data.info == 'dni'){
              APP.CORE.Util.notificacion(0, "tc", "", '• ' + 'El Dni ya ha sido registrado', 4000);
            }else{
              APP.CORE.Util.notificacion(0, "tc", "Error:", '• ' + response.data.info, 4000);
            }

          }, function(error){
            APP.CORE.Util.notificacion(0, "tc", "Error:", '• ' + error, 4000);
          });

          return;
        }

        //alert('Correct them errors!');
      }).catch(function(error){

        console.log("ERROR RESULT",error);
        APP.CORE.Util.notificacion(0, "tc", "Error:", '• ' + error, 4000);
      });



      /*self.$validator.validateAll(scope);

      if (self.errors.any(scope)) {
        //alert('error');
      }else{

        var envio = _.cloneDeep(self.register);

        axios.post(CORE.Path.register, envio).then(function(response){

          self.display = response.data.status;
          self.message = 'Gracias por participar';

        }, function(error){

          self.display = response.data.status;
          self.message = 'Ups, hubo un error';

        });
      }*/
    },
    selectDepartaments: function(){
      const self = this;

      return self.ubigeo.data.departaments.filter(function(item){

        if(item.id_ubigeo == '3926'){
          return item;
        }
        
      });

    },
    selectProvinces: function(id){
      const self = this;

      if(self.ubigeo.data.provinces[id]){
        return self.ubigeo.data.provinces[id].filter(function(item){

          if(item.id_ubigeo == '3927' || item.id_ubigeo == '3285'){
            return item;
          }
          
        });
      }

    },
    selectDistricts: function(id){
      const self = this;

      return self.ubigeo.data.districts[id];
    },
    onChangeDepartament: function(e){
      const self = this;

      if(e.target.options.selectedIndex > -1) {
        self.register.departamento = e.target.options[e.target.options.selectedIndex].dataset.value;
      }

      self.ubigeo.selected.province = '';
      self.ubigeo.selected.district = '';
    },
    onChangeProvince: function(e){
      const self = this;

      if(e.target.options.selectedIndex > -1) {
        self.register.provincia = e.target.options[e.target.options.selectedIndex].dataset.value;
      }

      self.ubigeo.selected.district = '';
    },
    onChangeDistrict: function(e){
      const self = this;

      if(e.target.options.selectedIndex > -1) {
        self.register.distrito = e.target.options[e.target.options.selectedIndex].dataset.value;
      }

    }
  }
}).$mount('#app');


var main = (function(APP, win, $, undefined) {
  "use strict";

  var st = {
    questions: '.questions__list ul li h3',
    considerations: '.considerations__subtitle',
    menu: '.menu__list a',
    tab: '.page1 .page1__tab',
    query: ['2servicios','1servicios']
  };

  var dom = {};

  var page;

  var catchDom = function() {

    dom.questions = Array.apply(null, document.querySelectorAll(st.questions));
    dom.considerations = Array.apply(null, document.querySelectorAll(st.considerations));

    dom.menu = Array.apply(null, document.querySelectorAll(st.menu));
    dom.tab = Array.apply(null, document.querySelectorAll(st.tab));

  };

  var suscribeEvents = function() {

    /*win.addEventListener("hashchange", function(e){
      console.log("hashchange",e);
    }, false);*/

    win.addEventListener('resize', events.eResize);

    dom.questions.filter(function (element, index) {
      element.addEventListener("click", events.eOpenQuestions);
    })

    dom.considerations.filter(function (element, index) {
      element.addEventListener("click", events.eOpenConsiderations);
    })

    dom.menu.filter(function (element, index) {
      element.addEventListener("click", events.eTabs.bind(this, index));
    });

    dom.tab[1].classList.remove("active");

  };

  var plugins = {
    slick: function(){
      /*dom.slick1 = $(st.list1).slick({
        dots: false,
        slidesToShow: 1,
        responsive: [
          {
              breakpoint: 9999,
              settings: "unslick"
          }, 
          {

            breakpoint: 376,
            settings: {
              slidesToShow: 1,
              arrows: true,
              dots: false
            }

          }
        ]
      });*/

      /*dom.slick2 = $(st.list2).slick({
        dots: false,
        slidesToShow: 1,
        responsive: [
          {
              breakpoint: 9999,
              settings: "unslick"
          }, 
          {

            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              arrows: true,
              dots: false,
              infinite: false
            }

          }
        ]
      });*/

      /*dom.slick3 = $(st.list3).slick({
        dots: false,
        slidesToShow: 1,
        responsive: [
          {
              breakpoint: 9999,
              settings: "unslick"
          }, 
          {

            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              arrows: true,
              dots: false,
              infinite: false
            }

          }
        ]
      });*/

    }
  }

  var methods = {
    mValidateQueryParameter: function(){

      var query = methods.mGetUrlParameter('tab');

      var f = 0;

      if(!query) {
        methods.mChooseTab(null);

      } else {
        methods.mChooseTab(query);
      }

    },
    mChooseTab: function(query){
      var choose = (query == "2servicios")? 0 : 1;

      if(query == null || query == ''){
        methods.mTabsSelected(0);
      }else{
        methods.mTabsSelected(choose);
      }
    },
    mGetUrlParameter: function(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },
    updateQueryStringParam: function (key, value) {

      var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
          urlQueryString = document.location.search,
          newParam = key + '=' + value,
          params = '?' + newParam;

      // If the "search" string exists, then build params from it
      if (urlQueryString) {
          var updateRegex = new RegExp('([\?&])' + key + '[^&]*');
          var removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

          if( typeof value == 'undefined' || value == null || value == '' ) { // Remove param if value is empty
              params = urlQueryString.replace(removeRegex, "$1");
              params = params.replace( /[&;]$/, "" );

          } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it
              params = urlQueryString.replace(updateRegex, "$1" + newParam);

          } else { // Otherwise, add it to end of query string
              params = urlQueryString + '&' + newParam;
          }
      }

      // no parameter was set so we don't need the question mark
      params = params == '?' ? '' : params;

      window.history.replaceState({}, "", baseUrl + params);
    },
    mTabsSelected: function(index){
      dom.menu.forEach(function(item, i) {
        dom.menu[i].classList.remove('active');
        dom.tab[i].classList.remove('active');
        if(page == "page2"){
          dom.box[i].classList.remove('active');
        }
      });

      dom.menu[index].classList.add('active');
      dom.tab[index].classList.add('active');

      methods.updateQueryStringParam('tab',st.query[index]);
      
      //dom.slick1.slick('setPosition');
      //dom.slick2.slick('setPosition');
      //dom.slick3.slick('setPosition');
      
    }
  }

  var events = {
    eTabs: function(index, e){
      console.log("index",index);
      methods.mTabsSelected(index);
    },
    eResize: function(e){
      //dom.slick1.slick('resize');
      ///*dom.slick2.slick('resize');
      //dom.slick3.slick('resize');
      //dom.slick1.slick('setPosition');
    },
    eOpenQuestions: function(e){

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

    },
    eOpenConsiderations: function(e){

      var buttonClass = this.classList;

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
    }
  };

  return {
    init: function(x){
      page = x;

      //catchDom();
      //suscribeEvents();

      /*if(page == "page1"){
        plugins.slick();
        plugins.viewmore();
      }*/

      //methods.mValidateQueryParameter();

    }
  }

})(APP, window, jQuery);