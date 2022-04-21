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
                if (gaycount>0){
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

function chordDiagram() {


    const matrix = [[0, 323, 326, 319, 146, 0, 223, 358, 167, 49],
    [323, 0, 261, 227, 97, 0, 214, 283, 130, 38],
    [326, 261, 0, 240, 98, 0, 202, 285, 142, 50],
    [319, 227, 240, 0, 82, 0, 167, 262, 128, 0],
    [146, 97, 98, 82, 0, 0, 84, 99, 43, 14],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [223, 214, 202, 167, 84, 0, 0, 203, 101, 31],
    [358, 283, 285, 262, 99, 0, 203, 0, 144, 36],
    [167, 130, 142, 128, 43, 0, 101, 144, 0, 36],
    [49, 38, 50, 0, 14, 0, 31, 36, 36, 0]];

    let chord = new Chord({
        'parentElement': '#my_datavis',
        'containerHeight': 700,
        'containerWidth': 700
    }, matrix);
}