/**
 * Created by peijia on 11/10/2016.
 */
'use strict';
export class BlockUiService{
    blockUI():void{
        $.blockUI({
            message: `<span class="mif-spinner mif-ani-spin mif-4x"></span>`,
            css:{
                border: 'none',
                backgroundColor: 'transparent',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
            }
        });
    }
    unBlockUI():void{
        $.unblockUI();
    }
}