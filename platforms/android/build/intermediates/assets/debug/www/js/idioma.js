angular.module('starter.controllers')
.controller('Idioma', function($scope,Message,$rootScope) {
  // Might use a resource here that returns a JSON array
	
  // Some fake testing data
  var idiomas = {
  	es:{
		General:{
			0:"Virtual Guardian",
			1:"Cargando...",
			2:"Aceptar",
			3:"Conexión a internet",
			4:"No hay conexión a internet.",
			5:"Actualizar",
			6:"Cancelar",
			7:"Error en conexión al servidor",
			8:"Eliminando...",
			9:"Aceptando...",
			10:"Guardando...",
			11:"Cerrar",
			12:"Guardar",
			13:"Todos",
			14:"Predeterminado",
			15:"Seleccionados",
			
		
			
		},
		Login:{
			1:"Iniciar Sesión",
			2:"Correo electrónico",
			3:"Contraseña",
			4:"Entrar",
			5:"Crear cuenta nueva",
			6:"¿Olvidaste tu contraseña?",
			7:"El correo electrónico y la contraseña que ingresaste no coinciden con nuestros registros.\nPor favor, revisa e inténtalo de nuevo.",
			8:"Iniciando sesión...",
			9:"Cerrando sesión...",
			10:"¿Desea cerrar su sesión?",
			11:"Alguien mas ha iniciado sesión con este usuario.<br>Inicie sesión de nuevo",
		},
		Registro:{
			1:"Registro",
			2:"Virtual Guardian no solicita información personal con el objetivo de brindarte la mayor protección y confidencialidad. Nuestro sistema de prevención de riesgos utiliza un algoritmo que no necesita información personal para funcionar.",
			3:"Correo Elecrónico",
			4:"Contraseña",
			5:"Repetir Contraseña",
			6:"Leer aviso de privacidad",
			7:"Continuar",
			8:"Regresar",
			9:"El código proporcionado no es válido.",
			10:"El correo electrónico proporcionado no es válido",
			11:"La contraseña debe de ser de 8 dígitos como mínimo y contener al menos un número y una letra.",
			12:"Las contraseñas no coinciden.",
			13:'Hemos enviado a tu correo electrónico un mensaje con el código de verificación, introdúcelo en el siguiente campo para completar tu registro. Revisa tu papelera de "correos no deseados".',
			14:"Código",
			15:"El correo electrónico ya esta registrado",
			16:"Se ha producido un error inesperado, intente más tarde",
			17:"El código proporcionado es incorrecto, verifica tu correo electrónico",
			18:"Enviar código de nuevo",
			19:"El código de verificación ha sido enviado nuevamente a tu correo electrónico",
			20:"Bienvenido a",
			21:"Entrar",
			22:"Ahora puedes mantenerte informado en todo momento.",
			23:"Proporciona tu correo electrónico registrado para enviarte un mensaje con las instrucciones necesarias para recuperar tu contraseña.",
			24:"Enviar correo",
			25:"No has proporcionado tu correo electrónico.",
			26:"Recuperar contraseña",
			27:"El correo proporcionado no esta registrado en Virtual Guardian",
			28:"El correo de recuperación se ha enviado correctamente, sigue las instrucciones para reestablecer tu contraseña.",
			29:"Si tienes algún código de promocion, ingrésalo ahora para hacerlo válido.",
			30:"Código de promoción",
			31:"El código de promoción proporcionado ya se ha utilizado.",
			32:"Verificando código de promoción...",
			33:"Creando cuenta...",
			34:"Completando registro...",
			35:"El código proporcionado ha activado una suscripción TIPO por TIEMPO mes",
			36:"Tu registro ha caducado, es necesario que realices el registro de nuevo.",
			37:"Ocurrio un problema mientras iniciaba tu sesión.",
			38:"No se ha podido enviar el correo electronico, intenta de nuevo."
		},
		Mapa:{
			1:"Radio: ",
			2:"Buscador de eventos",
			3:"Escribe para buscar lugares",
			4:"No hay resultados para",
			5:"Mostrar los eventos de los ultimos:",
			6:"La aplicación no tiene cobertura en esta zona",
			7:"Buscar lugares",
			8:"Actualizar ubicación",
			9:"Vigilar auto",
			10:"Aplicar filtros",
			11:"Cambiar periodo",
			
			
		},
		Periodos:{
			7:"7 días",
			30:"30 días",
			180:"6 meses",
			365:"12 meses"
		},
		Filtros:{
			1:"Filtros de eventos",
			2:"Fechas",
			3:"Periodo",
			4:"Fecha inicial",
			5:"Fecha final",
			6:"Periodo",
			7:"Estados",
			8:"Eventos",
			9:"Seleccionar todo",
			10:"Borrar selección",
			11:"No ha seleccionado ningun estado.",
			12:"No ha seleccionado ningun tipo de evento."
		},
		Asuntos:{
			1:"Asalto",
			2:"Balacera",
			3:"Ejecución",
			4:"Explosión",
			5:"Hallazgo",
			6:"Movilización",
			7:"Persecución",
			8:"Bloqueo",
			9:"Robo",
			10:"Robo mercancía",
		},
		AsuntosIconos:{
			1:"goo.gl/gWqqNE",
			2:"goo.gl/kGRWDu",
			3:"goo.gl/j6HJac",
			4:"goo.gl/njD0ya",
			5:"goo.gl/8CMCTD",
			6:"goo.gl/fzeOtC",
			7:"goo.gl/knaWSX",
			8:"goo.gl/8OCcba",
			9:"goo.gl/hF14bV",
			10:"goo.gl/UYIDaC",

		},
		Cuenta:{
			1:"Mi cuenta",
			2:"Usuario",
			3:"Tipo de suscripción",
			4:"Cambiar contraseña",
			5:"Modificar Suscripción",
			6:"Ya cuentas con una suscripción, para adquirir una diferente necesitas cancelar tu suscripción actual.",
			7:"Suscripciones",
			8:"Comprar suscripción",
			9:"Código de promoción",
			10:"Ingresa el código",
			11:"Activar",
			12:"Suscripción familiar",
			13:"Prueba gratuita",
			14:"La prueba termina en ",
			15:" días",
			16:"Suscripción de promoción",
			17:"Tu contraseña se ha cambiado con éxito.",
			18:"No ha sido posible cambiar tu contraseña, intenta más tarde.",
			19:"Tu suscripción seguira funcionando por tiempo indefinido.",
			20:"La suscripcion termina en ",
			21:"Agregar cuenta",
			23:"Introduce el correo electrónico del usuario que deseas agregar a tu Suscripción Familiar",
			24:"Agregando cuenta...",
			25:" se ha vinculado correctamente a tu suscripción. El usuario vinculado recibirá una notificación para aceptar tu solicitud.",
			26:" ya esta vinculado en tu suscripción.",
			
		},
		Info:{
			1:"Fecha: ",
			2:"Hora local: ",
			3:"Dirección: ",
			4:"Error al cargar la información",
			5:"Escala Virtual",
			6:"Viaja con Uber",
			7:"Hora centro: ",
		},
		Llamada:{
			1:"llamada entrante",
			2:"llamada saliente",
			3:["Conectando llamada...","Esperando respuesta...","...","Llamada terminada","Error en la llamada"],
			6:"Llamada",
			7:"No se pudo contactar a ",
			9:"Se ha terminado la llamada.",
            11:" ha terminado la llamada.",
            12:"Usuario no disponible.",
            13:" esta ocupado.",
			14:"Llamar a "
		},
		Menu:{
			1:"Suscripción",
			2:"Ajustes de cuenta",
			3:"Ajustes de notificaciones",
			4:"Iconos",
			5:"Ayuda",
			6:"Acerca de",
			7:"Cerrar sesión"
		},
		Ajustes:{
			1:"Notificaciones",
			2:"Información",
			3:"Virtual Guardian es una marca comercial de Virtualapp S.A. de C.V. Todos los derechos reservados.",
			4:"Virtual Guardian nunca guardará tu ubicación GPS, nuestros algoritmos de prevención de riesgos están creados para que solo tu teléfono conozca tu ubicación y esta nunca se envíe por internet a nuestros servidores o a otros usuarios, así que despreocúpate, nuestro objetivo es que estés protegido.",
			5:"Versión",
			6:"Términos y condiciones",
			7:"Aviso de privacidad",
			8:"Tiempo de notificacion",
			9:"Alerta de contactos",
			10:"Estados de interés",
			11:"Asuntos de interés",
			12:"Tono de notificación",
			13:"Notificacion",
			14:"Alerta",
			15:"Ajustes generales",
			
		},
		Iconos:[
				{Nombre:"Asalto",
				Descripcion:"Ataque con violencia (arma de fuego y/o arma blanca) a una o varias personas así como a establecimiento.",
				Imagen:"notificaciones/1"
				},
				{Nombre:"Balacera",
				Descripcion:"Intercambio de detonaciones de arma de fuego en contra de una o varias personas, o a establecimiento.",
				Imagen:"notificaciones/2"
				},
				{Nombre:"Ejecución",
				Descripcion:"Situación en la que le quitan la vida a una o varias personas, con arma de fuego o arma blanca.",
				Imagen:"notificaciones/3"
				},
				{Nombre:"Explosión",
				Descripcion:"Detonación de artefacto explosivo.",
				Imagen:"notificaciones/4"
				},
				{Nombre:"Hallazgo",
				Descripcion:"Descubrimiento de uno o varios cuerpos sin vida.",
				Imagen:"notificaciones/5"
				},
				{Nombre:"Movilización",
				Descripcion:"Movimiento de elementos de seguridad tras sucesos delictivos.",
				Imagen:"notificaciones/6"
				},
				{Nombre:"Persecución",
				Descripcion:"Acto de perseguir a delincuentes tras hecho delictivo.",
				Imagen:"notificaciones/7"
				},
				{Nombre:"Robo",
				Descripcion:"Robo a establecimientos (casa, restaurantes, locales, etc) en donde no hubo violencia y no existen testigos de los hechos.",
				Imagen:"notificaciones/8"
				},
				{Nombre:"Robo mercancía",
				Descripcion:"Robo a vehículo que transporta mercancía en donde no hubo violencia y no existen testigos de los hechos.",
				Imagen:"notificaciones/9"
				},
				{Nombre:"Tips Virtual Guardian",
				Descripcion:"Icono utilizado para representar los consejos que Virtual Guardian te enviará para ayudarte a estar siempre protegido.",
				Imagen:"notificaciones/tip"
				},
				{Nombre:"Alerta personal",
				Descripcion:"El evento notificado está cerca de ti, toma tus precauciones para evitar el peligro.",
				Imagen:"notificaciones/ap"
				},
				{Nombre:"Alerta personas",
				Descripcion:"El evento notificado está cerca de una de tus personas, asegúrate que se encuentre bien.",
				Imagen:"notificaciones/aps"
				},
				{Nombre:"Alerta auto",
				Descripcion:"El evento notificado está cerca de tu auto, toma tus precauciones para evitar el peligro.",
				Imagen:"notificaciones/aa"
				},
				{Nombre:"Solicitud de personas",
				Descripcion:"Un usuario de Virtual Guardian te ha enviado o ha aceptado una solicitud de personas.",
				Imagen:"notificaciones/sp"
				},
				{Nombre:"Mapa",
				Descripcion:"Sección principal de la aplicación que te muestra el mapa de México con los eventos reportados.",
				Imagen:"barra/mapa"
				},
				{Nombre:"Notificaciónes",
				Descripcion:"Sección de la aplicación que te permite revisar tus notificaciones recientes.",
				Imagen:"barra/notificaciones"
				},
				{Nombre:"Personas",
				Descripcion:"Sección de la aplicación que te permite revisar tu lista de personas, agregar usuarios o llamar por internet.",
				Imagen:"barra/personas"
				},
				{Nombre:"Reportes ciudadanos",
				Descripcion:"Sección de la aplicación que te permite revisar tu lista de personas, agregar usuarios o llamar por internet.",
				Imagen:"barra/reportes"
				},
				{Nombre:"Auto",
				Descripcion:"Sección de la aplicación que te permite ubicar tu auto y estar informado si algo sucede cerca de él.",
				Imagen:"mapa/controls/carro"
				},
				{Nombre:"Menú",
				Descripcion:"En el encontrarás opciones para personalizar tu cuenta y revisar tu suscripción.",
				Imagen:"mapa/menu"
				},
				{Nombre:"Ubicación",
				Descripcion:"Este icono representa tu ubicación actual en el mapa.",
				Imagen:"mapa/ubicacion"
				},
				{Nombre:"Buscar Lugares",
				Descripcion:"Para buscar lugares comerciales en el mapa y revisar sus alrededores utiliza esta herramienta.",
				Imagen:"mapa/controls/buscar"
				},
				{Nombre:"Actualizar ubicación",
				Descripcion:"Para ajustar el mapa en tu ubicación actual, da clic en este icono.",
				Imagen:"mapa/controls/ubicacion"
				},
				{Nombre:"Periodo de búsqueda",
				Descripcion:"En esta opcion puedes cambiar la antiguedad de los eventos que aparecen en el mapa.",
				Imagen:"mapa/controls/periodo"
				},
				{Nombre:"Filtros",
				Descripcion:"En esta opción puedes realizar búsquedas específicas por fechas, estados o tipos de evento.",
				Imagen:"mapa/controls/filtro"
				}
				],
		Notificaciones:{
			1:" en ",
			2:"No hay notificaciones",
			3:" a ",
			4:" de ti.",
			5:" de ",
			6:" de tu auto.",
			7:"Solicitud de contacto.",
			8:"Código de promoción",
			9:"Tips Virtual Guardian",
			10:"Suscripción Familiar",
			11:" quiere agregarte a su lista de contactos.",
			12:" aceptó tu solicitud de contactos.",
			13:" se registró con tu código de promoción.",
			14:"Descubre formas nuevas de prevenir el peligro, da clic para ver nuestra recomendación.",
			15:" quiere agregarte a su suscripción familiar.",
			16:"No hay notificaciones anteriores.",
			17:"Eliminar notificación",
			18:"Eliminar notificación",
			19:"¿Deseas eliminar esta notificación?",
			20:"Ver evento en mapa",
			21:"Directorio de servicios",
			22:"Ver lista de contactos",
			23:"Notificaciones",
			24:"a las"
			
		},
		Contactos:{
			1:"Agregar contacto",
			2:"Introduce el correo electrónico del contacto que deseas agregar",
			3:"No puedes agregar tu correo electrónico.",
			4:" se han agregado correctamente a tus contactos.",
			5:" no es miembro de Virtual Guardian.",
			6:" ya esta en tu lista de contactos.",
			7:" no ha aceptado tu solicitud de contactos.",
			8:"Activo",
			9:"Solicitud enviada",
			10:"Pendiente de aceptar",
			11:"Eliminar contacto",
			12:"¿Estás seguro de que deseas eliminar de tu lista de contactos a ",
			13:"Aceptar solicitud",
			14:"¿Deseas aceptar en tu lista de contactos a ",
			15:" se ha eliminado de tu lista de contactos",
			16:" se ha aceptado en tu lista de contactos",
			17:"No has agregado contactos",
			18:"Contactos",
			19:"¿Deseas eliminar la solicitud de ",
			20:"Cancelar solicitud",
			21:"Agregando contacto...",
			
			
		},
		Reportes:{
			1:"Reportar evento",
			2:"Enviar",
			3:"Los siguientes reportes fueron generados por usuarios como tú que buscan crear una comunidad segura.",
			4:"No hay reportes recientes",
			5:"No hay más reportes recientes.",
			6:"Reportes",
			7:"Apoyar reporte",
			8:"Reportar como falso",
			9:"Hace ",
			10:" min",
			11:" h",
			12:"¿Qué sucedió?",
			13:"¿Dónde sucedió?",
			14:"¿Cuándo sucedió?",
			15:"Ahora",
			16:"Generando Reporte...",
			17:"El reporte se ha generado satisfactoriamente, nuestro equipo lo revisará y se publicará en cuanto se confirme su veracidad.",
			18:"Ocurrió un error mientras se generaba tu reporte, intenta de nuevo."
			
		},
		Auto:{
			1:"Arrastra el marcador hasta la ubicación donde estacionaste tu auto.",
			2:"Inicial vigilancia",
			3:"Análisis",
			4:"Mi auto",
			5:"Detener vigilacia",
			6:"Editar ubicación",
			7:"Revisar la zona",
			8:"Analizando zona...",
			9:"No se pudo realizar el análisis de seguridad. <p>¿Deseas iniciar la vigilancia?</p>",
			10:"No hay eventos registrados en esta zona."
		},
		//editar tambien en /nodeServer/config/notification
		Estados:{
			1:"Aguascalientes",
			2:"Baja California",
			3:"Baja California Sur",
			4:"Campeche",
			5:"Coahuila",
			6:"Colima",
			7:"Chiapas",
			8:"Chihuahua",
			9:"Distrito Federal",
			10:"Durango",
			11:"Guanajuato",
			12:"Guerrero",
			13:"Hidalgo",
			14:"Jalisco",
			15:"México",
			16:"Michoacán",
			17:"Morelos",
			18:"Nayarit",
			19:"Nuevo León",
			20:"Oaxaca",
			21:"Puebla",
			22:"Querétaro",
			23:"Quintana Roo",
			24:"San Luis Potosí",
			25:"Sinaloa",
			26:"Sonora",
			27:"Tabasco",
			28:"Tamaulipas",
			29:"Tlaxcala",
			30:"Veracruz",
			31:"Yucatán",
			32:"Zacatecas"
		},
		Meses:{
			1:"Enero",
			2:"Febrero",
			3:"Marzo",
			4:"Abril",
			5:"Mayo",
			6:"Junio",
			7:"Julio",
			8:"Agosto",
			9:"Septiembre",
			10:"Octubre",
			11:"Noviembre",
			12:"Diciembre"
			
		},
		Directorio:{
			1:"Directorio de servicios"
		},
		Semana:[
			"Domingo",
			"Lunes",
			"Martes",
			"Miercoles",
			"Jueves",
			"Viernes",
			"Sabado"
			
		],
		Tiempos:[
			{titulo:"En este momento",valor:0},
			{titulo:"0 - 15 min.",valor:15},
			{titulo:"15 - 30 min.",valor:30},
			{titulo:"30 min. -1 h.",valor:60}
		],
		TiempoNotificacion:[
			{titulo:"15 min.",valor:15},
			{titulo:"30 min.",valor:30},
			{titulo:"1 hora.",valor:60},
			{titulo:"2 horas.",valor:120}
		],
		//editar tambien en /nodeServer/config/notification
		Palabras:[
			"del",
			"la",
			"al",
			"de",
			"por",
			"y",
			"a",
			"e"]
		
	},
	en:{
		Login:{
			1:"Sign In",
			2:"Email",
			3:"Password",
			4:"Sign In",
			5:"Create new account",
			6:"Forgot your password?",
			7:"E-mail or password are incorrect.\nPlease check and try again.",
			8:"Logging...",
			9:"Signing off...",
			10:"Do you want to log out?"
		}
	}
  }
  $rootScope.idioma=idiomas.es;
  if(navigator.globalization)
	navigator.globalization.getPreferredLanguage(function (language) {
			var l=language.value.split("-")
			//if(l[0]=="EN" || l[0]=="en" || l[0]=="En")$rootScope.idioma=idiomas.en;
   	})
	Message.setDictionary($rootScope.idioma);
	
})