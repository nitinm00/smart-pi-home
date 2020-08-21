<?php

$result = shell_exec("echo '' | sudo -S python3 /var/www/SmartPiHome/scripts/py/toggle_lights.py | gpio read 4");

echo $result;
exit;
?>

