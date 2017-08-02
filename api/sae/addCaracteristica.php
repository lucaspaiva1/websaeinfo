<?php
include 'mySQL.php';
require 'mySQL.php';
?>
<?php

	$the_request = &$_POST;

	$postdata = file_get_contents("php://input");

	if (isset($postdata)) {
		$request = json_decode($postdata);
		
		$titulo		 = $request->titulo;
		$ocorrencias = $request->ocorrencias;
				
		if($titulo !== ""){
		
			$sql = "SELECT * FROM saeapp_caracteristica WHERE titulo = '$titulo'";
			$result = $con->query($sql);
			$numrow = $result->num_rows;
			
			if($numrow == 0) {
				$sql = "INSERT INTO saeapp_caracteristica (
					titulo,
					ocorrencias
				)
				VALUES (
					'$titulo',
					'$ocorrencias'
				)";
				
				$con->query($sql);
				echo json_encode(true); 
				
			} else {
				echo json_encode("existe"); 
			}
		} else {
			echo json_encode(false);
		}
	}
					
?>