  var btn=document.getElementById('btn'), contador=0, contador2=0;
  function cambio()
  { if (contador==0)
      {
      message = new Paho.MQTT.Message("LED 1 ENCENDIDO");
      message.destinationName = "byronzeto@gmail.com/led1";
      client.send(message);
      contador=1;
      }
    else
      {
      message = new Paho.MQTT.Message("LED 1 APAGADO");
      message.destinationName = "byronzeto@gmail.com/led1";
      client.send(message);
      contador=0;
      }
  
  }

  
  function cambio2()
  { if (contador2==0)
      {
      message = new Paho.MQTT.Message("LED 2 ENCENDIDO");
      message.destinationName = "byronzeto@gmail.com/led1";
      client.send(message);
      contador2=1;
      }
    else
      {
      message = new Paho.MQTT.Message("LED 2 APAGADO");
      message.destinationName = "byronzeto@gmail.com/led1";
      client.send(message);
      contador2=0;
      }
  
  }

  function registro()
      {
      client.subscribe("byronzeto@gmail.com/led2");
      message = new Paho.MQTT.Message("HISTORIAL");
      message.destinationName = "byronzeto@gmail.com/led1";
      client.send(message);
      }


// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "byronzeto@gmail.com",
    password: "rocklml27",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("byronzeto@gmail.com/led");	  
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "byronzeto@gmail.com/led1";
    client.send(message);

	  


	
  }

  function doFail(e){
    console.log(e);	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
var register;
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	if (message.destinationName=="byronzeto@gmail.com/led2"){
		document.getElementById("cuadro").innerHTML=message.payloadString;
	  }
	  if(message.payloadString==='Led 1 Encendido'){
		  document.getElementById("sensor").innerHTML=message.payloadString;
		  document.getElementById("imagen").src="http://www.clker.com/cliparts/M/h/R/9/8/H/red-led-on-md.png";
		  document.getElementById("btn").innerHTML="LED 1 APAGADO";
	  } else if(message.payloadString==='Led 1 Apagado'){
		  document.getElementById("sensor").innerHTML=message.payloadString;
		  document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";
		  document.getElementById("btn").innerHTML="LED 1 ENCENDIDO";
	  }
	 
	  if(message.payloadString==='Led 2 On'){
		  document.getElementById("sensor2").innerHTML="Led 1 Encendido";
		  document.getElementById("imagen2").src="http://www.clker.com/cliparts/0/8/h/5/r/v/light-blue-2-led-circle-md.png";
	  	  document.getElementById("btn2").innerHTML="LED 2 APAGADO";
	  }else if(message.payloadString==='Led 2 Off'){
		  document.getElementById("sensor2").innerHTML="Led 1 Apagado";
		  document.getElementById("imagen2").src="http://www.clker.com/cliparts/P/2/n/w/N/v/dark-dark-2-blue-led-circle-md.png";
		  document.getElementById("btn2").innerHTML="LED 2 ENCENDIDO";
	  }

	  	  
	  
  }
