import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';
import {displayText} from '../functionutils';

function BarChart({ width, height, data, labels }){
    const ref = useRef();

    useEffect(() => {
        d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
    }, []);

    useEffect(() => {
        let svg = d3.select(ref.current);
        svg.selectAll('*').remove();
        draw();
    }, [data]);

    const draw = () => {
        let margin = {top: 0, right: 90, bottom: 90, left: 50};
        let svgWidth = 400, svgHeight = 680;
        let height = svgHeight- margin.top- margin.bottom, width = svgWidth - margin.left - margin.right;
        let sourceNames = [], sourceCount = [];
        
        let x = d3.scaleLinear().rangeRound([0, width]),
            y = d3.scaleBand().rangeRound([0, height]).padding(0.1);
        for(let key in data){
            if(data.hasOwnProperty(key)){
                sourceNames.push(key);
                sourceCount.push(parseInt(data[key]));
            }
        }
        x.domain([0, d3.max(sourceCount, function(d) { return d; })]);
        y.domain(sourceNames);
        
        let svg = d3.select(ref.current);
        svg.attr('height', svgHeight)
           .attr('width', svgWidth);
        
        svg = svg.append("g")
                 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
        svg.append("g")
            .attr("transform", "translate(0, " + height + ")")
            .call(d3.axisBottom(x).tickFormat((d,i) => displayText(d)))
            .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-60)");
            ;
        
        svg.append("g")
            .call(d3.axisLeft(y))
            ;
    
        // svg.append("text")
        //     .attr("text-anchor", "end")
        //     .attr("x", width)
        //     .attr("y", height)
        //     .text("Count");

        svg.append("text")
            .attr("text-anchor", "end")
            .attr("y", -80)
            .attr("x", -120)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .attr("fill" , "#ffffff")
            .text(labels.xLabel);
                
        // Create rectangles
        let bars = svg.selectAll('.bar')
            .data(sourceNames)
            .enter()
            .append("g");
        
        bars.append('rect')
            .attr('class', 'bar')
            .attr("x", function(d) { return 0; })
            .attr("y", function(d) { return y(d); })
            .attr("width", function(d){return x(data[d])})
            .attr("fill" , "#386BB6")
            .transition().duration(1000)
            .attr("height", function(d) { return y.bandwidth(); });
            
        bars.append("text")
            .text(function(d) { 
                return displayText(data[d]);
            })
            .attr("x", function(d){
                return x(data[d]) + 20;
            })
            .attr("y", function(d){
                return y(d) + y.bandwidth() * (0.5); // here 0.1 is the padding scale
            })
            .attr("font-family" , "sans-serif")
            .attr("font-size" , "10px")
            .attr("fill" , "white")
            .attr("text-anchor", "middle");
    }

    return (
        <div className="Chart" style={{marginRight: "70px"}}>
            <div className='ChartTitle' style={{marginBottom: "30px", marginTop: "10px"}}>
                {labels.title}
            </div>
            <svg ref={ref}>
            </svg>
        </div>
        
    )
}

export default BarChart;

