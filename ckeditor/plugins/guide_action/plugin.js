/**
 * Basic sample plugin inserting abbreviation elements into CKEditor editing area.
 *
 * Created out of the CKEditor Plugin SDK:
 * http://docs.ckeditor.com/#!/guide/plugin_sdk_sample_1
 */

// Register the plugin within the editor.

// addGuideActionPluginToCKE = function() {

CKEDITOR.plugins.add( 'guide_action', {

	// Register the icons.
	icons: 'guide_action',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		// Define an editor command that opens our dialog.
		editor.addCommand( 'guide_action', new CKEDITOR.dialogCommand( 'guideActionDialog' ) );

		// Create a toolbar button that executes the above command.
		editor.ui.addButton( 'guide_action', {

			// The text part of the button (if available) and tooptip.
			label: 'Insert A Guide-Action Button',

			// The command to execute on click.
			command: 'guide_action',

			// The button placement in the toolbar (toolbar group name).
			toolbar: 'insert'
		});

		// Register our dialog file. this.path is the plugin folder path.
		CKEDITOR.dialog.add( 'guideActionDialog', this.path + 'dialogs/guide_action.js' ); // dialog.add

	} // init

}); // plugins.add

// };

