class BarChart {
    constructor(_config, _data, _visible = true) {
        this.config = {
            parentElement: _config.parentElement,
            containerWidth: _config.containerWidth || 500,
            containerHeight: _config.containerHeight || 200,
            margin: { top: 10, bottom: 30, right: 50, left: 50 }
        }
        this.data = _data;
        //console.log(this.data);
        //console.log(this.data2);
        // Call a class function
        this.ylabel;
        this.title;
        this.haveAxisVisible = _visible;
        this.initVis();
    }
    initVis() {
        let vis = this;
        //console.log(vis.data);
        vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
        vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

        vis.xValue = d => d.x;
        vis.yValue = d => d.y;
        vis.tp = '#tooltipBarChart1';


        vis.colorPalette = d3.scaleOrdinal(d3.schemeTableau10);
        let keys = []
        for(let a = 0; a < vis.data.length; a++) {
            keys.push(vis.data[a].key)
        }
        vis.colorPalette.domain(Object.keys(keys));


        // vis.yScale = d3.scaleLinear()
        //     .domain([0, d3.max(vis.data, vis.yValue)])
        //     .range([vis.height, 0])
        //     .nice();
        //     console.log(vis.yScale);
        //vis.yScale = d3.scaleLinear().range([vis.height-25, 0])
        //move y axis up for room for labels

        // vis.xAxisG = vis.chart.append('g')
        //     .attr('class', 'axis x-axis')
        //     .attr('transform', `translate(0,${vis.height})`)
        //     //.attr("transform", "rotate(-90)")
        //     .call(vis.xAxis);



        vis.svg = d3.select(vis.config.parentElement)
            .attr('width', vis.config.containerWidth)
            .attr('height', vis.config.containerHeight);
        vis.chart = vis.svg.append('g')
            .attr('transform', `translate(${vis.config.margin.left},${vis.config.margin.top})`);


        //.attr('transform', `translate(0,${vis.height})`)
        vis.updateVis();
    }

    updateVis() {


        let vis = this
        // vis.svg.selectAll('*')
        //     .data([])
        //     .exit().remove();

        // vis.svg.selectAll("*").remove();



        vis.xScale = d3
            .scaleBand()
            .range([0, vis.width])
            .domain(vis.data.map(function (d) {
                return d.key;
            }))
            .paddingInner(0.2)
            .paddingOuter(0.2);
        vis.yScale = d3.scaleLinear().range([vis.height, 0])
            .domain([0, d3.max(vis.data, function (d) { 
                return d.value; 
            })]);

            // .domain([0, d3.max(vis.data, function (d) { return d.value; })]);


        vis.xAxis = d3.axisTop(vis.xScale);
        vis.yAxis = d3.axisLeft(vis.yScale);



        vis.yAxisG = vis.chart.append('g')
            .attr('class', 'axis y-axis')
            .call(vis.yAxis);

        vis.chart.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + vis.height + ")")
            .call(d3.axisBottom(vis.xScale))
            .selectAll("text")
            .style("display", "none")
            .attr("dx", "-1em")
            .attr("dy", "-0.5em")
            .attr("transform", "rotate(90)")

        vis.chart.selectAll('.bar')
            .data(vis.data)
            .enter()

            .append('rect')
            //.attr('fill', d3.color('blue'))
            .attr("class", "bar")
            // .attr('fill', vis.colorPalette(d.key))
            .attr('fill', function(d) {
                let a = d.key;
                return vis.colorPalette(d.key);
            })
            .attr('x', (s) => vis.xScale(s.key))
            // .attr('y', (s) => s.value)
            .attr('y', (s) => vis.yScale(s.value))
            // .attr('height', (s) => vis.yScale(s.value))
            .attr('height', (s) => vis.height - vis.yScale(s.value))

            .attr('width', vis.xScale.bandwidth())

        if (this.haveAxisVisible){
            vis.chart.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + vis.height + ")")
                .call(d3.axisBottom(vis.xScale))
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-1em")
                .attr("dy", "-0.5em")
                .attr("transform", "rotate(90)")
        }
    }


}