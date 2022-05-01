const app = document.getElementById('app');

let page_servername;
let page_mapname;
let neededfiles;
let downloading_file;
let page_status;

function GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language) {
    page_servername = servername;
    page_mapname = mapname;
}

function DownloadingFile(fileName) {
    downloading_file = fileName;
}

function SetStatusChanged(status) {
    page_status = status;
}

function SetFilesNeeded(needed) {
    neededfiles = needed;
}

const page = (
    <div className="container">
        <h1>Привіт!</h1>
        <p>Ласкаво просимо на {page_servername}</p>
        <p>Поточна мапа: {page_mapname}</p>
        <p>Залишилось завантажити {neededfiles} файлів</p>
        <p>Завантажується: <code>{downloading_file}</code></p>
        <p>Статус: {page_status}</p>
    </div>
)

ReactDOM.render(page, app);