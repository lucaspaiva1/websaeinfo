<?php
include 'mySQL.php';
require 'mySQL.php';
?>
<?php

$the_request = &$_POST;

$postdata = file_get_contents("php://input");

if (isset($postdata)){
    $request = json_decode($postdata);

    $id          = $request->id;
	$titulo      = $request->titulo;

    $sql = "SELECT * FROM saeapp_intervencao WHERE id = '$id'";

    $result = $con->query($sql);
    $numrow = $result->num_rows;

    if($numrow == 1){

        $sql = "UPDATE saeapp_intervencao set
		titulo='$titulo'
		WHERE id = '$id'";
        $result = $con->query($sql);

        echo json_encode(true);
    }else{
        echo json_encode("existe");
    }
}else{
    echo json_encode(false);
}
?>