// MY FUNCTION
function bulan(b){
    let bln = '';
    if(b == '01'){
        bln = 'Januari';
    }else if(b == '02'){
        bln = 'Februari';
    }else if(b == '03'){
        bln = 'Maret';
    }else if(b == '04'){
        bln = 'April';
    }else if(b == '05'){
        bln = 'Mei';
    }else if(b == '06'){
        bln = 'Juni';
    }else if(b == '07'){
        bln = 'Juli';
    }else if(b == '08'){
        bln = 'Agustus';
    }else if(b == '09'){
        bln = 'September';
    }else if(b == '10'){
        bln = 'Oktober';
    }else if(b == '11'){
        bln = 'November';
    }else if(b == '12'){
        bln = 'Desember';
    }
    return bln;
}
// MY FUNCTION

// WEATHER
let wUrl = 'https://cuaca-gempa-rest-api.vercel.app/weather/gorontalo';
let tanggal = document.getElementById('tanggal');
let jam = document.getElementById('jam');
let kabupaten = document.getElementById('kabupaten');

async function getQuake() {
    try {
        let response = await fetch(wUrl);
        let result = await response.json();
        let issue = result.data.issue;
        let areas = result.data.areas;
        tanggal.innerHTML = `<i class="bi bi-calendar3"></i> ${issue.day} ${bulan(issue.month)} ${issue.year}`;
        jam.innerHTML = `<i class="bi bi-clock"></i> ${issue.hour}:${issue.minute}:${issue.second}`;
        let row = '';

        // Kabupaten
        areas.forEach((a) => {
            let kab = a.description;
            let name = a.params[6].times[0].name;
            let cel = `${a.params[4].times[0].celcius} - ${a.params[2].times[0].celcius}`;
            let fah = `(${a.params[4].times[0].fahrenheit} - ${a.params[2].times[0].fahrenheit})`;
            let crd = a.longitude + ', ' + a.latitude;
            row += `<div class="col-6">
                        <div class="card mb-3 shadow">
                            <div class="card-header p-2 text-center">
                                <h5 class="h5 m-0 fw-bold text-capitalize">${kab}</h5>
                            </div>
                            <div class="card-body">
                                <div class="text-center mb-3">
                                    <i class="bi bi-cloud fs-1 fw-bold"></i>
                                    <span class="d-block">${name}</span>
                                </div>
                                <h1 class="h1 fw-bold text-center">${cel}</h1>
                                <h3 class="h3 text-secondary text-center">${fah}</h3>
                            </div>
                            <div class="card-footer d-flex align-items-center justify-content-between p-2">
                                <span class="m-0">${crd}</span>
                                <a href="" class="btn btn-sm btn-outline-dark">Detail</a>
                            </div>
                        </div>
                    </div>`;
        });
        
        kabupaten.innerHTML = row;
        console.log(areas);
    } catch (error) {
        console.log(error);
    }
}

getQuake();