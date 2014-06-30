<?php
//Establish connection to database.
$db = new mysqli('localhost', '5443', '5443', '5443_SpatialData');

//If no connection, then kill page
if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}
?>