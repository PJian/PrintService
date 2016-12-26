/**
 * Created by peijia on 11/10/2016.
 */
'use strict';
class BlockUiService {
    blockUI() {
        $.blockUI({
            message: `<span class="mif-spinner mif-ani-spin mif-4x"></span>`,
            css: {
                border: 'none',
                backgroundColor: 'transparent',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
            }
        });
    }
    unBlockUI() {
        $.unblockUI();
    }
}
exports.BlockUiService = BlockUiService;
//# sourceMappingURL=BlockUiService.js.map