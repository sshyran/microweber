<?


//action_hook('mw_admin_settings_menu', 'mw_print_admin_shop_settings_link');

function mw_print_admin_shop_settings_link() {
	$active = url_param('view');
	$cls = '';
	if ($active == 'comments') {
		$cls = ' class="active" ';
	}
	$notif_html = '';
$mname = module_name_encode('shop/payments/admin');
	print "<li><a class=\"item-".$mname."\" href=\"#option_group=".$mname."\">Online Shop</a></li>";

	//$notif_count = get_notifications('module=comments&is_read=n&count=1');
	/*if ($notif_count > 0) {
		$notif_html = '<sup class="mw-notif-bubble">' . $notif_count . '</sup>';
	}*/
	//print '<li' . $cls . '><a href="' . admin_url() . 'view:comments"><span class="ico icomment">' . $notif_html . '</span><span>Comments</span></a></li>';
}



