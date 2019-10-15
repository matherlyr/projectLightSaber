var dataPromise= d3.json("https://swapi.co/api/films")
dataPromise.then(
    function(filmData)
    { var info= filmData.results
        d3.select("h1").text("Welcome to Star Wars Movie Explorer!")
        console.log("filmData",filmData)
        displayInfo(info);
    },
    function(error)
    {d3.select("h1").text("No movies.");
    })

var displayInfo=function(filmData)
    {console.log(filmData)
        d3.select("#movieTitles")
        .append("ol")
        .selectAll("li")
        .data(filmData)
        .enter()
        .append("li")
        .text(function(d)
           {
            return d.title;  
            })
    }

