var dataPromise= d3.json("https://swapi.co/api/films")
dataPromise.then(
    function(filmData)
    { var info= filmData.results
        d3.select("h1").text("Welcome to Star Wars Movie Explorer!")
        console.log("filmData",filmData)
        //displayInfo(info);
        createTable(info);

    },
    function(error)
    {d3.select("h1").text("No movies.");
    })

//var displayInfo=function(filmData)
//    {console.log(filmData)
//        d3.select("#movieTitles")
//        .append("ol")
//        .selectAll("li")
//        .data(filmData)
//        .enter()
//        .append("li")
//        .text(function(d)
//           {
//            return d.title;  
//            })
//    }

var createTable = function(filmData)
{
        
    var table = d3.select("tbody").selectAll("tr").data(filmData).enter().append("tr").attr("class", function(d){
        if (d.director=="George Lucas")
            {
                return "GLMovie"
            }
        else{
            
            return "RegMovie"
            
        } 
    })
    //table.append("td").append("img").attr("src", function(d){ return "penguins/" + d.picture;})
    table.append("td").text(function(d){ return d.title;})
    table.append("td").text(function(d){ return d.episode_id;})
    table.append("td").text(function(d){ return d.director;})
    table.append("td").text(function(d){ return d.producer;})
    table.append("td").text(function(d){ return d.release_date;})
    

    d3.select("thead").selectAll("th").data(filmData).enter()
    d3.select("#titlehead").on("click", function()
                           {
                               getTitleList(filmData)
                               removeTable()
                               createTable(filmData)
    
                            })
    
    d3.select("#numberhead").on("click", function()
                            {
                               getNumberList(filmData)
                               removeTable()
                               createTable(filmData)
    
                            })
    
    d3.select("#directorhead").on("click", function()
                            {
                               getDirectorList(filmData)
                               removeTable()
                               createTable(filmData)
    
                            })
    
    d3.select("#producerhead").on("click", function()
                            {
                               getProducerList(filmData)
                               removeTable()
                               createTable(filmData)
    
                            })
    d3.select("#datehead").on("click", function()
                            {
                               getDateList(filmData)
                               removeTable()
                               createTable(filmData)
    
                            })
    d3.select("#George").on("click", function()
                            {
                                removeTable()
                                if("class"=="RegMovie")
                                {
                                    d3.select("tr *").remove()
//                                    var GLTable=function(filmData){
//                                        filterMovies(filmData, class)
                                       
//                                        d3.select("tbody").selectAll("tr").data(filmData).enter().append("tr") 
//                                 GLTable.append("td").text(function(d){ return d.title;})
//                                 GLTable.append("td").text(function(d){ return d.episode_id;})
//                                 GLTable.append("td").text(function(d){ return d.director;})
//                                 GLTable.append("td").text(function(d){ return d.producer;})
//                                 GLTable.append("td").text(function(d){ return d.release_date;})
//                                 }
                                       
                                   } 
                                // GLTable(filmData);
                                
                                
                            })
     
}


var removeTable=function()
{
    d3.selectAll("tbody *")
    .remove()
            
}

//For the Titles
var getTitle= function(info)
    {
        return info.title
    }
var getAllTitles= function(filmData)
    {
        return filmData.map(getTitle)
    }

var compareTitles =function(a,b)
    {
        if (a.title==b.title)
            {
                return 0;
            }
        else if (a.title<b.title)
            {return -1;}
        else //(a.filmData.episode_id>b.filmData.episode_id)
            {return 1;}
    }
var getTitleList = function(filmList)
{
    filmList.sort(compareTitles); 
}




//For the Episode Numbers
var getNumber= function(info)
    {
        return info.episode_id
    }
var getAllNumbers= function(filmData)
    {
        return filmData.map(getNumber)
    }

var compareNumbers =function(a,b)
    {
        if (a.episode_id==b.episode_id)
            {
                return 0;
            }
        else if (a.episode_id<b.episode_id)
            {return -1;}
        else //(a.filmData.episode_id>b.filmData.episode_id)
            {return 1;}
    }
var getNumberList = function(filmList)
{
    filmList.sort(compareNumbers); 
}


//For the Directors
var getDirectorName=function(info)
    {
        return info.director
    }

var getAllDirectors= function(filmData)
    {
        return filmData.map(getDirectorName);
    }
var compareDirectors =function(a,b)
    {
        if (a.director==b.director)
            {
                return 0;
            }
        else if (a.director<b.director)
            {return -1;}
        else //(a.filmData.episode_id>b.filmData.episode_id)
            {return 1;}
    }    

var getDirectorList =function(filmList)
    {
        filmList.sort(compareDirectors);
    }

//For the Producers
var getProducerName=function(info)
    {
        return info.Producer
    }

var getAllProducers= function(filmData)
    {
        return filmData.map(getProducerName);
    }
var compareProducers =function(a,b)
    {
        if (a.producer==b.producer)
            {
                return 0;
            }
        else if (a.producer<b.producer)
            {return -1;}
        else //(a.filmData.episode_id>b.filmData.episode_id)
            {return 1;}
    }    

var getProducerList =function(filmList)
    {
        filmList.sort(compareProducers);
    }

//For the Release Dates
var getDate=function(info)
    {
        return info.release_date
    }

var getAllDates= function(filmData)
    {
        return filmData.map(getDate);
    }
var compareDates =function(a,b)
    {
        if (a.release_date==b.release_date)
            {
                return 0;
            }
        else if (a.release_date<b.release_date)
            {return -1;}
        else //(a.filmData.episode_id>b.filmData.episode_id)
            {return 1;}
    }    

var getDateList =function(filmList)
    {
        filmList.sort(compareDates);
    }

//filtering movies

// var filterMovies= function(filmData, class)
//    {
//        if (class == "GLMovies")
//            {
//                return info.filter(function(filmData)
//                    {
//                        return info.director=="George Lucas";                      
//                    })
//            }
//        else
//            {
//                return filmData;
//            }
       
//    }
