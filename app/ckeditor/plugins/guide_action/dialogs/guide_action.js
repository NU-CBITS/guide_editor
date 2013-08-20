CKEDITOR.dialog.add('guideActionDialog', function( editor ) {
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
                        id: 'label',
                        label: 'Button Text',
                        type: 'text',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Abbreviation field cannot be empty" )
                    },
                    {
                        id: 'effect',
                        label: 'Button Effect',
                        type: 'select',
                        items: [
                            ['blind'], ['bounce'], ['clip'], ['drop'], ['explode'], 
                            ['fade'], ['fold'], ['highlight'], ['puff'], ['pulsate'], 
                            ['scale'], ['shake'], ['size'], ['slide'], ['transfer'] 
                        ],
                        default: 'pulsate'
                    },
                    {
                        id: 'duration',
                        label: 'Action Duration (in ms)',
                        type: 'text',
                        default: '400'
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;

            var button = editor.document.createElement('button', {
                class: "guide-action",
                "data-ckEditor_id": _.uniqueId("ck-"),
                "data-label" : dialog.getValueOf( 'props', 'label' ),
                "data-effect": dialog.getValueOf( 'props', 'effect' ),
                "data-duration": dialog.getValueOf( 'props', 'duration' )
            });
            button.addClass("guide-action");
            button.data("label", dialog.getValueOf( 'props', 'label' ));
            button.data("ckEditor_id", _.uniqueId("ck-"));
            button.data("effect", dialog.getValueOf( 'props', 'effect' ) );
            button.data("duration", dialog.getValueOf( 'props', 'duration' ) );
            button.setText( dialog.getValueOf( 'props', 'label' ) );

            editor.insertElement( button );
        }
    };
});