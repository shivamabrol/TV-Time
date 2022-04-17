class WordCloud {
    constructor(_config, _data) {
        this.config = {
            parentElement: _config.parentElement,
            containerWidth: _config.containerWidth || 500,
            containerHeight: _config.containerHeight || 200,
            margin: { top: 10, bottom: 30, right: 50, left: 50 }
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
        vis.rotate = () => 0;
        this.updateVis();
    }

    updateVis() {
        let vis = this;
        vis.data = d3
            .rollups(
                vis.words,
                (group) => group.length,
                (w) => w
            )
            .sort(([, a], [, b]) => d3.descending(a, b))
            .slice(0, 250)
            .map(([text, value]) => ({ text, value }));
        //console.log(vis.data);
        vis.data.forEach(e => {
           console.log(e); 
        });

        vis.svg = d3
            .select("#wordCloud")
            .append("svg")
            .attr("height", vis.height)
            .attr("width", vis.width)
            .attr("font-family", vis.fontFamily)
            .attr("text-anchor", "middle");

        vis.w_cloud = d3.layout.cloud()//could layout be the issue?
            .size([vis.width, vis.height])
            //.words(vis.data.map((d) => Object.create(d)))
            .words(vis.data)
            .padding(vis.padding)
            .rotate(vis.rotate)
            .font(vis.fontFamily)
            .fontSize((d) => Math.sqrt(d.value) * vis.fontScale)
            .on("end", this.draw);
        // .on("word", ({ size, x, y, rotate, text }) => {
        //     vis.svg
        //         .append("text")
        //         .attr("font-size", size)
        //         .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        //         .text(text);
        // });

        //vis.w_cloud.start();
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
    draw(words) {
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