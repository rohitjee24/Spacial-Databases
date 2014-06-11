###  Assignment 2

````
<?php
$con=mysqli_connect("localhost","rmukherjee","Rohitjee24","rmukherjee");
// Check connectionssignment 3

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT Name FROM Planets WHERE Type = 'GAS';");

echo "<table border='1'>
<tr>
<th>Name</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['Name'] . "</td>";
 echo "</tr>";
 }

echo "</table>";

mysqli_close($con);
?>

``````
