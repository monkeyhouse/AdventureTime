export class PGameRouter{
    heading = 'Play Stories';
    //Read & Play Stories .. you're a protagonist

    configureRouter(config, router){
        config.map([
            
            //hotlinks for 
            // popular => likes, options to view by date - by date 1 month, 3 months, 1 year, all time ? recently popular, all time popular popular = likes
            // trending = views, w/ likes, only recent from past 1 week
            // newest = (newest)
            // these are different native search and order by thingies
            // recomended = ones you havent played  yet that are well liked
            // 
            // browse options: popular, trending, newest, reccomended
            //            
            // my options: completed, favorites, play later
            //
            // search
        //   { route: ['','browse'],       name: 'browse',     moduleId: './browse/browse-router',     nav: true, title:'Browse' } // popular?
        // //  ,{ route: 'recent',       name: 'recent',     moduleId: './recent',     nav: true, title:'recent' }  //newest?
        //  ,{ route: 'completed',     name: 'completed',   moduleId: './completed',   nav: true, title:'Completed' } 
        //  ,{ route: 'favorites',        name: 'favorites',      moduleId: './favorites',      nav: true, title:'Favorites' }
        //  ,{ route: 'search',        name: 'search',      moduleId: './search',      nav: true, title:'Search' } 
        //     
            { route: '', name: 'begin',  moduleId: './play', nav: true, title:'Read' } 
           // ,{ route: ':pageId', name: 'play',  moduleId: './play', nav: false, title:'Play' } // play
        ]); 

        this.router = router;
    }
}