/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
    AlignmentControl,
    BlockControls,
    InspectorControls, 
    RichText, 
    useBlockProps 
} from '@wordpress/block-editor';

import { 
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalNumberControl as NumberControl,
    ToggleControl,
    PanelBody,
    PanelRow
} from '@wordpress/components';


export default function edit( {
	attributes,
	setAttributes,
    isSelected
} ) {
	const {
        align,
        prefix,
        suffix,
        yearFormat,
        isRange,
        startingYear
    } = attributes;

    const currentYear = new Date().getFullYear().toString();

    let yearHtml = ( yearFormat === 'y' ? currentYear.slice(-2) : currentYear );
    if ( isRange && startingYear && startingYear !== currentYear ) {
        yearHtml = ( yearFormat === 'y' ? startingYear.toString().slice(-2) : startingYear ) + " - " + yearHtml;
    }

    const blockProps = useBlockProps( {
		className: clsx( {
			[ `has-text-align-${ align }` ]: align,
		} )
	} );


    return (
    <>
        <InspectorControls>
            <PanelBody title={ __("Date settings", "tzm-copyright-block") }>
                <PanelRow>
                    <ToggleGroupControl __nextHasNoMarginBottom
                        label={ __("Year format", "tzm-copyright-block") }
                        value={ yearFormat }
                        onChange={ (newFormat) => setAttributes({yearFormat: newFormat}) }
                        isBlock
                    >
                        <ToggleGroupControlOption value="Y" label={ __("Four digits", "tzm-copyright-block") } />
                        <ToggleGroupControlOption value="y" label={ __("Two digits", "tzm-copyright-block") } />
                    </ToggleGroupControl>
                </PanelRow>
                <PanelRow>
                    <ToggleControl __nextHasNoMarginBottom
                        label={ __("Display range", "tzm-copyright-block") }
                        checked={ isRange }
                        onChange={ () => setAttributes({isRange: ! isRange}) }
                    />
                </PanelRow>
                { !! isRange && (
                    <PanelRow>
                        <NumberControl __next40pxDefaultSize
                            label={ __("Starting year", "tzm-copyright-block") }
                            min={ 1980 }
                            max={ currentYear }
                            value={ startingYear }
                            onChange={ (newYear) => setAttributes({startingYear: newYear}) }
                            required
                        />
                    </PanelRow>
                ) }
            </PanelBody>
        </InspectorControls>

        <BlockControls group="block">
            <AlignmentControl
                value={ align }
                onChange={ (newAlign) => setAttributes({ align: newAlign }) }
            />
         </BlockControls>

        <div { ...blockProps } >
            { (isSelected || prefix) && (
                <RichText identifier="prefix"
                    placeholder={ "..." }
                    tagName="span"
                    className="wp-block-tzm-copyright__prefix"
                    value={ prefix } 
                    onChange={ (newPrefix) => setAttributes({prefix: newPrefix}) }
                    disableLineBreaks
                />
            ) }
            <span className="wp-block-tzm-copyright__year">
                { " © " + yearHtml + " " }
            </span>
            { (isSelected || suffix) && (
                <RichText identifier="suffix"
                    placeholder={ "..." }
                    tagName="span"
                    className="wp-block-tzm-copyright__suffix"
                    value={ suffix } 
                    onChange={ (newSuffix) => setAttributes({suffix: newSuffix}) }
                    disableLineBreaks
                />
            ) }
        </div>
    </>
    );
}