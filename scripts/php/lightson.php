<?php
//if($_POST['action'] == 'turn on') {
//	shell_exec("echo '' | sudo -S python3 /var/www/SmartPiHome/scripts/toggle_lights.py");
//	exit;
//}
shell_exec("echo '' | sudo -S python3 /var/www/SmartPiHome/scripts/lightson.py");
header("Location: index.php");
exit;
// $lightson = escapeshellcmd('/var/www/SmartPiHome/scripts/lightson.py');
// shell_exec($lightson);
// header("Location: index.html");
exit;
?>

