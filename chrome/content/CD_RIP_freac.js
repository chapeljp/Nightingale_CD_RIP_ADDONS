﻿if (typeof CdRip == 'undefined') {  var CdRip = {};}CdRip.freac = {		_pref_branch: "extensions.cd-rip.",	_bytes_per_frames: 2352,	_frames_per_secondes: 75,	_ext_ref: "{671e07ef-2dcc-4d5b-be3c-0893f3938397}",			/**************************************************************************************	*	main_encoder	*	configuration LAME	*	0 = LAME	*	1 = FORBIS	*	2 = BONK	*	3 = BLADE	*	4 = FAAC	*	5 = FLAC	*	6 = TVQ	*	7 = WAVE	**************************************************************************************/	set main_encoder (main_encoder){		main_encoder = parseInt(main_encoder)		this.setpref("setInt", "main_encoder" ,main_encoder);	},		get main_encoder (){		return this.getpref("setInt", "main_encoder");	},				/**************************************************************************************	*	conf_cd_rip_freaccmd_exe	*	path to freac exe	**************************************************************************************/	set conf_cd_rip_freaccmd_exe (conf_cd_rip_freaccmd_exe){		if(typeof(conf_cd_rip_freaccmd_exe)== 'string'){			this.setpref("charPref", "conf_cd_rip_freaccmd_exe" ,conf_cd_rip_freaccmd_exe);		}	},		get conf_cd_rip_freaccmd_exe (){		return this.getpref("charPref", "conf_cd_rip_freaccmd_exe");	},			/**************************************************************************************	*	conf_cd_rip_timeout	*	configuration CD RIP - max execution time for encore a track in sec	*	min = 10	*	max = 3600	*	default = 120	**************************************************************************************/	set conf_cd_rip_timeout (conf_cd_rip_timeout){			conf_cd_rip_timeout = parseInt(conf_cd_rip_timeout)				if(conf_cd_rip_timeout > 10 || conf_cd_rip_timeout < 3600){			this.setpref("setInt", "conf_cd_rip_timeout" ,conf_cd_rip_timeout);		}		else{			return this.getpref("setInt", "conf_cd_rip_timeout");		}	},		get conf_cd_rip_timeout (){		return this.getpref("setInt", "conf_cd_rip_timeout");	},			/**************************************************************************************	*	main_output_dir	*	output dir for converting files	**************************************************************************************/	set main_output_dir (main_output_dir){		if(typeof(main_output_dir)== 'string'){					this.setpref("charPref", "main_output_dir" ,main_output_dir);		}	},			get main_output_dir (){		return this.getpref("charPref", "main_output_dir");	},		/**************************************************************************************	*	main_drive	*	drive for read tracks on CD	**************************************************************************************/	set main_drive (main_drive){		if(typeof(main_drive)== 'string'){					this.setpref("charPref", "main_drive" ,main_drive);		}	},		get main_drive (){		return this.getpref("charPref", "main_drive");	},			/**************************************************************************************	*	conf_lame_mode	*	configuration LAME	*	0 = VBR	*	1 = CBR	*	2 = ABR	**************************************************************************************/	set conf_lame_mode (conf_lame_mode){		conf_lame_mode = parseInt(conf_lame_mode)		this.setpref("setInt", "conf_lame_mode" ,conf_lame_mode);	},		get conf_lame_mode (){		return this.getpref("setInt", "conf_lame_mode");	},			/**************************************************************************************	*	conf_lame_cbr_abr_bitrate	*	configuration LAME	*	min = 8	*	max = 320	*	default = 192	**************************************************************************************/	set conf_lame_cbr_abr_bitrate (conf_lame_cbr_abr_bitrate){		if(conf_lame_cbr_abr_bitrate > 8 || conf_lame_cbr_abr_bitrate < 320){			this.setpref("setInt", "conf_lame_cbr_abr_bitrate" ,conf_lame_cbr_abr_bitrate);		}		else{			this.setpref("setInt", "conf_lame_cbr_abr_bitrate" ,192);		}	},		get conf_lame_cbr_abr_bitrate (){		return this.getpref("setInt", "conf_lame_cbr_abr_bitrate");	},			/**************************************************************************************	*	conf_lame_vbr_quality	*	configuration LAME	*	min = 0	*	max = 9	*	default = 5	**************************************************************************************/	set conf_lame_vbr_quality (conf_lame_vbr_quality){			conf_lame_vbr_quality = parseInt(conf_lame_vbr_quality)				if(conf_lame_vbr_quality > 0 || conf_lame_vbr_quality < 9){			this.setpref("setInt", "conf_lame_vbr_quality" ,conf_lame_vbr_quality);		}		else{			return this.getpref("setInt", "conf_lame_vbr_quality");		}	},		get conf_lame_vbr_quality (){		return this.getpref("setInt", "conf_lame_vbr_quality");	},			/**************************************************************************************	*	current_dir_path	*	drive for read tracks on CD	**************************************************************************************/	set current_dir_path (current_dir_path){		if(typeof(current_dir_path)== 'string'){					this.setpref("charPref", "current_dir_path" ,current_dir_path);			document.getElementById('current_dir_path').value = current_dir_path;		}	},		get current_dir_path (){		return this.getpref("charPref", "current_dir_path");	},	/**************************************************************************************	*	FUNCTION resetUi	*	function in progress	**************************************************************************************/	resetUi: function(){		//define windows size		var cdrip_ui_aide_width = 300;		var cdrip_ui_aide_height = 300;								     		window.openDialog(	'reinitialisation_options.xul', 							'CD RIP aide',							'left='+((window.outerWidth/2)-(cdrip_ui_aide_width/2))+','							+ 'top='+((window.outerHeight/2)-(cdrip_ui_aide_height/2))+','							+ 'height='+cdrip_ui_aide_height+','							+ 'width='+cdrip_ui_aide_width+','							+ 'modal,resizable=yes,scrollbars=yes,status=yes').focus;		if (params.out) {			alert("OK");		}		else {			alert("NO");		}  			},				/**************************************************************************************	*	FUNCTION reset	*	function in progress	**************************************************************************************/	reset: function(lame, vorbis, bonk, blade, faac, flac, tvq, wave){				var prefs = Components.classes["@mozilla.org/preferences-service;1"]						.getService(Components.interfaces.nsIPrefService);			prefs = prefs.getBranch(this._pref_branch);					if(lame){					this.conf_lame_mode = "0";			document.getElementById('conf_lame_mode').parentNode.selectedIndex = prefs.getIntPref("conf_lame_mode");						this.conf_lame_cbr_abr_bitrate = "192";			document.getElementById('conf_lame_cbr_abr_bitrate').value = prefs.getIntPref("conf_lame_cbr_abr_bitrate");						this.conf_lame_vbr_quality = "5";			document.getElementById('conf_lame_vbr_quality').value = prefs.getIntPref("conf_lame_vbr_quality");		}							},			/**************************************************************************************	*	FUNCTION setpref	*	write in pref file	*	type @String [charPref|boolPref|setInt]	*	pref_name @String	*	value  @string @boolean @integer	**************************************************************************************/	setpref: function(type, pref_name, value){			var prefs = Components.classes["@mozilla.org/preferences-service;1"]						.getService(Components.interfaces.nsIPrefService);			prefs = prefs.getBranch(this._pref_branch);					if(type == "charPref"){			prefs.setCharPref(pref_name,value);		}		else if(type == "boolPref"){			prefs.setBoolPref(pref_name,value);		}		else if(type == "setInt"){			prefs.setIntPref(pref_name,value);		}	},			/**************************************************************************************	*	FUNCTION getpref	*	read in pref file	*	type @String [charPref|boolPref|setInt]	*	pref_name @String	**************************************************************************************/	getpref: function(type, pref_name){			var value;			var prefs = Components.classes["@mozilla.org/preferences-service;1"]					.getService(Components.interfaces.nsIPrefService);		prefs = prefs.getBranch(this._pref_branch);				if(type == "charPref"){			value = prefs.getCharPref(pref_name);		}		else if(type == "boolPref"){			value = prefs.getBoolPref(pref_name);		}		else if(type == "setInt"){			value = prefs.getIntPref(pref_name);		}				return value;	},			/**************************************************************************************	*	FUNCTION getDirectory	*	read in pref file	*	id_text_box @String	**************************************************************************************/	getDirectory: function(id_text_box){			const nsIFilePicker = Components.interfaces.nsIFilePicker;		var fp = Components.classes["@mozilla.org/filepicker;1"]	           .createInstance(nsIFilePicker);		fp.init(window, "Choose Directory", nsIFilePicker.modeGetFolder);		var path = "N/A";		var rv = fp.show();		if (rv == nsIFilePicker.returnOK || rv == nsIFilePicker.returnReplace) {			path = fp.file.path;		}		document.getElementById(id_text_box).value = path;		this.setpref("charPref", id_text_box, path);		},			/**************************************************************************************	*	FUNCTION browseDir	*	read directory and list all file (only if extension of file is .cda)	*	populate the list of tracks	*	dir_path @String	**************************************************************************************/	browseDir: function (dir_path){				var row;		var file = Components.classes["@mozilla.org/file/local;1"].						 createInstance(Components.interfaces.nsILocalFile);				file.initWithPath(dir_path);				var entries = file.directoryEntries;		var array_of_nsIFile = [];		var array_of_tracks = [];				//foreach element (file or dir) in the parent directory (dir_path)		while(entries.hasMoreElements())		{		  var entry = entries.getNext();		  entry.QueryInterface(Components.interfaces.nsIFile);		  //add this element (nsIFile) in array name array_of_nsIFile		  array_of_nsIFile.push(entry);		}				//foreach element in array_of_nsIFile		for(var i = 0; i<array_of_nsIFile.length; i++){			//if element is a file			if(array_of_nsIFile[i].isFile()){				var elem = array_of_nsIFile[i].leafName.split('.');				//if file extension is "cda"				if(elem[elem.length-1] == "cda"){					//add this element (nsIFile) in array array_of_tracks					array_of_tracks.push(array_of_nsIFile[i]);				}			}		}				//now array_of_tracks content only .cda files		//we populate list		var theList = document.getElementById('main_list_tracks');				for(var i = 0; i<array_of_tracks.length; i++){						var time = this.getTrackTime(dir_path, array_of_tracks[i].leafName);						var min = time/60;			min = parseInt(min);			var sec = time%60;						row = document.createElement('listitem');			row.setAttribute('label',  array_of_tracks[i].leafName+' ['+min+":"+sec+"]");			//here value is used for make an index reference to the list			//example : the third element in the list got the value 2 			row.setAttribute('value',  i);			theList.appendChild(row);		}			},			/**************************************************************************************	*	FUNCTION selectAllTracks	*	select all items in list	*	list_id @String	**************************************************************************************/	selectAllTracks: function(list_id){		document.getElementById(list_id).selectAll();	},			/**************************************************************************************	*	FUNCTION clearAllTracks	*	clear list	*	list_id @String	**************************************************************************************/	clearAllTracks: function(list_id){		document.getElementById(list_id).clearSelection();	},			/**************************************************************************************	*	FUNCTION dropList	*	delete all data in list	*	list_id @String	**************************************************************************************/	dropList: function(list_id){		var list_size = document.getElementById(list_id).getRowCount();					for(var i=0; i<list_size; i++){			var noeud=document.getElementById("main_list_tracks").firstChild;			disparu = document.getElementById("main_list_tracks").removeChild(noeud);		}	},			/**************************************************************************************	*	FUNCTION countSelectItemsInList	*	count the number of selected items in a list	*	list_id @String	**************************************************************************************/	countSelectItemsInList: function(list_id){		var list = document.getElementById(list_id).selectedItems;				return list.length;	},			/**************************************************************************************	*	FUNCTION countItemsInList	*	count the number of items in a list	*	list_id @String	**************************************************************************************/	countItemsInList: function(list_id){		return document.getElementById(list_id).getRowCount();	},			/**************************************************************************************	*	FUNCTION getListOfSelectedTracks	*	- taking all selected items in the liste (type = listitems)	*	- translate value in index (see FUNCTION browseDir)	*	- sort them and populate a new tab with the result	*	list_id @String	**************************************************************************************/	getListOfSelectedTracks: function(list_id){		var array_of_selected_index = [];		var array_of_selected_listitem = document.getElementById(list_id).selectedItems;						for(var i=0; i <array_of_selected_listitem.length; i++){				array_of_selected_index.push((parseInt(array_of_selected_listitem[i].value))+1);			}				function compareNumbers(a,b){			return a - b;		}				return array_of_selected_index.sort(compareNumbers);	},			/**************************************************************************************	*	FUNCTION getListOfDrive	*	return the list of current drive 	*		**************************************************************************************/	getListOfDrive: function(){		var root = 	Components.classes["@mozilla.org/file/local;1"].  					createInstance(Components.interfaces.nsILocalFile);  		root.initWithPath("\\\\.");  		var drivesEnum = root.directoryEntries, drives = [];  		while (drivesEnum.hasMoreElements()) {  			drives.push(drivesEnum.getNext().  			QueryInterface(Components.interfaces.nsILocalFile).path);  		}  		return drives;	},			/**************************************************************************************	*	FUNCTION getEncoder	*	return the name of selected encoder in main frame	**************************************************************************************/	getEncoder: function(){		var encoder;			if(this.main_encoder == 0){			encoder = "LAME";		}		else if(this.main_encoder == 1){			encoder = "VORBIS";		}		else if(this.main_encoder == 2){			encoder = "BONK";		}		else if(this.main_encoder == 3){			encoder = "BLADE";		}		else if(this.main_encoder == 4){			encoder = "FAAC";		}		else if(this.main_encoder == 5){			encoder = "FLAC";		}		else if(this.main_encoder == 6){			encoder = "TVQ";		}		else if(this.main_encoder == 7){			encoder = "WAVE";		}				return encoder;	},			/**************************************************************************************	*	FUNCTION getGlobalParams	*	@return args @array of global parameters 	*	selected encoder	*	output dir	*	track list	*	cddb	**************************************************************************************/	getGlobalParams: function(){				var args = [];		var array_tracks = [];				//get encoder		args[0] = "-e";		args[1] = this.getEncoder();				//get output dir		args[2] = "-d";		args[3] = this.main_output_dir;				//get track list		args[4] = "-track";		array_tracks = this.getListOfSelectedTracks("main_list_tracks");		for(var i=0; i<array_tracks.length; i++){			if(i==0 && array_tracks.length > 1){				args[5] = array_tracks[i]+",";			}			else if(i==0 && array_tracks.length == 1){				args[5] = array_tracks[i];			}			else if(i == array_tracks.length-1){				args[5] += array_tracks[i];			}			else{				args[5] += array_tracks[i]+",";			}		}				//time out		args[6] = "-t";		args[7] = this.conf_cd_rip_timeout;				//enable cddb		args[8] = "-cddb";				var log = "";		for(var i=0; i<args.length; i++){			log += args[i]+" ";		}		this.writeLog("Globals args = "+log);				return args;			},			/**************************************************************************************	*	FUNCTION readCdaFile	*	extracts informations (bytes) from a CDA file	*	a CDA file have 44 bytes	*	more information about CDA file : http://fr.wikipedia.org/wiki/Compact_Disc_Audio_track	*	track @String the file name	*	dir @String the dir path	*	@@return array @array content the 44 bytes of information about the CDA file		**************************************************************************************/	readCdaFile: function(dir, track){ 		dir = this.validPathToDir(dir); 		//select file		var file = Components.classes["@mozilla.org/file/local;1"].						 createInstance(Components.interfaces.nsILocalFile);					file.initWithPath(dir+track);				var fileStream = Components.classes['@mozilla.org/network/file-input-stream;1']  						 .createInstance(Components.interfaces.nsIFileInputStream);  		fileStream.init(file, 1, 0, false);  				var binaryStream = Components.classes['@mozilla.org/binaryinputstream;1']  						   .createInstance(Components.interfaces.nsIBinaryInputStream);  		binaryStream.setInputStream(fileStream);  		var array = binaryStream.readByteArray(fileStream.available());  				binaryStream.close();  				fileStream.close();  				//array content the 44 bytes of information about the CDA file			return array;	},			/**************************************************************************************	*	FUNCTION getTrackTime	*	get the time in second of a track from a CDA file	*	track @String the file name	*	dir @String the dir path	**************************************************************************************/	getTrackTime: function(dir, track){				dir = this.validPathToDir(dir);				var bytes = this.readCdaFile(dir, track);		var min = bytes[42];		var sec = bytes[41];				var time = (min*60)+sec;				return time;			},			/**************************************************************************************	*	FUNCTION getTrackSize	*	get the wave file size from the cda file	*	track @String the file name	*	dir @String the dir path	**************************************************************************************/	getTrackSize: function(dir, track){				dir = this.validPathToDir(dir);				var time = this.getTrackTime(dir, track);				var size = (time*this._frames_per_secondes*this._bytes_per_frames);			return size;	},			/**************************************************************************************	*	FUNCTION validPathToDir	*	test if the last element of the path is "\", else add a "\" to the path	*	dir @String the dir path	**************************************************************************************/	validPathToDir: function(dir){		if(dir[dir.length-1] != "\\"){			dir += "\\";		}				return dir;	},			/**************************************************************************************	*	FUNCTION changeOutputDirPath	*	find in a directory content if directory name start by CDRIP	*	one or multi directory start by CDRIP, take the biggest number after CDRIP, return number+1	*	else no directory start by CDRIP, return -1	*	dir @String the path of a dir	*	dirname @return the new dir name for output files ripped	**************************************************************************************/	changeOutputDirPath: function(dir){				var dirname;				var array_of_nsIFile = [];		var array_of_dir_cd_rip = [];						dir = this.validPathToDir(dir);				var file = Components.classes["@mozilla.org/file/local;1"].						 createInstance(Components.interfaces.nsILocalFile);				file.initWithPath(dir);				var entries = file.directoryEntries;			//foreach element (file or dir) in the parent directory (dir_path)		while(entries.hasMoreElements())		{		  var entry = entries.getNext();		  entry.QueryInterface(Components.interfaces.nsIFile);		  //add this element (nsIFile) in array name array_of_nsIFile		  array_of_nsIFile.push(entry);		}				for(var i = 0; i<array_of_nsIFile.length; i++){			//if element is a directory and dir name start by CDRIP			if((array_of_nsIFile[i].isDirectory()) && (array_of_nsIFile[i].leafName.slice(0,5) == "CDRIP")){				//add this element (int) in the array_of_dir_cd_rip array				array_of_dir_cd_rip.push(parseInt(array_of_nsIFile[i].leafName.slice(5)));			}		}				function compareNumbers(a,b)		{			return a - b;		}				//sort 		array_of_dir_cd_rip.sort(compareNumbers);		var array_of_dir_cd_rip_reverse = array_of_dir_cd_rip = array_of_dir_cd_rip.reverse();				//no directory start by CDRIP		if(array_of_dir_cd_rip.length == 0){			dirname = "CDRIP";		}		//a directory start by CDRIP* where * = integer		else if((array_of_dir_cd_rip.length >= 1) && (array_of_dir_cd_rip_reverse[0] >= 0)){			dirname = "CDRIP"+(array_of_dir_cd_rip[0]+1);		}		//only directory named by CDRIP		else{			dirname = "CDRIP1";		}				//create dir		var file = Components.classes["@mozilla.org/file/local;1"]                     .createInstance(Components.interfaces.nsILocalFile); 		file.initWithPath(dir);				file.append(dirname)		file.create(Components.interfaces.nsIFile.DIRECTORY_TYPE, 0777)				this.writeLog("Create directory = "+dirname+" in "+dir);				return dirname;	},			/**************************************************************************************	*	FUNCTION progressRip	*	Edit progressmeters	**************************************************************************************/	progressRip: function(){		var PgrThread = {			run: function(){				var isEndRip = false;				var songsToRip = document.getElementById("main_count_selected_tracks").value.split('/')[0];				var songsRiped = 0;				var done = 0;								var dir_path = document.getElementById("current_dir_path").value;						document.getElementById('main_progress_meter_file').mode = 'undetermined';								while(!isEndRip){									//Calcul du nombre de fichiers créés					var file = Components.classes["@mozilla.org/file/local;1"].									createInstance(Components.interfaces.nsILocalFile);					file.initWithPath(dir_path);					var entries = file.directoryEntries;					var array_of_nsIFile = [];					//foreach element (file or dir) in the parent directory (dir_path)					while(entries.hasMoreElements())					{					  var entry = entries.getNext();					  entry.QueryInterface(Components.interfaces.nsIFile);					  //add this element (nsIFile) in array name array_of_nsIFile					  array_of_nsIFile.push(entry);					}										var songsRiped = array_of_nsIFile.length;										//Calcul du temps écoulé										//Calcul de la progression							done = 100 * songsRiped / songsToRip;										//Affichage de la progression					document.getElementById("main_progress_meter").value = done;										document.getElementById('main_rip_tracks').value = songsRiped+"/"+songsToRip;										//Test de fin de progression					if(songsRiped == songsToRip){						isEndRip = true;												document.getElementById('main_progress_meter_file').mode = 'determined';												document.getElementById('main_rip_tracks').value = songsRiped+"/"+songsToRip;											document.getElementById('main_button_start_rip').disabled = "false";												var explorer = Components.classes["@mozilla.org/file/local;1"].							 createInstance(Components.interfaces.nsILocalFile);			 						explorer.initWithPath("C:\\Windows\\explorer.exe");												//init the explorer.exe						var process_silencestart_explorer = Components.classes["@mozilla.org/process/util;1"]										.createInstance(Components.interfaces.nsIProcess);						process_silencestart_explorer.init(explorer);												var args_cmd = [];						args_cmd[0] = document.getElementById("current_dir_path").value;												process_silencestart_explorer.run(false, args_cmd, args_cmd.length);											}						}				//shutdown();			},					};				var thread = Components.classes["@mozilla.org/thread-manager;1"]                        .getService(Components.interfaces.nsIThreadManager)                        .newThread(0);		thread.dispatch(PgrThread, thread.DISPATCH_NORMAL);				},			/*	tasklitFreac: function(){		var PgrThread = {			run: function(){								var isEndRip = false;				var freac_path = document.getElementById("conf_cd_rip_freaccmd_exe").value;								while(!isEndRip){									var tasklist = Components.classes["@mozilla.org/file/local;1"].									createInstance(Components.interfaces.nsILocalFile);			 					tasklist.initWithPath(freac_path+"\\batch\\");										//init the explorer.exe					var process_silencestart_explorer = Components.classes["@mozilla.org/process/util;1"]									.createInstance(Components.interfaces.nsIProcess);					process_silencestart_explorer.init(explorer);										var args_cmd = [];					args_cmd[0] = document.getElementById("current_dir_path").value;												process_silencestart_explorer.run(false, args_cmd, args_cmd.length);					//Test de fin de progression					if(songsRiped == songsToRip){						isEndRip = true;												//get the cmd exe file						var explorer = Components.classes["@mozilla.org/file/local;1"].										 createInstance(Components.interfaces.nsILocalFile);			 						explorer.initWithPath("C:\\Windows\\explorer.exe");												//init the explorer.exe						var process_silencestart_explorer = Components.classes["@mozilla.org/process/util;1"]										.createInstance(Components.interfaces.nsIProcess);						process_silencestart_explorer.init(explorer);												var args_cmd = [];						args_cmd[0] = document.getElementById("current_dir_path").value;														process_silencestart_explorer.run(false, args_cmd, args_cmd.length);					}						}				shutdown();			},					};				var thread = Components.classes["@mozilla.org/thread-manager;1"]                        .getService(Components.interfaces.nsIThreadManager)                        .newThread(0);		thread.dispatch(PgrThread, thread.DISPATCH_NORMAL);	},	*/		/**************************************************************************************	*	FUNCTION getListitemLabel	*	find in a directory content if directory name start by CDRIP	*	one or multi directory start by CDRIP, take the biggest number after CDRIP, return number+1	*	else no directory start by CDRIP, return -1	*	dir @String the path of a dir	*	dirname @return the new dir name for output files ripped	**************************************************************************************/	getListitemLabel: function(list_id, index){		var list = document.getElementById(list_id);		var elem = list.getItemAtIndex(index);				return (elem.label);	},			/**************************************************************************************	*	FUNCTION getLameParams	*	return array whith LAME configuration	**************************************************************************************/	getLameParams: function(){				var args = [];				//lame mode		args[0] = "-m";		args[1] = this.getLameMode();				//CBR / ABR 		args[2] = "-b";		args[3] = this.conf_lame_cbr_abr_bitrate;				args[4] = "-q";		args[5] = this.conf_lame_vbr_quality;				var log = "";		for(var i=0; i<args.length; i++){			log += args[i]+" ";		}		this.writeLog("LAME args = "+log);				return args;	},		/**************************************************************************************	*	FUNCTION getLameMode	*	return the name of selected LAME mode	**************************************************************************************/	getLameMode: function(){			var mode;				if(this.conf_lame_mode == 0){			mode = "VBR";		}		else if(this.conf_lame_mode == 1){			mode = "CBR";		}		else if(this.conf_lame_mode == 2){			mode = "ARB";		}				return mode;	},				/**************************************************************************************	*	FUNCTION getTrackSizeLameCbr	*	return in bytes the output file size	**************************************************************************************/	getTrackSizeLameCbr: function(track_time, bit_rate){		return (((bit_rate*1024)*track_time)/8);	},			writeLog: function(line){		var date = new Date();				document.getElementById('log_console').value +=  	date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"\t"+line+"\n";	},		/**************************************************************************************	*	FUNCTION run	*	in progress	**************************************************************************************/	run: function() {				this.writeLog("Start RIP");				this.checkFreac();								//this.writeLog("totototo");				//get the SilentStart exe file		/*var silentstart = Components.classes["@mozilla.org/file/local;1"].						 createInstance(Components.interfaces.nsILocalFile);			 		silentstart.initWithPath(this.conf_cd_rip_freaccmd_exe+"\\SilentStart\\bin\\silentstart.exe");				//init the silentstart		var process_silencestart_freaccmd = Components.classes["@mozilla.org/process/util;1"]						.createInstance(Components.interfaces.nsIProcess);		process_silencestart_freaccmd.init(silentstart);				//get global params from UI		var args_global= this.getGlobalParams();				//can't launch rip, no track selected		if(this.getListOfSelectedTracks("main_list_tracks").length == 0){			alert("CD RIP ne peux pas être lancé car aucun titre n'est sélectionné.");		}		else{			document.getElementById('main_button_start_rip').disabled= "true";					//get LAME params			var args_lame = this.getLameParams();						var args = args_global.concat(args_lame);						//set the path for output dir			var new_dir = this.changeOutputDirPath(args[3]);			args[3] = this.validPathToDir(args[3])+new_dir;						this.current_dir_path = args[3];			//get the freaccmd exe file			args.unshift(this.conf_cd_rip_freaccmd_exe+"\\freaccmd.exe");						var log = "";			for(var i=0; i<args.length; i++){				log += args[i]+" ";			}			this.writeLog("Launch = "+log);									process_silencestart_freaccmd.run(false, args, args.length);						this.progressRip();						//this.tasklitFreac();											}		*/	},		/**************************************************************************************	*	FUNCTION checkFreac	*	check all freac files	**************************************************************************************/	checkFreac: function() {				var default_profile_path = Components.classes["@mozilla.org/file/directory_service;1"].           getService(Components.interfaces.nsIProperties).           get("ProfD", Components.interfaces.nsIFile);				var ext_path = default_profile_path.path+"\\extensions\\"+this._ext_ref;				var file = Components.classes["@mozilla.org/file/local;1"].           createInstance(Components.interfaces.nsILocalFile);		file.initWithPath(ext_path);				if(file.exists()){			this.writeLog("exist : "+file.path);						var result = "";			var inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"]								.createInstance(Components.interfaces.nsIFileInputStream);			inputStream.init(file, -1, 0, 0);			inputStream.read(result);						this.writeLog("res : "+result);		}else{			this.writeLog("don't exist");		}	},};