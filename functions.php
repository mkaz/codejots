<?php
/**
 * Function Junction
 * @package codejots
 */


function codejots_enqueue_scripts() {
 
    wp_enqueue_script(
        'codejot-script',
        get_template_directory_uri() . '/dist/bundle.js',
        array ( 'wp-api-request' ),
        1.0,
        true
    );

    wp_enqueue_script(
        'prism',
        get_template_directory_uri() . '/dist/prism.js',
        array(),
        1.14,
        true
    );

    wp_enqueue_style(
        'prism',
        get_template_directory_uri() . '/dist/prism.css'
    );

}
add_action( 'wp_enqueue_scripts', 'codejots_enqueue_scripts' );
