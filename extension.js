const Main = imports.ui.main;

function init() {} // Empty

function enable() { // Code Stolen from Just Perfection (Thank you)
    let Monitor = Main.layoutManager.primaryMonitor;

    if (Monitor) {
        Main.layoutManager.panelBox.set_position(
            Monitor.x,
            Monitor.y + Monitor.height - Main.panel.height
        );
    }
}

function disable() {}
