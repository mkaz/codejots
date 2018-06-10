<?php
/**
 * Function Junction
 * @package codejots
 */


function codejots_get_custom_logo_defaults() {
    return array(
        'height'      => 64,
        'width'       => 64,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
    );
}

function codejots_theme_setup() {
    add_theme_support( 'custom-logo', codejots_get_custom_logo_defaults() );
    add_theme_support( 'custom-background' );
    add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'codejots_theme_setup' );

function codejots_enqueue_scripts() {
 
    wp_enqueue_script(
        'codejots-script',
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
        'codejots-style',
        get_template_directory_uri() . '/style.css'
    );

    wp_enqueue_style(
        'prism',
        get_template_directory_uri() . '/dist/prism.css'
    );

}
add_action( 'wp_enqueue_scripts', 'codejots_enqueue_scripts' );
