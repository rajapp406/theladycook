<?php 
header('Content-type: image/svg+xml');
$color = (preg_match("/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/",$_GET["fill"]) ? $_GET["fill"] : "03a9f4");
echo '<svg fill="#'.$color.'" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>';
?>