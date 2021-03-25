//https://www.eclipse.org/paho/clients/js/
/*
function LED1_On() {
	
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
    	message = new Paho.MQTT.Message("ENCENDER");
    	message.destinationName = "cristian.manosalvas@unach.edu.ec/led1";
    	client.send(message);

}*/
/*
function LED1_Off(){
	//alert("led off");
	 console.log("led off");
	//document.getElementById("sensor").innerHTML="led off";
	message = new Paho.MQTT.Message("APAGAR");
	message.destinationName = "cristian.manosalvas@unach.edu.ec/led1";
	client.send(message);
}*/
  
  var btn=document.getElementById('btn'), contador=0;
  function cambio()
  { if (contador==0)
      {
      message = new Paho.MQTT.Message("ENCENDER");
      message.destinationName = "byronzeto@gmai.com/test1";
      client.send(message);
      contador=1;
      }
    else
      {
      message = new Paho.MQTT.Message("APAGAR");
      message.destinationName = "byronzeto@gmai.com/test1";
      client.send(message);
      contador=0;
      }
  
  }
