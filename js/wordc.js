// console.log("hello");
// console.log(d3.layout.cloud);

d3Cloud = d3.layout.cloud;

function WordCloud(text, {
    size = group => group.length, // Given a grouping of words, returns the size factor for that word
    word = d => d, // Given an item of the data array, returns the word
    marginTop = 0, // top margin, in pixels
    marginRight = 0, // right margin, in pixels
    marginBottom = 0, // bottom margin, in pixels
    marginLeft = 0, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    maxWords = 250, // maximum number of words to extract from the text
    fontFamily = "sans-serif", // font family
    fontScale = 20, // base font size
    padding = 0, // amount of padding between the words (in pixels)
    rotate = 0, // a constant or function to rotate the words
    invalidation // when this promise resolves, stop the simulation- I don't use this. 
} = {}) {
    const words = typeof text === "string" ? text.split(/\W+/g) : Array.from(text);

    const data = d3.rollups(words, size, w => w)
        .sort(([, a], [, b]) => d3.descending(a, b))
        .slice(0, maxWords)
        .map(([key, size]) => ({ text: word(key), size }));

    // console.log(data);

    const svg = d3.select(document.getElementById("wordCloud"));
    svg.selectAll("*").remove();

    svg.attr("viewBox", [0, 0, width, height])
        .attr("width", width)
        .attr("font-family", fontFamily)
        .attr("text-anchor", "middle")
        .attr("style", "max-width: 100%; height: auto; width: intrinsic;");

    const g = svg.append("g").attr("transform", `translate(${marginLeft},${marginTop})`);

    var color = d3.scaleOrdinal()
    .domain([0, 50])
    .range(d3.schemeCategory10);

    const cloud = d3Cloud()
        .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
        .words(data)
        .padding(padding)
        .rotate(rotate)
        .font(fontFamily)

        .fontSize(d => Math.sqrt(d.size) * fontScale)
        .on("word", ({ size, x, y, rotate, text }) => {
            g.append("text")
                .attr("font-size", size)
                .style("font-family", "Impact")
                .style('fill', color(size))
                .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
                .text(text);
        });

    cloud.start();
    // invalidation && invalidation.then(() => cloud.stop()); //not necessary 
    // return svg.node();//not necessary for this code
}




function charSelectWC(alpha) {
    d3.json("data/all_series_lines.json").then(da => {
        // // console.log(data)

        let ds9 = da.DS9;
        //// console.log(da.DS9);
        Object.keys(ds9).forEach(ep => {
            //// console.log(ds9[ep]);
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
                episode.SISKO.forEach(d => {
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
        });


        let episode_no = 0,
        season = document.getElementById("season_1_id").value,
        episode = document.getElementById("episode_1_id").value;
    episode_no = parseInt(season - 1) * 26 + parseInt(episode);

        var allWords = [];
        let character ;

        if(alpha == 1) {
            character  = document.getElementById("chars").value
        } else {
            character = document.getElementById("box_vals").innerHTML
            character  = character.split(' ')
            let cl = character.length;
            character = character[cl - 1]
            character = character.toLowerCase();
        }

        console.log(character)
        linesData.filter(d => d.char == character)
            .filter(d => d.episode == episode_no)
            .forEach(d => {
                //allWords = allWords.concat(d.lines);
                //allWords.push(d.lines.forEach(w=>w));
                d.lines.forEach(w => {
                    // allWords.push(w);
                    allWords = allWords.concat(w);
                });
            });

        // console.log(allWords.join(' '))


        WordCloud(allWords.join(' '), {
            width: 800,
            height: 800,
            rotate: () => (~~(Math.random() * 6) - 3) * 30
        })
    })
}


