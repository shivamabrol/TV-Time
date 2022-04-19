d3.json("data/all_series_lines.json")
    .then(function (da) {
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
                .map((w)=>w.replace(/'/g, ''))
                .map((w)=>w.replace(/'/g, ''))
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
                .map((w)=>w.replace(/'/g, ''))
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
                .map((w)=>w.replace(/'/g, ''))
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
                .map((w)=>w.replace(/'/g, ''))
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
                .map((w)=>w.replace(/'/g, ''))
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
                .map((w)=>w.replace(/'/g, ''))
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
                .map((w)=>w.replace(/'/g, ''))
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
                .map((w)=>w.replace(/'/g, ''))
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
                    .map((w)=>w.replace(/'/g, ''))
                    .map((w) => w.substring(0, 30))
                    .map((w) => w.toLowerCase())
                    .filter((w) => w && !stopwords.has(w));
                ezri.push(ezri1);
                linesData.push({ "episode": number, "char": "ezri", "lines": ezri });
            }
        });
        var allWords = [];
        linesData.filter(d=> d.char =="kira").forEach(d => {
            //allWords = allWords.concat(d.lines);
           //allWords.push(d.lines.forEach(w=>w));
            d.lines.forEach(w=>{
               // allWords.push(w);
               allWords = allWords.concat(w);
            });
        });
        // console.log(allWords+ 'h');
        // wordCloud = new WordCloud({
        //     'parentElement': '#wordCloud',
        //     'containerHeight': 350,
        //     'containerWidth': 600
        //   }, allWords);


        var fontFamily = "sans-serif";
        var fontScale = 15;
        var padding = 0;
        var height = 800;
        var width = 500;
        const rotate = () => (~~(Math.random() * 6) - 3) * 15
      
        var data = d3
          .rollups(
            allWords,
            (group) => group.length,
            (w) => w
          )
          .sort(([, a], [, b]) => d3.descending(a, b))
          .slice(0, 250)
          .map(([text, value]) => ({ text, value }));
        console.log(data);
      
        const svg = d3
          .select("#wordCloud")
          .append("svg")
          .attr("height", height)
          .attr("width", width)
          .attr("font-family", fontFamily)
          .attr("text-anchor", "middle");
      
        const w_cloud = d3.layout.cloud()
          .size([height, width])
        //   .words(data.map((d) => Object.create(d)))
          .words(data)
          .padding(padding)
          .rotate(rotate)
          .font(fontFamily)
          .fontSize((d) => Math.sqrt(d.value) * fontScale)
          .on("word", (d) => {
                svg
              .append("text")
              .attr("font-size", d.size/10)
            .attr("transform", `translate(${d.x/5},${d.y/5}) rotate(${d.rotate})`)
            .text(d.text);

            // svg
            //   .append("text")
            //   .attr("font-size", e.size)
            // .attr("transform", `translate(${e.x},${e.y}) rotate(${e.rotate})`)
            // .text(e.text);
          });
      
        w_cloud.start();
    });

// d3.json("data/all_series_lines.json").then((words) => {
//   var stopwords = new Set(
//     "i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall".split(
//       ","
//     )
//   );
//   // console.log(words)
//   words = words
//     // .trim()
//     .split(/[\s.]+/g)
//     .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
//     .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
//     .map((w) => w.replace(/['’]s$/g, ""))
//     .map((w) => w.substring(0, 30))
//     .map((w) => w.toLowerCase())
//     .filter((w) => w && !stopwords.has(w));

//   // // console.log(d3.rollups(words,
//   //   (group) => group.length,
//   //   (w) => w
//   // ).sort(([, a], [, b]) => d3.descending(a, b))
//   // .slice(0, 250)
//   // .map(([text, value]) => ({ text, value })));
//   var fontFamily = "sans-serif";
//   var fontScale = 15;
//   var padding = 0;
//   var height = 800;
//   var width = 500;
//   const rotate = () => 0; // () => (~~(Math.random() * 6) - 3) * 30

//   var data = d3
//     .rollups(
//       words,
//       (group) => group.length,
//       (w) => w
//     )
//     .sort(([, a], [, b]) => d3.descending(a, b))
//     .slice(0, 250)
//     .map(([text, value]) => ({ text, value }));
//   // console.log(data);

//   const svg = d3
//     .select("#wordCloud")
//     .append("svg")
//     .attr("height", 200)
//     .attr("width", 200)
//     .attr("font-family", fontFamily)
//     .attr("text-anchor", "middle");

//   const w_cloud = d3.layout.cloud()
//     .size([200, 200])
//     .words(data.map((d) => Object.create(d)))
//     .padding(padding)
//     .rotate(rotate)
//     .font(fontFamily)
//     .fontSize((d) => Math.sqrt(d.value) * fontScale)
//     .on("word", ({ size, x, y, rotate, text }) => {
//       svg
//         .append("text")
//         .attr("font-size", size)
//         .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
//         .text(text);
//     });

//   w_cloud.start();
// //   const inval = invalidation.then(() => w_cloud.stop());
// //   inval__
// });
