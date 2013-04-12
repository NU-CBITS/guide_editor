/**
 * Basic sample plugin inserting abbreviation elements into CKEditor editing area.
 *
 * Created out of the CKEditor Plugin SDK:
 * http://docs.ckeditor.com/#!/guide/plugin_sdk_sample_1
 */

// Register the plugin within the editor.

addGuideActionPluginToCKE = function() {

  CKEDITOR.plugins.add( 'guide_action', {

  	// Register the icons.
  	icons: 'guide_action',

  	// The plugin initialization logic goes inside this method.
  	init: function( editor ) {

  		// Define an editor command that opens our dialog.
  		editor.addCommand( 'guide_action', new CKEDITOR.dialogCommand( 'guideActionDialog' ) );

  		// Create a toolbar button that executes the above command.
  		editor.ui.addButton( 'Abbr', {

  			// The text part of the button (if available) and tooptip.
  			label: 'Insert A Guide-Action Button',

  			// The command to execute on click.
  			command: 'guide_action',

  			// The button placement in the toolbar (toolbar group name).
  			toolbar: 'insert'
  		}

  		// Register our dialog file. this.path is the plugin folder path.
  		CKEDITOR.dialog.add( 'guideActionDialog', function( editor ) {
          
          return {
              title: 'Create a Guide Action',
              minWidth: 300,
              minHeight: 400,
              contents: [
                  {
                      id: 'props',
                      label: 'Button Properties',
                      elements: [
                          {
                              id: 'button_text',
                              label: 'Button Text',
                              type: 'text',
                              validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty" )
                          },
                          {
                              id: 'action',
                              label: 'Button Action',
                              type: 'select',
                              options: ['blind', 'bounce', 'clip', 'drop', 'explode', 'fade', 'fold', 'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide', 'transfer' ],
                          }
                      ]
                  }
              ],
              onOk: function() {
                  var dialog = this;

                  var button = editor.document.createElement( 'button' {
                      id: _.uniqueId('action-'),
                      class: "guide-action",
                      "data-action": dialog.getValueOf( 'props', 'action' )
                  });
                  button.setText( dialog.getValueOf( 'props', 'button_text' ) );
                  editor.insertElement( button );
              }
          };

      }); // dialog.add

  	} // init

  }); // plugins.add

};

