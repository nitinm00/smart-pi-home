<?php

$result = shell_exec("echo '' | sudo -S python3 /var/www/SmartPiHome/scripts/py/toggle_fan.py | gpio read 5");

echo $result;
exit;
?>
