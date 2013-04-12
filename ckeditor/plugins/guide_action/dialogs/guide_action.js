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
});