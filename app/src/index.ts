import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { Widget } from '@lumino/widgets';

import {IStatusBar} from '@jupyterlab/statusbar';

/**
 * Initialization data for the hello-world extension.
 */

const extension: JupyterFrontEndPlugin<void> = {
  id: 'hello-world',
  autoStart: true,
  requires: [IStatusBar],
  activate: (app: JupyterFrontEnd, statusbar: IStatusBar) => {
    const statusWidget = new Widget();
    //let statusbar = new IStatusBar()
    //statusbar.id = "new-statusbar"
    statusWidget.node.textContent = 'Test'
    //const statusbar = new StatusBar()
    statusbar.registerStatusItem('test-item', {align: 'middle', item: statusWidget})
  }
};

export default extension;
