<?php
	include 'mySQL.php';
	require 'mySQL.php';
?>
<?php 
$vetor = array();
if (isset($_GET["id"]) && $_GET["id"] !== ""){
	$id = $_GET["id"];
	$sql = "SELECT * FROM saeapp_caracteristica WHERE id = '$id'";
	$result = $con->query($sql);	
	$row = $result->fetch_assoc();
	echo json_encode($row);	
} else {
	$the_request = &$_GET;
	$sql = "SELECT * FROM saeapp_diagnostico ORDER BY titulo";
	$result = $con->query($sql);
	while($row=$result->fetch_assoc()){
		$vetor[] = $row;
	}
	echo json_encode($vetor);
}
?>