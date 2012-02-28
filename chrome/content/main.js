
// Make a namespace.
if (typeof CdRip == 'undefined') {
  var CdRip = {};
}

/**
 * UI controller that is loaded into the main player window
 */
CdRip.Controller = {

  /**
   * Called when the window finishes loading
   */
  onLoad: function() {


    this.createServicepaneNode();


    // initialization code
    this._initialized = true;
    this._strings = document.getElementById("cd-rip-strings");
    
    // Perform extra actions the first time the extension is run
    if (Application.prefs.get("extensions.cd-rip.firstrun").value) {
      Application.prefs.setValue("extensions.cd-rip.firstrun", false);
      this._firstRunSetup();
    }

	//charge les prefs
	var prefs = Components.classes["@mozilla.org/preferences-service;1"]
				.getService(Components.interfaces.nsIPrefService);
	prefs = prefs.getBranch("extensions.cd-rip.");
	
	
	//définition des prefs
	//onglet - CD RIP
	document.getElementById('conf_cd_rip_freaccmd_exe').value = prefs.getCharPref("conf_cd_rip_freaccmd_exe");
	document.getElementById('conf_cd_rip_oupout_dir').value = prefs.getCharPref("conf_cd_rip_oupout_dir");
	
	//onglet - LAME
	document.getElementById('conf_lame_mode').parentNode.selectedIndex = prefs.getIntPref("conf_lame_mode");
	document.getElementById('conf_lame_cbr_abr_bitrate').value = prefs.getIntPref("conf_lame_cbr_abr_bitrate");
	document.getElementById('conf_lame_vbr_quality').value = prefs.getIntPref("conf_lame_vbr_quality");
	
	//onglet - VORBIS
	
	
  },
  

  /**
   * Called when the window is about to close
   */
  onUnLoad: function() {
    this._initialized = false;
  },
  

  
  /**
   * Perform extra setup the first time the extension is run
   */
  _firstRunSetup : function() {
	alert("Vous venez d'installer l'addon CD RIP");
  },


  createServicepaneNode: function() {
	  this._servicePaneService =
      Components.classes['@songbirdnest.com/servicepane/service;1']
                .getService(Components.interfaces.sbIServicePaneService);
	try{
	
	var servicesNode = this._servicePaneService.getNode('SB:Services');
    if (!servicesNode) {
      servicesNode = this._servicePaneService.createNode();
      servicesNode.id = 'SB:Services';
      servicesNode.className = 'folder services';
      servicesNode.editable = false;
      servicesNode.name = SBString("servicesource.services");
      servicesNode.setAttributeNS('http://songbirdnest.com/rdf/servicepane#',
                                  'Weight',
                                  1);
      this._servicePaneService.root.appendChild(servicesNode);
    } else {
      servicesNode.hidden = false;
    }

     
	var addonNode = this._servicePaneService.getNode('SB:CdRip');
	if (!addonNode) {
		var myNode = this._servicePaneService.createNode();
		myNode.id = 'SB:CdRip';
		myNode.url = 'chrome://cd-rip/content/mainview.xul';
		myNode.image = 'chrome://cd-rip/skin/node-icon.png';
		myNode.className = 'CdRip';
		myNode.name = 'CD RIP';
		myNode.setAttributeNS('http://songbirdnest.com/rdf/servicepane#',
                          "addonID",
                          "{671e07ef-2dcc-4d5b-be3c-0893f3938397}");

		servicesNode.appendChild(myNode);


  }
  else {
     addonNode.hidden = false;
  }
	} catch (e) {
    Cu.reportError(e);
  }
  },
  
  
};

window.addEventListener("load", function(e) { CdRip.Controller.onLoad(e); }, false);
//window.addEventListener("unload", function(e) { CdRip.Controller.onUnLoad(e); }, false);