<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'authen57_wp864' );

/** MySQL database username */
define( 'DB_USER', 'authen57_wp864' );

/** MySQL database password */
define( 'DB_PASSWORD', 'S(737Ap8L.' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0rhvgn76km4hzhpluz79my5mnsygrnpec9invfwirawidgaq9rn418shr0pg7tfh' );
define( 'SECURE_AUTH_KEY',  'l2wuiiwphbqvpkne6afukucra9sndunmoeqbkath5laukjj9cz5atplcnn8xjztd' );
define( 'LOGGED_IN_KEY',    'fqa0i7hoksxye8eceaaj26pdyb943oaz59luxlc8rvuxonsikl11w3aqclujresq' );
define( 'NONCE_KEY',        'yhazfxmgnkqdvolwiyufali0zfwexw96yrwdhkgxqdy9zksg5e0d2dublnlpxt5r' );
define( 'AUTH_SALT',        'zu7ogjb47y6ojroewvp0f3fihvgryj7qd4eem86gdo5dji6ike11vm7u4uumiiaj' );
define( 'SECURE_AUTH_SALT', 'hq6bshqxjsjo2ofm6mzyzkwrkvn9jhdkbckrnq3jchxm2ehkplpxoslp745lffd9' );
define( 'LOGGED_IN_SALT',   'ccfybpr8dzx8ximanvwbh8kri0ufsr157xltvmrko3abqlmsnzcxxbjmpn0gxmv9' );
define( 'NONCE_SALT',       'qubqe0btvw0j0yus5bsxl2tpza0u4mpljetjs59wwheqocpl1kbclnn3kgcfcymm' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpxa_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

# Disables all core updates. Added by SiteGround Autoupdate:
define( 'WP_AUTO_UPDATE_CORE', false );

@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system

