const button = document.getElementById('paste-button');


async function buttonclick() {
    await window.showOpenFilePicker();
}




button.addEventListener('click',

    async function buttonclick() {
        let [fileHandle] = await window.showOpenFilePicker();
        let fileData = await fileHandle.getFile();
        let text = await fileData.text();
        
        const blob = new Blob([text], {type: "text/html"});
        const url = URL.createObjectURL(blob);
        window.open(url);

    }

);