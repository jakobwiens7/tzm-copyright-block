/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * WordPress dependencies
 */
//import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
//import './style.scss';

/**
 * Define a custom SVG icon for the block. This icon will appear in
 * the Inserter and when the user selects the block in the Editor.
 */
const icon = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
		<path d="M14,13.516c0.5,-0.66 1.445,-0.784 2.1,-0.28c0.66,0.5 0.784,1.445 0.28,2.1c-1,1.31 -2.59,2.16 -4.37,2.16c-3.04,0 -5.5,-2.464 -5.5,-5.5c0,-3.035 2.464,-5.5 5.5,-5.5c1.77,0 3.345,0.837 4.351,2.137c0.5,0.655 0.387,1.6 -0.268,2.105c-0.655,0.5 -1.6,0.386 -2.104,-0.27c-0.46,-0.59 -1.17,-0.97 -1.98,-0.97c-1.38,0 -2.5,1.12 -2.5,2.5c0,1.38 1.12,2.5 2.5,2.5c0.81,0 1.53,-0.386 2,-0.984Z"/>
		<path d="M12,2c5.52,0 10,4.48 10,10c0,5.52 -4.48,10 -10,10c-5.52,0 -10,-4.48 -10,-10c0,-5.52 4.48,-10 10,-10Zm0,2c-4.42,0 -8,3.58 -8,8c0,4.42 3.58,8 8,8c4.42,0 8,-3.58 8,-8c0,-4.42 -3.58,-8 -8,-8Z"/>
	</svg>
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( metadata.name, {
	icon,
	example: {
		attributes: {
			prefix: 'All rights reserved.',
			suffix: 'My Company',
		}
	},
	save,
	edit,
} );
