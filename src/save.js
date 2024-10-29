/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import {
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';


export default function save( { attributes } ) {
	const {
		align,
		prefix,
		suffix,
		//yearFormat,
		//isRange,
		//startingYear
	} = attributes;

    const blockProps = useBlockProps.save( {
		className: clsx( {
			[ `has-text-align-${ align }` ]: align,
		} )
	} );

	return (
		<div { ...blockProps }>
			<span className="wp-block-tzm-copyright__prefix">
				<RichText.Content value={ prefix }/>
			</span>
			<span className="wp-block-tzm-copyright__year">
				{ " © {%YYYY%} " }
			</span>
			<span className="wp-block-tzm-copyright__suffix">
				<RichText.Content value={ suffix }/>
			</span>
		</div>
	);
}
