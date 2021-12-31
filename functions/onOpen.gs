function onOpen() {
    const ui = SpreadsheetApp.getUi()
    const menu = ui.createMenu('Script')
    menu.addItem('Create Document', 'showCreatedDialog')
    menu.addItem('Define Folder', 'showSetFolderIdDialog')
    menu.addToUi()
}

