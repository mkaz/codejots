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

 <header class="site-header">
    <div class="site-logo"><?php
        if ( has_custom_logo() ) {
            $custom_logo_id = get_theme_mod( 'custom_logo' );
            $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
            echo '<img src="'. esc_url( $logo[0] ) .'" alt="Site Logo">';
        } 
        else {
            echo '<img src="'. get_template_directory_uri() .'/assets/wp-logo.svg" alt="WP Logo"/>';
        }
    ?></div>
    <div class="site-info">
        <h3 class="site-title"><?php echo get_bloginfo( 'name' );?></h3>
        <h5 class="site-desc"><?php echo get_bloginfo( 'description', 'display' );?></h5>
    </div>
</header>
