// site-wide-stuff.js


setSiteWideStuff = function() {

  // userSelect = new Dynamo.InputGroupView({
  //   id: "admin_user_select",
  //   attributes: {
  //     class: "admin_dialog"
  //   },
  //   getValue: function() {
  //     return Dynamo.CURRENT_USER_ID
  //   },
  //   setValue: function(new_value) {
  //     Dynamo.CURRENT_USER_ID = new_value;
  //     this.trigger('value:set');
  //   },
  //   responseType: "radio",
  //   responseValues: [{
  //     label: "Testy",
  //     value: "TEST-USER-GUID"
  //   },{
  //     label: "foodNinja",
  //     value: "TEST-USER-GUID-2"
  //   },{
  //     label: "violaMars",
  //     value: "TEST-USER-GUID-3"
  //   },{
  //     label: "racer21",
  //     value: "TEST-USER-GUID-4"
  //   }]
  // });

  // userSelect.$el.prependTo('body');
  // userSelect.render();

};


initializeLoadAndThen = function(callback) {

  Dynamo.CURRENT_USER_ID = 'TEST-USER-GUID';

  xel_base_request = $.get( addSessionVarsToUrl(Dynamo.TriremeURL+'/xelements/xelement_base') );

  XELEMENTS = new Dynamo.XelementCollection();

  $.when( xel_base_request ).done(function() {

    XELEMENT_BASE = new Backbone.Model(convertFalses(JSON.parse(JSON.parse(xel_base_request.responseText).xel_data_values.content)));

    XELEMENTS.fetch({async: false});

    //WARNING NOTE ABOUT FOLLOWING SYNTAX: 
    //  XELEMENTS.filter(function(xel) {
    //    return (xel.get_field_value("xelement_type") == "[desired_type]")
    //  }));
    // will NOT work in these circumstances where we want to define
    // a collection by using the elements from XELEMENTS
    // b/c we need each xelement to be re-cast as it's appropriate class
    // (as opposed to being just the generic XELEMENTS class)
    // hence the creation of new model objects from xel.attributes!

    SLIDES = new SlideCollection(XELEMENTS.chain().map(function(xel) {
      if (xel.get_field_value("xelement_type") == "static_html") {
        return (new SlideModel(xel.attributes))
      };
    }).compact().value());

    GUIDES = new GuideCollection(XELEMENTS.chain().map(function(xel) {
      if (xel.get_field_value("xelement_type") == "guide") {
        return (new GuideModel(xel.attributes))
      };
    }).compact().value());

    // setSiteWideStuff();
    // userSelect.on('value:set', callback);
    callback();

  });

};