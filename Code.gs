const _col_names = {
    Title: 'Title',
    Param: 'Param'
}

const _property_name = 'folder_id'

function startReplacer() {
    const folder_id = getFolderIdFromProps()
    if (!folder_id) {
        showSetFolderIdDialog()
        return
    }
    try {
        const sheetData = getSheetData(SpreadsheetApp.getActiveSpreadsheet(), 'Replacer')

        const doc = createDoc('startReplacer_temp_file', folder_id)

        const doc_body = doc.getBody()
        for (const row_obj of sheetData.Obj) {
            formatRow(row_obj, doc_body)
        }

        doc.setName(upFirstLetters(sheetData.Obj[0][_col_names.Title]))
        doc.saveAndClose()

        return doc.getId()
    } catch (e) {
        return false
    }
}

function upFirstLetters(text) {
    return text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}

function formatRow(row_obj, doc_body) {
    const row_title = upFirstLetters(row_obj[_col_names.Title])

    const Heading = DocumentApp.ParagraphHeading
    switch (row_obj[_col_names.Param]) {
        case 'h1':
            doc_body.appendParagraph(row_title).setHeading(Heading.HEADING1)
            break
        case 'h2':
            doc_body.appendParagraph(row_title).setHeading(Heading.HEADING2)
            break
        case 'h3':
            doc_body.appendParagraph(row_title).setHeading(Heading.HEADING3)
            break
        case 'h4':
            doc_body.appendParagraph(row_title).setHeading(Heading.HEADING4)
            break
        case 'h5':
            doc_body.appendParagraph(row_title).setHeading(Heading.HEADING5)
            break
        case 'h6':
            doc_body.appendParagraph(row_title).setHeading(Heading.HEADING6)
            break
        case 'title':
            doc_body.appendParagraph(row_title).setHeading(Heading.TITLE)
            break
        case 'subtitle':
            doc_body.appendParagraph(row_title).setHeading(Heading.SUBTITLE)
            break
        default:
            break
    }
}


function createDoc(doc_name, folder_id) {
    const doc = DocumentApp.create(doc_name)
    const doc_id = doc.getId()
    const doc_file = DriveApp.getFileById(doc_id)
    DriveApp.getFolderById(folder_id).addFile(doc_file);
    DriveApp.getRootFolder().removeFile(doc_file)
    return DocumentApp.openById(doc_id)
}
