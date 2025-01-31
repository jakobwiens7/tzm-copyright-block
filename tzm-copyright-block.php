<?php

/**
 * Plugin Name:		  TZM Copyright Block
 * Description:		  Display a copyright notice with an automatically updated year.
 * Version:			  1.0.0
 * Author:			  TezmoMedia - Jakob Wiens
 * Author URI:		  https://www.tezmo.media
 * License:			  GPL-2.0-or-later
 * License URI:		  https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:		  tzm-copyright-block
 * Domain Path:		  /languages
 * Requires at least: 5.6
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}


/**
 * Load plugin textdomain.
 */
function tzm_copyright_load_textdomain()
{
	load_plugin_textdomain(
		'tzm-copyright-block',
		false,
		dirname(plugin_basename(__FILE__)) . '/languages/'
	);
}
add_action('plugins_loaded', 'tzm_copyright_load_textdomain');


/**
 * Initialize blocks.
 */
function tzm_copyright_block_init()
{
	// Register Block
	register_block_type(__DIR__ . '/build/');

	// Load the translation file
	if (function_exists('wp_set_script_translations')) {
		wp_set_script_translations(
			'tzm-copyright-editor-script',
			'tzm-copyright-block',
			plugin_dir_path(__FILE__) . 'languages'
		);
	}
}
add_action('init', 'tzm_copyright_block_init');
