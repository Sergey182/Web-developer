<?php
function upload() {
    if ($_FILES['files']['size'][0] == 0) {
        return false;
    } else {
        return $_FILES;
    }
}