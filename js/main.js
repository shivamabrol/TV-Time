var linesData = [];
var stopwords = new Set("i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,im,youre,hes,shes,its,were,theyre,ive,youve,weve,theyve,id,youd,hed,shed,wed,theyd,ill,youll,hell,shell,well,theyll,isnt,arent,wasnt,werent,hasnt,havent,hadnt,doesnt,dont,didnt,wont,wouldnt,shant,shouldnt,cant,cannot,couldnt,mustnt,lets,thats,whos,whats,heres,theres,whens,wheres,whys,hows,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall".split(","));

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
        linesData.filter(d=> d.char =="kira").filter(d=>d.episode==0).forEach(d => {
            //allWords = allWords.concat(d.lines);
           //allWords.push(d.lines.forEach(w=>w));
            d.lines.forEach(w=>{
               // allWords.push(w);
               allWords = allWords.concat(w);
            });
        });
        console.log(allWords+ 'h');
        wordCloud = new WordCloud({
            'parentElement': '#wordCloud',
            'containerHeight': 350,
            'containerWidth': 600
          }, allWords);
    });


//console.log(linesData);
d3.select('#chars').on('change', function () {

});