var APP = APP || {};

APP.CORE = (function (win, $, _, undefined) {
	"use strict";

	var debug = true;
	var dev = 1;

	var host = ["", "https://mediacontacts-app.com/claro/landings/registro_portal_empresarial/"];
	var register = ["https://mediacontacts-app.com/claro/landings/registro_portal_empresarial/process.php", "https://mediacontacts-app.com/claro/landings/registro_portal_empresarial/process.php"];

  return {
  	Path:{
  		register: register[dev],
  		host: host[dev]
  	},
  	Util:{
  		$:{
				html: $('html'),
				root: $('#root'),
				bloqueo: $('#bloqueo')
			},
			getUrlParameter: function(name, url) {

				if (!url) url = win.location.href;
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, " "));

		    /*name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		    var results = regex.exec(location.search);
		    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));*/
			},
			activarBloqueo: function(){
				this.$.bloqueo.show('fast');
				//alert("si activar");
			},
			desactivarBloqueo: function(){
				this.$.bloqueo.hide('fast');
				//alert("si desactivar");
			},
			notificacion: function (estado, pos, titulo, msg, tiempo) {
				var tipo = ["error", "success", "info", "warning"];
				var posicion = new Array();

				posicion["tr"] = "toast-top-right";
				posicion["br"] = "toast-bottom-right";
				posicion["bl"] = "toast-bottom-left";
				posicion["tl"] = "toast-top-left";
				posicion["tfw"] = "toast-top-full-width";
				posicion["bfw"] = "toast-bottom-full-width";
				posicion["tc"] = "toast-top-center";
				posicion["bc"] = "toast-bottom-center";

				toastr.options = {
					"closeButton": false,
					"debug": false,
					"newestOnTop": true,
					"progressBar": false,
					"positionClass": posicion[pos],
					"preventDuplicates": true,
					"onclick": null,
					"showDuration": "500",
					"hideDuration": "500",
					"timeOut": tiempo,
					"extendedTimeOut": "1000",
					"showEasing": "swing",
					"hideEasing": "linear",
					"showMethod": "fadeIn",
					"hideMethod": "fadeOut",
					"escapeHtml": true,
					"target": "body"
				}
				toastr[tipo[estado]](msg, titulo);
			}
  	}
  };

})(window, jQuery, _);
