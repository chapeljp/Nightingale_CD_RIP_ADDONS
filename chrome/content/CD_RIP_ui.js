function ouvrirAide(){
	
	//taille de la fenetre
	var cdrip_ui_aide_width = 300;
	var cdrip_ui_aide_height = 300;

	window.openDialog(	'aide.xul', 
						'CD RIP aide',
						'left='+((window.outerWidth/2)-(cdrip_ui_aide_width/2))+','
						+ 'top='+((window.outerHeight/2)-(cdrip_ui_aide_height/2))+','
						+ 'height='+cdrip_ui_aide_height+','
						+ 'width='+cdrip_ui_aide_width+','
                        + 'modal,resizable=yes,scrollbars=yes,status=yes');
}