class Chord {
    constructor(_config, _data) {
        this.config = {
            parentElement: _config.parentElement,
            containerWidth: _config.containerWidth || 500,
            containerHeight: _config.containerHeight || 200,
            margin: { top: 10, bottom: 30, right: 50, left: 50 },
            tp: _config.tp
        }
        this.data = _data;
        console.log(this.data);
        this.initVis();

    }

    initVis() {
        // console.log("inside line");
        let vis = this;
        // console.log(vis.data);
        vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
        vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

        vis.svg = d3.select(vis.config.parentElement)
            .attr('width', vis.config.containerWidth)
            .attr('height', vis.config.containerHeight);


        console.log(vis.config.margin.left)
        console.log(vis.config.margin.top)
        vis.chart = vis.svg.append('g')
            .attr('transform', `translate(${vis.config.margin.left + 300},${vis.config.margin.top + 300})`);

        


        vis.updateVis();
    }


    updateVis() {
        let vis = this;
        vis.names = ['SISKO', 'ODO', 'BASHIR', 'DAX', 'JAKE', 'OBRIEN', 'QUARK', 'KIRA', 'WORF', 'EZRI'];
        vis.color = d3.scaleOrdinal()
            .domain(vis.names)
            .range(d3.schemeCategory10)

        vis.res = d3.chord()
            .padAngle(0.09)
            .sortSubgroups(d3.descending)
            (vis.data)

        vis.chart
            .datum(vis.res)
            .append("g")
            .selectAll("g")
            .data(function (d) { 
                return d.groups; 
            })
            .join("g")
            .append("path")
            .style("fill", (d, i) => vis.color(i))
            .style("stroke", "black")
            .attr("d", d3.arc()
                .innerRadius(200)
                .outerRadius(210) //just try this - may need to shift a little but should be close
            )
            console.log(vis.config.tp)
        vis.tooltip = d3.select('#tooltip1')

        const showTooltip = function (event, d) {
            console.log(vis.names[d.source.index] + vis.names[d.target.index])

            vis.tooltip
                .style("opacity", 1)
                .html('Source: ' + vis.names[d.source.index] + ' Target: ' + vis.names[d.target.index])
                // .html(" Target: " +  + "<br>Source: " + )
                .style("left", event.clientX + "px")
                .style("top", event.clientY  + "px")

        }


        // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
        var hideTooltip = function (d) {
            var tooltip = d3.select('#tooltip')

            tooltip
                .transition()
                .duration(2000)
                .style("opacity", 0)
        }


        vis.chart
            .datum(vis.res)
            .append("g")
            .selectAll("path")
            .data(d => d)
            .join("path")
            .attr("d", d3.ribbon()
                .radius(200) //starting point- may be off by a bit, but should fit
            )
            .style("fill", d => color(d.source.index)) // colors depend on the source group. Change to target otherwise.
            .style("stroke", "black")
            .on("mouseover", showTooltip)
            // .on("mouseleave", hideTooltip)

        // Add one dot in the legend for each name.
        vis.chart.selectAll("mydots")
            .data(vis.names)
            .enter()
            .append("circle")
            .attr("cx", 200)
            .attr("cy", function (d, i) { return 100 + i * 25 }) // 100 is where the first dot appears. 25 is the distance between dots
            .attr("r", 7)
            .style("fill", function (d) { return vis.color(d) })

        // Add one dot in the legend for each name.
        vis.chart.selectAll("mylabels")
            .data(vis.names)
            .enter()
            .append("text")
            .attr("x", 230)
            .attr("y", function (d, i) { return 100 + i * 25 }) // 100 is where the first dot appears. 25 is the distance between dots
            .style("fill", function (d) { return vis.color(d) })
            .text(function (d) { return d })
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")


    }


}