<?php
define( 'WP_CACHE', true ); 
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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'PPMedia' );
/** MySQL database username */
define( 'DB_USER', 'root' );
/** MySQL database password */
define( 'DB_PASSWORD', 'root' );
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
define( 'AUTH_KEY',         't0&wAHYD)mwe`Wqk?LwrOVR^rTvn/F:~[d,!EUyOuSz{f8Kv0,3Nb#TcBqah^<n0' );
define( 'SECURE_AUTH_KEY',  'S/i;Sp?(Kc=~YWR:twdE9H76MabeMzYl7C<B_&Q!<_;}duvv.>HsF&vb(~C&[XBS' );
define( 'LOGGED_IN_KEY',    '9;+9@TR2&K<F?je I)/0oLKHO?>@DT;fJt:f}}BRNjl_mt:S8pi~&M;C,Hq*{0-q' );
define( 'NONCE_KEY',        '+Rlu8gGTa#&BP~a4-u3jNtEs]7LJOa)<wrQOH!:p<3yVn~H:Oo3iME$ON}wXp(xC' );
define( 'AUTH_SALT',        '44$!<l2Lq) >q>lSy[TtCB ^?ZY4=h&&k09T0:Egz}JNmD?N6IiFKvaB:-8%R,&:' );
define( 'SECURE_AUTH_SALT', 'erI8|lJm&RY029UG,#2D2,,a4n+EY/aY=8yK<5zOD,Go$6(jR[e^AU5^OiYnb;2|' );
define( 'LOGGED_IN_SALT',   '}PY[mx4rg!Dr#h]P]]QO{/ -z:v]7NXG~6b0ny5FY[&fU>#NJZD=YBs7z[GIC^6J' );
define( 'NONCE_SALT',       'cy8~N#m0JGiD2CpbO=b[ tf@1x:);N+o(p$CbT:R.,i%L93HJ)(PSD/Y@e{`V5sG' );
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}
/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );