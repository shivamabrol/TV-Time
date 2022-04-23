var linesData = [];
var stopwords = new Set("i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,im,youre,hes,shes,its,were,theyre,ive,youve,weve,theyve,id,youd,hed,shed,wed,theyd,ill,youll,hell,shell,well,theyll,isnt,arent,wasnt,werent,hasnt,havent,hadnt,doesnt,dont,didnt,wont,wouldnt,shant,shouldnt,cant,cannot,couldnt,mustnt,lets,thats,whos,whats,heres,theres,whens,wheres,whys,hows,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall".split(","));
var garakGay = [];
d3.json("data/all_series_lines.json")
    .then(function (da) {
        let ds9 = da.DS9;
        //console.log(da.DS9);
        Object.keys(ds9).forEach(ep => {
            //console.log(ds9[ep]);
            var episode = ds9[ep];

            var number = +ep.substring(
                ep.lastIndexOf(' ') + 1,

            );
            var jakel = "";
            var jake = [];
            episode.JAKE.forEach(d => {
                jakel += " " + d;
            });
            jakel = jakel
                .trim()
                .split(/[\s.]+/g)
                .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                .map((w) => w.replace(/['’]s$/g, ""))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.substring(0, 30))
                .map((w) => w.toLowerCase())
                .filter((w) => w && !stopwords.has(w));
            jake.push(jakel);

            var sisko1 = "";
            var sisko = [];
            episode.SISKO.forEach(d => {
                sisko1 += " " + d;
            });
            sisko1 = sisko1
                .trim()
                .split(/[\s.]+/g)
                .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                .map((w) => w.replace(/['’]s$/g, ""))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.substring(0, 30))
                .map((w) => w.toLowerCase())
                .filter((w) => w && !stopwords.has(w));
            sisko.push(sisko1);

            var odo1 = "";
            var odo = [];
            episode.ODO.forEach(d => {
                odo1 += " " + d;
            });
            odo1 = odo1
                .trim()
                .split(/[\s.]+/g)
                .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                .map((w) => w.replace(/['’]s$/g, ""))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.substring(0, 30))
                .map((w) => w.toLowerCase())
                .filter((w) => w && !stopwords.has(w));
            odo.push(odo1);

            var bashir1 = "";
            var bashir = [];
            episode.BASHIR.forEach(d => {
                bashir1 += " " + d;
            });
            bashir1 = bashir1
                .trim()
                .split(/[\s.]+/g)
                .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                .map((w) => w.replace(/['’]s$/g, ""))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.substring(0, 30))
                .map((w) => w.toLowerCase())
                .filter((w) => w && !stopwords.has(w));
            bashir.push(bashir1);

            var dax1 = "";
            var dax = [];
            episode.DAX.forEach(d => {
                dax1 += " " + d;
            });
            dax1 = dax1
                .trim()
                .split(/[\s.]+/g)
                .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                .map((w) => w.replace(/['’]s$/g, ""))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.substring(0, 30))
                .map((w) => w.toLowerCase())
                .filter((w) => w && !stopwords.has(w));
            dax.push(dax1);

            var obrien1 = "";
            var obrien = [];
            episode.OBRIEN.forEach(d => {
                obrien1 += " " + d;
            });
            obrien1 = obrien1
                .trim()
                .split(/[\s.]+/g)
                .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                .map((w) => w.replace(/['’]s$/g, ""))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.substring(0, 30))
                .map((w) => w.toLowerCase())
                .filter((w) => w && !stopwords.has(w));
            obrien.push(obrien1);

            var quark1 = "";
            var quark = [];
            episode.QUARK.forEach(d => {
                quark1 += " " + d;
            });
            quark1 = quark1
                .trim()
                .split(/[\s.]+/g)
                .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                .map((w) => w.replace(/['’]s$/g, ""))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.substring(0, 30))
                .map((w) => w.toLowerCase())
                .filter((w) => w && !stopwords.has(w));
            quark.push(quark1);


            var kira1 = "";
            var kira = [];
            episode.KIRA.forEach(d => {
                kira1 += " " + d;
            });
            kira1 = kira1
                .trim()
                .split(/[\s.]+/g)
                .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                .map((w) => w.replace(/['’]s$/g, ""))
                .map((w) => w.replace(/'/g, ''))
                .map((w) => w.substring(0, 30))
                .map((w) => w.toLowerCase())
                .filter((w) => w && !stopwords.has(w));
            kira.push(kira1);

            linesData.push({ "episode": number, "char": "jake", "lines": jake });
            linesData.push({ "episode": number, "char": "sisko", "lines": sisko });
            linesData.push({ "episode": number, "char": "odo", "lines": odo });
            linesData.push({ "episode": number, "char": "bashir", "lines": bashir });
            linesData.push({ "episode": number, "char": "dax", "lines": dax });
            linesData.push({ "episode": number, "char": "o'brien", "lines": obrien });
            linesData.push({ "episode": number, "char": "quark", "lines": quark });
            linesData.push({ "episode": number, "char": "kira", "lines": kira });
            if (episode.EZRI == undefined) {
                linesData.push({ "episode": number, "char": "ezri", "lines": [] });

            } else {
                var ezri1 = "";
                var ezri = [];
                episode.EZRI.forEach(d => {
                    ezri1 += " " + d;
                });
                ezri1 = ezri1
                    .trim()
                    .split(/[\s.]+/g)
                    .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                    .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                    .map((w) => w.replace(/['’]s$/g, ""))
                    .map((w) => w.replace(/'/g, ''))
                    .map((w) => w.substring(0, 30))
                    .map((w) => w.toLowerCase())
                    .filter((w) => w && !stopwords.has(w));
                ezri.push(ezri1);
                linesData.push({ "episode": number, "char": "ezri", "lines": ezri });
            }

            if (episode.GARAK == undefined) {

                // garakGay.push({ "year": number, "value": 0 });

            }
            else {
                var garak1 = "";
                var garak = [];
                var gaycount = 0;
                // console.log(episode.GARAK);
                episode.GARAK.forEach(d => {
                    garak1 += " " + d;
                });
                // console.log(garak1);
                garak1 = garak1
                    .trim()
                    .split(/[\s.]+/g)
                    .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
                    .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
                    .map((w) => w.replace(/['’]s$/g, ""))
                    .map((w) => w.replace(/'/g, ''))
                    .map((w) => w.substring(0, 30))
                    .map((w) => w.toLowerCase())
                    .filter((w) => w && !stopwords.has(w));
                //console.log(garak1);
                garak1.forEach(d => {
                    //console.log(d);
                    if (d == "Bashir" || d == "bashir" || d == "Doctor" || d == "Julian" || d == "doctor" || d == "julian") {
                        gaycount += 1;
                    }
                });


                // garakGay.push({ "episode": number, "gayness": gaycount });
                if (gaycount > 0) {
                    garakGay.push({ "year": number, "value": gaycount });
                }
            }
        });
        var allWords = [];
        linesData.filter(d => d.char == "kira").forEach(d => {
            //allWords = allWords.concat(d.lines);
            //allWords.push(d.lines.forEach(w=>w));
            d.lines.forEach(w => {
                // allWords.push(w);
                allWords = allWords.concat(w);
            });
        });
        lines = new LineChart({
            'parentElement': '#garakGay',
            'containerHeight': 350,
            'containerWidth': 1000
        }, garakGay);
        lines.tp = '#tooltip5';
        lines.svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -(lines.height / 2))
            .attr("y", 15)
            .style("text-anchor", "middle")
            .text('Gayness');
        lines.svg.append("text")
            .attr("x", lines.width / 2)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .style("font-size", "16px")
            .style("fill", "white")
            .text('How Gay is Garak?');
        lines.svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("x", lines.width)
            .attr("y", lines.height - 6)
            .text('episodes');
    });
//console.log(linesData);
d3.select('#chars').on('change', function () {

});
// d3.csv("/data/all_scripts.csv", function(data) {

//     // // console.log((data['Episode']))
//     data.forEach(d => {
//         // console.log(d)
//     })

// });


//Goal C: 3rd part - Shivam




// d3.csv('data/all_scripts.csv')
//     .then(data => {
//         let episode = (data[0].DS9)
//         // // console.log(episode)

//         let scenes = (episode.split(/\n\[.*\]\n\n/))
//         // // console.log(episode.split('\n\[.*\]\n\n'))
//         let scene = scenes[23]
//         // console.log(scene)
//         let dialogue = scene.split(/[A-Z]+:/)
//         dialogue.shift()
//         // console.log(dialogue)

//         //Regular expression with the /g flag
//         const regex = /[A-Z]+:/g;
//         //Reference string
//         //Using matchAll() method
//         const array = [...scene.matchAll(regex)];

//         // console.log(array.length);
//         // console.log(array[1][0]);
//         // console.log(array[2][0]);

//     })


function getSceneInfo(season, episode) {
    d3.json("data/all_scripts_raw.json").then(data => {
        for (let i = 0; i < 170; i++) {
            let episode = data['DS9']['episode ' + String(i)];
            let scenes = (episode.split(/\n\[.*\]\n\n/));
            for (let j = 0; j < scenes.length; j++) {
                let scene = scenes[j];
                let dialogue = scene.split(/[A-Z]+:/)
                dialogue.shift()
                const regex = /[A-Z]+:/g;
                //Reference string
                //Using matchAll() method
                let chars = [...scene.matchAll(regex)];
            }

            break;
        }
    })

}


function changeSeason(id, value) {
    console.log(id)
    if (value.length == 0) {
        document.getElementById("episode_" + id + "_id").innerHTML = "<option></option>";
    }

    // 1	20	
    // 2	26	
    // 3	26	
    // 4	26	
    // 5	26
    // 6	26	
    // 7	26 
    else {
        document.getElementById("episode_" + id + "_id").innerHTML = "";

        var episode = ""
        var episode_count = 0
        if (value == 1) {
            episode_count = 20
        } else {
            episode_count = 26
        }
        for (let a = 1; a <= episode_count; a++) {
            episode += "<option>" + a + "</option>";
        }

        document.getElementById("episode_" + id + "_id").innerHTML = episode;


    }
}

function charSelect(value) {
    console.log(value)

    d3.json("data/all_series_lines.json").then(data => {
        let epCounter = [];
        epCounter[0] = 0;

        let epLines = [];
        epLines[0] = 0;

        let seasonLines = [0, 0, 0, 0, 0, 0, 0, 0];

        let seasonChecker = [0, 0, 0, 0, 0, 0, 0];

        let lineData = [];
        let bar1Data = [];
        let bar2Data = [];

        for (let id = 1; id <= 172; id++) {
            // console.log(episode_no - 1)
            let episode_data = ((data['DS9']['episode ' + String(id)]))
            let speakers = Object.keys(episode_data);

            if (speakers.includes(value.toUpperCase())) {
                // all pairs (label, frequencies) to an array of arrays(2)
                epLines[id] = 0;

                for (var key in episode_data) {
                    if (episode_data.hasOwnProperty(key) && key == value.toUpperCase()) {
                        epLines[id] += episode_data[key].length;
                    }
                }
                if (epLines[id] > 0) {
                    epCounter[id] = epCounter[id - 1] + 1
                    seasonChecker[Math.ceil(id / 26)] = 1;
                    seasonLines[Math.ceil(id / 26)] += epLines[id];
                }
                else {
                    epCounter[id] = epCounter[id - 1];
                    epLines[id] = 0;
                }
            }
            else {
                epCounter[id] = epCounter[id - 1];
                epLines[id] = 0;
            }
            lineData.push({ "year": id, "value": epCounter[id] });
            bar1Data.push({ key: id, value: epLines[id] });
        }


        var seasonInfo = document.getElementById('SeasonInfo');
        let seasonStr = "Appears in season(s)";

        for (let i = 1; i <= 7; i++) {
            bar2Data.push({ key: i, value: seasonLines[i] });
            if (seasonChecker[i] == 1) {
                seasonStr = seasonStr + " " + String(i) + ",";
            }
        }
        seasonStr = seasonStr.substring(0, seasonStr.length - 1)
        seasonInfo.innerHTML = seasonStr;
        seasonInfo.style.display = "inline";

        var svg = d3.select("svg#charChart1");
        svg.selectAll("*").remove();
        var svg = d3.select("svg#charChart2");
        svg.selectAll("*").remove();
        var svg = d3.select("svg#charChart3");
        svg.selectAll("*").remove();

        console.log(lineData)
        let line1 = new LineChart({
            'parentElement': '#charChart1',
            'containerHeight': 350,
            'containerWidth': 1000
        }, lineData);

        let bar1 = new BarChart({
            'parentElement': '#charChart2',
            'containerHeight': 350,
            'containerWidth': 1000
        }, bar1Data, false);

        let bar2 = new BarChart({
            'parentElement': '#charChart3',
            'containerHeight': 350,
            'containerWidth': 1000
        }, bar2Data);
    })

}

function changeEpisode(id, value) {

    d3.json("data/all_series_lines.json").then(data => {
        let episode_no = 0,
            season = document.getElementById("season_" + id + "_id").value;
        episode_no = parseInt(season - 1) * 26 + parseInt(value);

        console.log(episode_no)


        // console.log(episode_no - 1)
        let episode_data = ((data['DS9']['episode ' + String(episode_no)]))
        let speakers = Object.keys(episode_data)
        let max = -1;
        let index = "";
        let characters_who_spoke = []

        let chartData = []

        for (let a = 0; a < speakers.length; a++) {

            if (episode_data[speakers[a]].length > 0) {
                // console.log(speakers[a]) // speakers 
                characters_who_spoke.push(speakers[a]);
                if (episode_data[speakers[a]].length > max) {
                    max = episode_data[speakers[a]].length
                    index = speakers[a]
                }
            }
        }

        for (let a = 0; a < speakers.length; a++) {
            if (episode_data[speakers[a]].length > 0) {
                chartData.push({
                    key: speakers[a],
                    value: episode_data[speakers[a]].length
                });
            }
        }

        // console.log(chartData)


        var node = document.getElementById('characters_and_dialogue_' + id);
        var newNode = document.createElement('p');

        newNode.setAttribute("id", "box_vals");

        node.innerHTML = ""
        // newNode.appendChild(document.createTextNode('Characters who spoke in this episdoe are ' + characters_who_spoke));
        // document.write("<br>");

        newNode.appendChild(document.createTextNode(' Character who spoke the most is ' + index));


        node.appendChild(newNode);

        var img = document.createElement('img');
        img.src = 'images/' + index.toLowerCase() + '.jpeg';
        // document.getElementById('characters_and_dialogue_' + id).appendChild(img)
        document.getElementById('characters_and_dialogue_' + id).appendChild(img)

        // console.log(characters_who_spoke)
        // console.log(index.toLowerCase())

        // console.log(index);
        var svg = d3.select("svg#barChart" + id);
        svg.selectAll("*").remove();


        //-----------Bar Chart-------------------

        let barTimeYear = new BarChart({
            'parentElement': '#barChart' + id,
            'containerHeight': 350,
            'containerWidth': 600
        }, chartData);


    })

}



function chordDiagram2() {


    let matrix1 = [[0, 63, 54, 73, 32, 63, 39, 73, 0, 0],
    [63, 0, 38, 42, 17, 32, 39, 46, 0, 0],
    [54, 38, 0, 49, 15, 33, 28, 52, 0, 0],
    [73, 42, 49, 0, 13, 54, 26, 58, 0, 0],
    [32, 17, 15, 13, 0, 15, 18, 17, 0, 0],
    [63, 32, 33, 54, 15, 0, 26, 56, 0, 0],
    [39, 39, 28, 26, 18, 26, 0, 31, 0, 0],
    [73, 46, 52, 58, 17, 56, 31, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    let matrix2 =
        [[0, 47, 45, 52, 18, 52, 37, 55, 0, 0],
        [47, 0, 42, 38, 13, 39, 34, 43, 0, 0],
        [45, 42, 0, 35, 11, 42, 33, 41, 0, 0],
        [52, 38, 35, 0, 15, 45, 31, 48, 0, 0],
        [18, 13, 11, 15, 0, 15, 12, 15, 0, 0],
        [52, 39, 42, 45, 15, 0, 30, 48, 0, 0],
        [37, 34, 33, 31, 12, 30, 0, 35, 0, 0],
        [55, 43, 41, 48, 15, 48, 35, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    let matrix3 =
        [[0, 43, 45, 44, 17, 48, 32, 49, 4, 0],
        [43, 0, 40, 39, 12, 37, 32, 43, 4, 0],
        [45, 40, 0, 42, 12, 40, 29, 43, 4, 0],
        [44, 39, 42, 0, 13, 37, 28, 42, 4, 0],
        [17, 12, 12, 13, 0, 13, 12, 12, 0, 0],
        [48, 37, 40, 37, 13, 0, 28, 43, 4, 0],
        [32, 32, 29, 28, 12, 28, 0, 30, 2, 0],
        [49, 43, 43, 42, 12, 43, 30, 0, 4, 0],
        [4, 4, 4, 4, 0, 4, 2, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    let matrix4 =
        [[0, 44, 43, 43, 16, 54, 28, 46, 50, 0],
        [44, 0, 32, 30, 12, 36, 31, 37, 37, 0],
        [43, 32, 0, 32, 12, 36, 26, 38, 32, 0],
        [43, 30, 32, 0, 11, 42, 28, 35, 45, 0],
        [16, 12, 12, 11, 0, 10, 7, 10, 10, 0],
        [54, 36, 36, 42, 10, 0, 29, 42, 47, 0],
        [28, 31, 26, 28, 7, 29, 0, 31, 27, 0],
        [46, 37, 38, 35, 10, 42, 31, 0, 41, 0],
        [50, 37, 32, 45, 10, 47, 27, 41, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    let matrix5 =
        [[0, 48, 47, 57, 20, 48, 25, 46, 40, 0],
        [48, 0, 35, 40, 15, 34, 24, 32, 30, 0],
        [47, 35, 0, 41, 16, 40, 22, 34, 34, 0],
        [57, 40, 41, 0, 13, 42, 21, 36, 40, 0],
        [20, 15, 16, 13, 0, 12, 12, 12, 9, 0],
        [48, 34, 40, 42, 12, 0, 24, 37, 36, 0],
        [25, 24, 22, 21, 12, 24, 0, 19, 22, 0],
        [46, 32, 34, 36, 12, 37, 19, 0, 33, 0],
        [40, 30, 34, 40, 9, 36, 22, 33, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    let matrix6 =
        [[0, 37, 43, 41, 27, 35, 28, 47, 38, 5],
        [37, 0, 36, 33, 18, 32, 28, 40, 31, 4],
        [43, 36, 0, 34, 19, 38, 30, 37, 38, 4],
        [41, 33, 34, 0, 12, 32, 26, 35, 35, 0],
        [27, 18, 19, 12, 0, 16, 14, 23, 14, 4],
        [35, 32, 38, 32, 16, 0, 28, 32, 34, 4],
        [28, 28, 30, 26, 14, 28, 0, 26, 27, 4],
        [47, 40, 37, 35, 23, 32, 26, 0, 34, 4],
        [38, 31, 38, 35, 14, 34, 27, 34, 0, 4],
        [5, 4, 4, 0, 4, 4, 4, 4, 4, 0]];

    let matrix7 =
        [[0, 35, 41, 0, 10, 34, 26, 33, 30, 42],
        [35, 0, 32, 0, 7, 28, 19, 35, 24, 32],
        [41, 32, 0, 0, 8, 37, 26, 32, 28, 44],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [10, 7, 8, 0, 0, 6, 5, 6, 7, 9],
        [34, 28, 37, 0, 6, 0, 23, 27, 25, 35],
        [26, 19, 26, 0, 5, 23, 0, 22, 17, 25],
        [33, 35, 32, 0, 6, 27, 22, 0, 25, 30],
        [30, 24, 28, 0, 7, 25, 17, 25, 0, 30],
        [42, 32, 44, 0, 9, 35, 25, 30, 30, 0]];
    let season = document.getElementById('season_2_chord_id')
    let day;
    switch (parseInt(season.value)) {
        case 1:
            day = matrix1;
            break;
        case 2:
            day = matrix2;
            break;
        case 3:
            day = matrix3;
            break;
        case 4:
            day = matrix4;
            break;
        case 5:
            day = matrix5;
            break;
        case 6:
            day = matrix6;
            break;
        case 7:
            day = matrix7;
            break;
        default:
            break;
    }
    console.log(day)


    var svg = d3.select("svg#new_chord_2");
    svg.selectAll("*").remove();

    let chord2 = new Chord({
        'parentElement': '#new_chord_2',
        'containerHeight': 700,
        'containerWidth': 700,
        'tp': 'tooltip1'
    }, day);
}

function chordDiagram() {

    let matrix1 = [[0, 63, 54, 73, 32, 63, 39, 73, 0, 0],
    [63, 0, 38, 42, 17, 32, 39, 46, 0, 0],
    [54, 38, 0, 49, 15, 33, 28, 52, 0, 0],
    [73, 42, 49, 0, 13, 54, 26, 58, 0, 0],
    [32, 17, 15, 13, 0, 15, 18, 17, 0, 0],
    [63, 32, 33, 54, 15, 0, 26, 56, 0, 0],
    [39, 39, 28, 26, 18, 26, 0, 31, 0, 0],
    [73, 46, 52, 58, 17, 56, 31, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    let matrix2 =
        [[0, 47, 45, 52, 18, 52, 37, 55, 0, 0],
        [47, 0, 42, 38, 13, 39, 34, 43, 0, 0],
        [45, 42, 0, 35, 11, 42, 33, 41, 0, 0],
        [52, 38, 35, 0, 15, 45, 31, 48, 0, 0],
        [18, 13, 11, 15, 0, 15, 12, 15, 0, 0],
        [52, 39, 42, 45, 15, 0, 30, 48, 0, 0],
        [37, 34, 33, 31, 12, 30, 0, 35, 0, 0],
        [55, 43, 41, 48, 15, 48, 35, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    let matrix3 =
        [[0, 43, 45, 44, 17, 48, 32, 49, 4, 0],
        [43, 0, 40, 39, 12, 37, 32, 43, 4, 0],
        [45, 40, 0, 42, 12, 40, 29, 43, 4, 0],
        [44, 39, 42, 0, 13, 37, 28, 42, 4, 0],
        [17, 12, 12, 13, 0, 13, 12, 12, 0, 0],
        [48, 37, 40, 37, 13, 0, 28, 43, 4, 0],
        [32, 32, 29, 28, 12, 28, 0, 30, 2, 0],
        [49, 43, 43, 42, 12, 43, 30, 0, 4, 0],
        [4, 4, 4, 4, 0, 4, 2, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    let matrix4 =
        [[0, 44, 43, 43, 16, 54, 28, 46, 50, 0],
        [44, 0, 32, 30, 12, 36, 31, 37, 37, 0],
        [43, 32, 0, 32, 12, 36, 26, 38, 32, 0],
        [43, 30, 32, 0, 11, 42, 28, 35, 45, 0],
        [16, 12, 12, 11, 0, 10, 7, 10, 10, 0],
        [54, 36, 36, 42, 10, 0, 29, 42, 47, 0],
        [28, 31, 26, 28, 7, 29, 0, 31, 27, 0],
        [46, 37, 38, 35, 10, 42, 31, 0, 41, 0],
        [50, 37, 32, 45, 10, 47, 27, 41, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    let matrix5 =
        [[0, 48, 47, 57, 20, 48, 25, 46, 40, 0],
        [48, 0, 35, 40, 15, 34, 24, 32, 30, 0],
        [47, 35, 0, 41, 16, 40, 22, 34, 34, 0],
        [57, 40, 41, 0, 13, 42, 21, 36, 40, 0],
        [20, 15, 16, 13, 0, 12, 12, 12, 9, 0],
        [48, 34, 40, 42, 12, 0, 24, 37, 36, 0],
        [25, 24, 22, 21, 12, 24, 0, 19, 22, 0],
        [46, 32, 34, 36, 12, 37, 19, 0, 33, 0],
        [40, 30, 34, 40, 9, 36, 22, 33, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    let matrix6 =
        [[0, 37, 43, 41, 27, 35, 28, 47, 38, 5],
        [37, 0, 36, 33, 18, 32, 28, 40, 31, 4],
        [43, 36, 0, 34, 19, 38, 30, 37, 38, 4],
        [41, 33, 34, 0, 12, 32, 26, 35, 35, 0],
        [27, 18, 19, 12, 0, 16, 14, 23, 14, 4],
        [35, 32, 38, 32, 16, 0, 28, 32, 34, 4],
        [28, 28, 30, 26, 14, 28, 0, 26, 27, 4],
        [47, 40, 37, 35, 23, 32, 26, 0, 34, 4],
        [38, 31, 38, 35, 14, 34, 27, 34, 0, 4],
        [5, 4, 4, 0, 4, 4, 4, 4, 4, 0]];

    let matrix7 =
        [[0, 35, 41, 0, 10, 34, 26, 33, 30, 42],
        [35, 0, 32, 0, 7, 28, 19, 35, 24, 32],
        [41, 32, 0, 0, 8, 37, 26, 32, 28, 44],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [10, 7, 8, 0, 0, 6, 5, 6, 7, 9],
        [34, 28, 37, 0, 6, 0, 23, 27, 25, 35],
        [26, 19, 26, 0, 5, 23, 0, 22, 17, 25],
        [33, 35, 32, 0, 6, 27, 22, 0, 25, 30],
        [30, 24, 28, 0, 7, 25, 17, 25, 0, 30],
        [42, 32, 44, 0, 9, 35, 25, 30, 30, 0]];

    let season = document.getElementById('season_1_chord_id')
    let day;
    switch (parseInt(season.value)) {
        case 1:
            day = matrix1;
            break;
        case 2:
            day = matrix2;
            break;
        case 3:
            day = matrix3;
            break;
        case 4:
            day = matrix4;
            break;
        case 5:
            day = matrix5;
            break;
        case 6:
            day = matrix6;
            break;
        case 7:
            day = matrix7;
            break;
        default:
            break;
    }
    var svg = d3.select("svg#new_chord");
    svg.selectAll("*").remove();
    let chord = new Chord({
        'parentElement': '#new_chord',
        'containerHeight': 1000,
        'containerWidth': 1000,
        'tp': 'tooltip2'
    }, day);

}