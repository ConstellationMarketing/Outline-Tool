function setFolderID(folder_id) {
    const folder_status = checkFolder(folder_id)
    if (folder_status) {
        PropertiesService.getScriptProperties().setProperty(_property_name, folder_id)
        return true
    } else {
        return false
    }
}


function checkFolder(folder_id) {
    try {
        DriveApp.getFolderById(folder_id)
        return true
    } catch (e) {
        return false
    }
}

function getFolderIdFromProps() {
    const folder_id = PropertiesService.getScriptProperties().getProperty(_property_name)
    const id_checked = checkFolder(folder_id)
    if (id_checked) {
        return folder_id
    } else {
        return false
    }
}
