//imported computedFrom from 'aurelia-framework';

export class Router{
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
          { route: ['','popular'],       name: 'popular',     moduleId: './popular',     nav: true, title:'Popular' }  
         ,{ route: 'trending',       name: 'trending',     moduleId: './trending',     nav: true, title:'Trending' }  
         ,{ route: 'newest',     name: 'newest',   moduleId: './newest',   nav: true, title:'Newest' } 
         ,{ route: 'reccomended',        name: 'reccomended',      moduleId: './reccomended',      nav: true, title:'Reccomended' }
         
         
        ,{ route: 'details',        name: 'details',      moduleId: './story-detail', 
                 nav: true, title:'Details' }
        
        ]);

        this.router = router;
    } 
        
    isOpen = false;
    
    
    isOpenChanged(propertyName, newValue, oldValue){
      console.log("changed is called");      
    }
}