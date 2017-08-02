<?php
	include 'mySQL.php';
	require 'mySQL.php';
?>
<?php 

$vetor   = array();
$the_request = &$_GET;
$sql = "SELECT * FROM saeapp_caracteristica ORDER BY titulo";
$result = $con->query($sql);
while($row=$result->fetch_assoc()){
	$vetor[] = $row;
}
echo json_encode($vetor);
?>