	
		function myMap()
		{
		  myCenter=new google.maps.LatLng(59.314393, 18.047077);
		  var mapOptions= {
				center:myCenter,
				zoom:15, scrollwheel: true, draggable: true,
				mapTypeId:google.maps.MapTypeId.HYBRID
		  };
		  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

		  var marker = new google.maps.Marker({
				position: myCenter,
		  });
		  marker.setMap(map);
		  }