class WordCloud {
    constructor(_config, _data) {
        this.config = {
            parentElement: _config.parentElement,
            containerWidth: _config.containerWidth || 500,
            containerHeight: _config.containerHeight || 200,
            margin: { top: 10, bottom: 30, right: 50, left: 50 },
            //invalidation
        }
        this.words = _data;
        //console.log(this.data);
        //console.log(this.data2);
        // Call a class function
        this.ylabel;
        this.title;
        this.initVis();

    }

    initVis() {
        let vis = this;
        vis.fontFamily = "sans-serif";
        vis.fontScale = 15;
        vis.padding = 0;
<<<<<<< Updated upstream
        vis.rotate =  function() { return ~~(Math.random() * 2) * 90; };
        this.renderVis();
    }

  

    renderVis() {
=======
        vis.rotate = () => 0;
        var stopwords = new Set(
            "i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall".split(
                ","
            )
        );
        // vis.words = vis.words
        //     // .trim()
        //     // .split(/[\s.]+/g)
        //     // .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
        //     // .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
        //     // .map((w) => w.replace(/['’]s$/g, ""))
        //     // .map((w) => w.substring(0, 30))
        //     // .map((w) => w.toLowerCase())
        //     .filter((w) => w && !stopwords.has(w));
        this.updateVis();
    }

    updateVis() {


>>>>>>> Stashed changes

        let vis = this;
        vis.data = d3
            .rollups(
                vis.words,
                (group) => group.length,
                (w) => w
            )
            .sort(([, a], [, b]) => d3.descending(a, b))
            .slice(0, 250)
            .map(([text, size]) => ({ text, size }));
<<<<<<< Updated upstream
        console.log(vis.data);
        // vis.data.forEach(e => {
        //    console.log(e); 
        // });
=======
        //console.log(vis.data);
        // vis.data.forEach(e => {
        //    console.log(e); 
        // });

        //works fine -----------------



>>>>>>> Stashed changes

        vis.svg = d3
            .select("#wordCloud")
            .append("svg")
            .attr("height", vis.height)
            .attr("width", vis.width)
            .attr("font-family", vis.fontFamily)
            .attr("text-anchor", "middle");
        //works fine--------------------

        vis.g = vis.svg.append("g").attr("transform", `translate(${vis.config.margin.left},${vis.config.margin.top})`);

        //this is the part that does not work
        //i have no idea what part is wrong
        vis.w_cloud = d3.layout.cloud()//could layout be the issue?
            //vis.w_cloud = d3Cloud()     
            .size([vis.width, vis.height])
            //.words(vis.data.map((d) => Object.create(d)))
            .words(vis.data.map((d)=> Object.create(d)))
            .padding(vis.padding)
            .rotate(vis.rotate)
            .font(vis.fontFamily)
            .fontSize((d) => Math.sqrt(d.size) * vis.fontScale)
            //.on("word", ({ size, x, y, rotate, text }) => {
        //  .on("end", 
        //  console.log("im done")
            //({ size, x, y, rotate, text }) => {
                // vis.g.append("text")
                //     .attr("font-size", size)
                //     .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
                //     .text(text);
            // );
        .on("end", vis.print);
        // .on("word", ({ size, x, y, rotate, text }) => {
        //     vis.svg
        //         .append("text")
        //         .attr("font-size", size)
        //         .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        //         .text(text);
        // });
           // vis.w_cloud.timeInterval(1000);
        //  vis.w_cloud.start();
        
        //invalidation && invalidation.then(() => vis.w_cloud.stop());
    }
    // draw(words) {
    //     vis.svg
    //         .append("g")
    //         .attr("transform", "translate(" + vis.w_cloud.size()[0] / 2 + "," + vis.w_cloud.size()[1] / 2 + ")")
    //         .selectAll("text")
    //         .data(words)
    //         .enter().append("text")
    //         .style("font-size", function (d) { return d.size + "px"; })
    //         .attr("text-anchor", "middle")
    //         .attr("transform", function (d) {
    //             return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    //         })
    //         .text(function (d) { return d.text; });
    // }
<<<<<<< Updated upstream

    updateVis(){
        vis = this;
        vis.w_cloud.stop();
        vis.w_cloud.remove('text');
        vis.w_cloud.start();
    }
    print(words){
        console.log("im done"+ words);
    }

    draw(words) {
        console.log('Me done');
=======
    draw() {
        let vis = this;
        console.log('Trial')
>>>>>>> Stashed changes
        d3.select("body").append("svg")
            .attr("width", vis.w_cloud.size()[0])
            .attr("height", vis.w_cloud.size()[1])
            .append("g")
            .attr("transform", "translate(" + vis.w_cloud.size()[0] / 2 + "," + vis.w_cloud.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .attr("text-anchor", "middle")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) { return d.text; });
    }

}