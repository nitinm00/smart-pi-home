<?php
//if($_POST['action']) {
	//system("sudo python3 /var/www/SmartPiHome/scripts/lightsoff.py");
	//exit;
//}

echo 'from php file';
shell_exec("echo '' | sudo -S python3 /var/www/SmartPiHome/scripts/lightsoff.py");
header("Location: index.php");
exit;
// system("sudo python3 /var/www/SmartPiHome/scripts/lightsoff.py");
//$lightsoff = escapeshellcmd('/var/www/SmartPiHome/scripts/lightsoff.py');
//shell_exec($lightsoff); 
//header( "Location: index.html") ;
?>
