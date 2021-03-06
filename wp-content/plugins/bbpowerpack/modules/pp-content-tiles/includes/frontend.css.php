<?php
$percent = 60;
if ( $settings->layout > 1 ) {
	$percent = 50;
}
?>

.fl-node-<?php echo $id; ?> .pp-post-tile-post {
	margin-right: <?php echo $settings->post_spacing; ?>px;
	margin-bottom: <?php echo $settings->post_spacing; ?>px;
	position: relative;
	overflow: hidden;
	height: <?php echo $settings->post_height + $settings->post_spacing; ?>px;
}

<?php if ( '4' === $settings->layout ) { ?>
	.fl-node-<?php echo $id; ?> .pp-post-tile-left {
		width: 75%;
		float: left;
	}
	.fl-node-<?php echo $id; ?> .pp-post-tile-right {
		width: 25%;
		float: left;
	}
<?php } else { ?>
	.fl-node-<?php echo $id; ?> .pp-post-tile-left,
	.fl-node-<?php echo $id; ?> .pp-post-tile-right {
		float: left;
		width: 50%;
	}
<?php } ?>

.fl-node-<?php echo $id; ?> .pp-post-tile-medium {
	height: <?php echo ($settings->post_height * $percent) / 100; ?>px;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-small {
	float: left;
	height: <?php echo $settings->post_height - (($settings->post_height * $percent) / 100); ?>px;
}
.fl-node-<?php echo $id; ?> .pp-post-col-50 .pp-post-tile-medium {
	float: left;
}

<?php
// Post Title typography.
FLBuilderCSS::typography_field_rule( array(
	'settings'		=> $settings,
	'setting_name'	=> 'title_typography',
	'selector'		=> ".fl-node-$id .pp-post-tile-post .pp-post-tile-title a"
) );
?>
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-title {
	<?php if ( isset($settings->title_margin['top']) ) { ?>
		margin-top: <?php echo $settings->title_margin['top']; ?>px;
	<?php } ?>
	<?php if ( isset($settings->title_margin['bottom']) ) { ?>
		margin-bottom: <?php echo $settings->title_margin['bottom']; ?>px;
	<?php } ?>
}

<?php
// Small tile title font size.
FLBuilderCSS::responsive_rule( array(
	'settings'		=> $settings,
	'setting_name'	=> 'title_custom_font_size_s',
	'selector'		=> ".fl-node-$id .pp-post-tile-small .pp-post-tile-title, .fl-node-$id .pp-post-tile-small .pp-post-tile-title a",
	'prop'			=> 'font-size',
	'unit'			=> 'px',
	'enabled'		=> ( 'custom' == $settings->title_font_size_s )
) );

// Small tile title line height.
FLBuilderCSS::responsive_rule( array(
	'settings'		=> $settings,
	'setting_name'	=> 'title_custom_line_height_s',
	'selector'		=> ".fl-node-$id .pp-post-tile-small .pp-post-tile-title, .fl-node-$id .pp-post-tile-small .pp-post-tile-title a",
	'prop'			=> 'line-height',
	'enabled'		=> ( 'custom' == $settings->title_line_height_s )
) );
?>
<?php
// Post meta typography.
FLBuilderCSS::typography_field_rule( array(
	'settings'		=> $settings,
	'setting_name'	=> 'meta_typography',
	'selector'		=> ".fl-node-$id .pp-post-tile-post .pp-post-tile-category, .fl-node-$id .pp-post-tile-post .pp-post-tile-meta"
) );
?>
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-category span {
	display: inline-block;
	<?php if ( isset( $settings->tax_bg_color ) && !empty( $settings->tax_bg_color ) ) { ?>
		background-color: <?php echo pp_get_color_value( $settings->tax_bg_color ); ?>;
		margin-bottom: 10px;
		padding: 2px 8px;
		-webkit-transition: background-color 0.2s ease-in-out;
		-moz-transition: background-color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out;
	<?php } ?>
}
.fl-node-<?php echo $id; ?> .pp-post-tile-post:hover .pp-post-tile-category span {
	<?php if ( isset( $settings->tax_bg_color_h ) && !empty( $settings->tax_bg_color_h ) ) { ?>
		background-color: <?php echo pp_get_color_value( $settings->tax_bg_color_h ); ?>;
		-webkit-transition: background-color 0.2s ease-in-out;
		-moz-transition: background-color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out;
	<?php } ?>
}
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-meta {
	margin-left: 20px;
	<?php if ( isset($settings->meta_margin['top']) ) { ?>
		margin-top: <?php echo $settings->meta_margin['top']; ?>px;
	<?php } ?>
	<?php if ( isset($settings->meta_margin['bottom']) ) { ?>
		margin-bottom: <?php echo $settings->meta_margin['bottom']; ?>px;
	<?php } ?>
    min-height: 0;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-author {
	display: inline-block;
    position: relative;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-author,
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-date {
	display: inline-block;
    position: relative;
	top: 0;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-title a,
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-category,
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-author,
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-post-tile-date,
.fl-node-<?php echo $id; ?> .pp-post-tile-post .pp-meta-separator {
	color: #<?php echo ( isset( $settings->text_color ) && !empty( $settings->text_color ) ) ? $settings->text_color : 'ffffff'; ?>;
    text-shadow: 1px 1px 1px rgba(0,0,0,.3);
}
<?php // New CSS ?>
<?php
	$post_spacing    = $settings->post_spacing / 2;
	$post_spacing_25 = $post_spacing + ( $post_spacing / 2 );
?>
.fl-node-<?php echo $id; ?> .pp-post-tile-left .pp-post-tile-post-1 {
	margin-right: <?php echo $post_spacing; ?>px;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-right .pp-post-tile-small {
	width: calc(50% - <?php echo $post_spacing_25; ?>px);
}
.fl-node-<?php echo $id; ?> .pp-post-tile-right .pp-post-tile-small,
.fl-node-<?php echo $id; ?> .pp-post-tile-right .pp-post-tile-medium {
	margin-right: <?php echo $post_spacing; ?>px;
	margin-left: <?php echo $post_spacing; ?>px;
}

.fl-node-<?php echo $id; ?> .pp-tile-layout-1 .pp-post-tile-right .pp-post-tile-post-2 {
	margin-right: 0;
}
.fl-node-<?php echo $id; ?> .pp-tile-layout-1 .pp-post-tile-right .pp-post-tile-post-4 {
	margin-right: 0;
}

.fl-node-<?php echo $id; ?> .pp-tile-layout-2 .pp-post-tile-right .pp-post-tile-post-3,
.fl-node-<?php echo $id; ?> .pp-tile-layout-2 .pp-post-tile-right .pp-post-tile-post-5 {
	margin-right: 0px;
}

.fl-node-<?php echo $id; ?> .pp-tile-layout-3 .pp-post-tile-right .pp-post-tile-post-2,
.fl-node-<?php echo $id; ?> .pp-tile-layout-3 .pp-post-tile-right .pp-post-tile-post-3 {
	margin-right: 0px;
}

.fl-node-<?php echo $id; ?> .pp-tile-layout-4 .pp-post-tile-right .pp-post-tile-small {
	width: 100%;
	margin-right: 0px;
}

.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-50 .pp-post-tile-medium {
	width: calc(50% - <?php echo $post_spacing; ?>px);
}
.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-50 .pp-post-tile-medium:nth-child(even) {
	margin-right: 0;
	margin-left: <?php echo $post_spacing; ?>px;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-50 .pp-post-tile-medium:nth-child(odd) {
	margin-right: <?php echo $post_spacing; ?>px;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-25 .pp-post-tile-small {
	width: calc(25% - <?php echo $post_spacing_25; ?>px);
	margin-left: <?php echo $post_spacing; ?>px;
	margin-right: <?php echo $post_spacing; ?>px;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-25 .pp-post-tile-small:nth-child(4n+1) {
	margin-left: 0;
}
.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-25 .pp-post-tile-small:nth-child(4n) {
	margin-right: 0;
}

@media only screen and (max-width: 768px) {
	.fl-node-<?php echo $id; ?> .pp-post-tile-left,
	.fl-node-<?php echo $id; ?> .pp-post-tile-right {
		width: 100%;
	}
	.fl-node-<?php echo $id; ?> .pp-post-tile-left .pp-post-tile-post,
	.fl-node-<?php echo $id; ?> .pp-post-tile-right .pp-post-tile-post,
	.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-50 .pp-post-tile-post:nth-child(2n),
	.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-25 .pp-post-tile-post:nth-child(2n) {
		margin-right: 0;
	}
	.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-50 .pp-post-tile-post:nth-child(2n+1),
	.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-25 .pp-post-tile-post:nth-child(2n+1) {
		margin-left: 0;
	}
	.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-50 .pp-post-tile-medium {
		width: calc(50% - <?php echo $post_spacing_25; ?>px);
	}
	.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-25 .pp-post-tile-small {
		width: calc(50% - <?php echo $post_spacing_25; ?>px);
	}
	.fl-node-<?php echo $id; ?> .pp-tile-layout-1 .pp-post-tile-left .pp-post-tile-post-1 {
		margin-right: 0;
	}
	.fl-node-<?php echo $id; ?> .pp-tile-layout-1 .pp-post-tile-right .pp-post-tile-post-2 {
		margin-left: 0;
	}
	.fl-node-<?php echo $id; ?> .pp-tile-layout-1 .pp-post-tile-right .pp-post-tile-post-3 {
		margin-left: 0;
		margin-right: <?php echo $post_spacing; ?>px;
	}
	.fl-node-<?php echo $id; ?> .pp-tile-layout-1 .pp-post-tile-right .pp-post-tile-small,
	.fl-node-<?php echo $id; ?> .pp-tile-layout-2 .pp-post-tile-right .pp-post-tile-small {
		width: calc(50% - <?php echo $post_spacing; ?>px);
	}
	.fl-node-<?php echo $id; ?> .pp-tile-layout-2 .pp-post-tile-right .pp-post-tile-post-2,
	.fl-node-<?php echo $id; ?> .pp-tile-layout-2 .pp-post-tile-right .pp-post-tile-post-4 {
		margin-right: <?php echo $post_spacing; ?>px;
		margin-left: 0;
	}
	.fl-node-<?php echo $id; ?> .pp-tile-layout-3 .pp-post-tile-right .pp-post-tile-post,
	.fl-node-<?php echo $id; ?> .pp-tile-layout-4 .pp-post-tile-right .pp-post-tile-post {
		margin-left: 0;
		margin-right: 0;
	}
}

@media only screen and (max-width: 480px) {
	.fl-node-<?php echo $id; ?> .pp-post-tile-small,
	.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-25 .pp-post-tile-small {
		width: 100% !important;
		margin-left: 0px !important;
		margin-right: 0px !important;
	}
	.fl-node-<?php echo $id; ?> .pp-post-tile-medium,
	.fl-node-<?php echo $id; ?> .pp-post-tile-group.pp-post-col-50 .pp-post-tile-medium {
		width: 100% !important;
		margin-left: 0px !important;
		margin-right: 0px !important;
	}
	.fl-node-<?php echo $id; ?> .pp-post-tile-medium,
	.fl-node-<?php echo $id; ?> .pp-post-tile-small {
		height: <?php echo ( $settings->post_height * $percent ) / 100; ?>px;
	}
}
