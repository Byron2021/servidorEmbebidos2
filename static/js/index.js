
  var btn=document.getElementById('btn'), contador=0;
  function cambio()
  { if (contador==0)
      {
      message = new Paho.MQTT.Message("LED ENCENDIDO");
      message.destinationName = "byronzeto@gmail.com/led1";
      client.send(message);
      contador=1;
      }
    else
      {
      message = new Paho.MQTT.Message("LED APAGADO");
      message.destinationName = "byronzeto@gmail.com/led1";
      client.send(message);
      contador=0;
      }
  
  }


  function historial()
      {
      client.subscribe("byronzeto@gmail.com/led2");
      message = new Paho.MQTT.Message("LEER");
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
	  if(message.payloadString==='LED ENCENDIDO'){
		  document.getElementById("sensor").innerHTML=message.payloadString;
		  document.getElementById("imagen").src="http://www.clker.com/cliparts/M/h/R/9/8/H/red-led-on-md.png";
		  document.getElementById("btn").innerHTML="Apagar";
	  } else if(message.payloadString==='LED APAGADO'){
		  document.getElementById("sensor").innerHTML=message.payloadString;
		  document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";
		  document.getElementById("btn").innerHTML="Encender";
	  }
	   	  
	  
  }
