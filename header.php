<?php
/**
 * header.php
 * @package codejots
 */
?> <!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <title> Codejots : </title>
    <?php wp_head(); ?>

    <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
</head>
<body <?php body_class(); ?>>
