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
          // { route: ['','popular'],       name: 'top',     nav: 3, title:'Top',
            //   
            //   
            //   viewPorts: { left: { moduleId: './popular' }, right: { moduleId: './tags' } }
            //   
            //    }  
          // 
           
          
          { route: ['','hot'],       name: 'hot',     moduleId: './hot',   nav: 1, title:'Hot' } 
         ,{ route: 'new',     name: 'new',   moduleId: './new',   nav: 2, title:'New' } 
         ,{ route: 'top',     name: 'top',   moduleId: './top',   nav: 3, title:'Top' } 
         ,{ route: 'reccomended',        name: 'reccomended',      moduleId: './reccomended', nav: 4, title:'Reccomended' }
                  
         ,{ route: 'details',        name: 'details',      moduleId: './story-detail', nav: true, title:'>> Details' }
        
        ]);

        this.router = router;
    } 

}