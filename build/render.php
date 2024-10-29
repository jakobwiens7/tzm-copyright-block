<?php

/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$current_year = date('Y');

$is_short =
    isset($attributes['yearFormat']) &&
    ($attributes['yearFormat'] === 'y');

$is_range =
    ($attributes['isRange'] ?? false) &&
    ($attributes['startingYear'] ?? false) &&
    ($attributes['startingYear'] !== $current_year);

$year_html = $is_short
    ? $current_year % 100
    : $current_year;

if ($is_range) {
    $year_html = ($is_short ? $attributes['startingYear'] % 100 : $attributes['startingYear']) . " - " . $year_html;
}

echo str_replace("{%YYYY%}", $year_html, $content);
