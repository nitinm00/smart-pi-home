<?php

$result = shell_exec("gpio read 4");

echo $result;
exit;
?>
