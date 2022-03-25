async function askserver(){
    const response = await fetch('https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb');
    const data = await response.json();

    text=""
    for (let i = 0; i < data.lines.line.length; i++) {
        text +="<li onclick=\"setInfo("+data.lines.line[i].id+")\">"+data.lines.line[i].name+"</li>";
    }

    document.querySelector('#Desc').innerHTML = "Liste des lignes";
    document.querySelector('#furtive').innerHTML = text;
}

async function setInfo(val){
    const response = await fetch('https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId='+val);
    const data = await response.json();

    text = "";
    for (let i = 0; i < data.physicalStops.physicalStop.length; i++) {
        text +="<li onclick=\"setInfoPoint("+data.physicalStops.physicalStop[i].id+")\">"+data.physicalStops.physicalStop[i].name+"</li>";
    }

    document.querySelector('#Desc').innerHTML = "Liste des arrets";
    document.querySelector('#furtive').innerHTML = text;
}

async function setInfoPoint(val){
    const response = await fetch('https://api.tisseo.fr/v1/stops_schedules.json?key=a3732a1074e2403ce364ad6e71eb998cb&stopPointId='+val);
    const data = await response.json();

    text = "";
    for (let i = 0; i < data.departures.departure.length; i++) {
        text +="<li>"+data.departures.departure[i].dateTime+"</li>";
    }
    document.querySelector('#Desc').innerHTML = "Liste des horaires";
    document.querySelector('#furtive').innerHTML = text;
}