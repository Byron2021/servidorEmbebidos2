 // Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "juantixi99@gmail.com",
    password: "1234",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    //client.subscribe("juantixi99@gmail.com/test");
    client.subscribe("juantixi99@gmail.com/test1");
    client.subscribe("juantixi99@gmail.com/test2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "juantixi99@gmail.com/test2";
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
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	//document.getElementById("sensor").innerHTML=message.payloadString; 
	
//nuevo
    if(message.destinationName=="juantixi99@gmail.com/test2"){
    document.getElementById("cuadro").innerHTML=message.payloadString;
    }
	if(message.payloadString==='1'){
		document.getElementById("sensor").innerHTML=message.payloadString;
		
		
	   }
	if(message.payloadString==='0'){
		document.getElementById("sensor").innerHTML=message.payloadString;
	}
	  
}	  
//fin nuevo
	//if(message.payloadString==='informacion'){
	//	document.getElementById("sensor").innerHTML=message.payloadString;	 
	//} 
	
	  
	  /*
	  //comando para poner el sensor desde esp32
	  document.getElementById("sensor").innerHTML=message.payloadString;
	  if(message.payloadString==='Encendido'){
		 document.getElementById("imagen").src="http://www.clker.com/cliparts/M/h/R/9/8/H/red-led-on-md.png";
	  } else if(message.payloadString==='Apagado'){
		 document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";
 		
	  }
	  if(message.payloadString==='Encendido'){
	  	document.getElementById("btn").innerHTML="Apagar";
	  } else if(message.payloadString==='Apagado'){
		document.getElementById("btn").innerHTML="Encender";
	  }
	  */
