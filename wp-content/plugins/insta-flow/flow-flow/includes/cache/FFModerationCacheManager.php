<?php namespace ffinst\flow\cache;
if ( ! defined( 'WPINC' ) ) die;

use ffinst\flow\db\FFDB;

/**
 * FlowFlow.
 *
 * @package   FlowFlow
 * @author    Looks Awesome <email@looks-awesome.com>
 *
 * @link      http://looks-awesome.com
 * @copyright 2014-2016 Looks Awesome
 */
class FFModerationCacheManager extends FFCacheManager{
	function __construct( $context = null, $force = false ) {
		parent::__construct( $context, $force );
	}

	protected function getGetFilters() {
		$args = parent::getGetFilters();
		$args[] = FFDB::conn()->parse('post.post_status = ?s', 'approved');
		return $args;
	}
}