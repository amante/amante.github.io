




const q=(e,n=document)=>n.querySelector(e);
const qa=(e,n=document)=>n.querySelectorAll(e);

let projectData = [
  {
    id: 1,
    lat: -24.957874041168797,
    lng: 118.5013331401608,
    label: "Project Name #1",
    project_title: "Project #1 Title",
    project_url: "https://youtube.com.au",
    project_type: "Engineering",
    region: "France",
    value: "1000000",
    company: "Company Name",
    company_url: "https://www.google.com.au",
    company_email: "bob@example.com",
    project_description:
      "Bacon ipsum dolor amet kielbasa pastrami beef ribs pig cow",
  },
{
    id: 2,
    lat: -32.83626802206395,
    lng: 116.47405764163521,
    label: "Project Name #2",
    project_title: "Project #2 Title",
    project_url: "https://youtube.com.au",
    project_type: "Construction",
    region: "Italy",
    value: "1000000",
    company: "Company Name",
    company_url: "https://www.google.com.au",
    company_email: "bob@example.com",
    project_description:
      "Bacon ipsum dolor amet kielbasa pastrami beef ribs pig cow",
  },
  {
    id: 3,
    lat: -24.957874041168797,
    lng: 118.8013331401608,
    label: "Project Name #3",
    project_title: "Project #3 Title",
    project_url: "https://youtube.com.au",
    project_type: "Construction",
    region: "France",
    value: "1000000",
    company: "Company Name",
    company_url: "https://www.google.com.au",
    company_email: "bob@example.com",
    project_description:
      "Bacon ipsum dolor amet kielbasa pastrami beef ribs pig cow",
  },
  {
    id: 4,
    lat: -21.218106010814925,
    lng: 119.86911455192619,
    label: "Project Name #4",
    project_title: "Project #4 Title",
    project_url: "https://youtube.com.au",
    project_type: "Engineering",
    region: "Italy",
    value: "1000000",
    company: "Company Name",
    company_url: "https://www.google.com.au",
    company_email: "bob@example.com",
    project_description:
      "Bacon ipsum dolor amet kielbasa pastrami beef ribs pig cow",
  },
  {
    id: 5,
    lat: -21.318106010814925,
    lng: 119.86911455192619,
    label: "Project Name #5",
    project_title: "Project #5 Title",
    project_url: "https://youtube.com.au",
    project_type: "Engineering",
    region: "France",
    value: "1000000",
    company: "Company Name",
    company_url: "https://www.google.com.au",
    company_email: "bob@example.com",
    project_description:
      "Bacon ipsum dolor amet kielbasa pastrami beef ribs pig cow",
  }
];
















function initMap() {
    let markers=[];
    let Filters={};
    
    const map = new google.maps.Map( q('#map'), {
        zoom: 5,
        center: { lat: -25.77649954803059, lng: 122.03240276153382 }
    });
    
    const infoWindow = new google.maps.InfoWindow({
        disableAutoPan: false,
    });
    
    
    const clickhandler=function(e){
        /* 
            open the infowindow and display the properties 
            from the JSON data for this marker in a very 
            basic format... 
        */
        infoWindow.open( map, this );
        infoWindow.setPosition( this.position );
        infoWindow.setContent( Object.keys( this.data ).map( k=>[ k, this.data[ k ] ].join(': ') ).join('<br />') );
    };
    
    
    
    
    const changehandler=(e)=>{
        let bounds=new google.maps.LatLngBounds();
        /* 
            If the "select" menu has an option, other than the 1st, 
            selected we add it to our list of Filters.
        */
        if( e.target.selectedIndex==0 && Filters.hasOwnProperty( e.target.name ) ){
            delete Filters[ e.target.name ];
        }else{
            Filters[ e.target.name ]=e.target.value;
        }
        
        // hide any open infowindow
        infoWindow.close();
        
        // hide ( not remove ) all markers
        markers.forEach( mkr=>mkr.setVisible( false ) );
        
        
        /*
            Iterate through all markers and continually
            set the boolean value res by validating that the
            current Select value matches the appropriate value
            from the source data.
        */
        let filtered=markers.filter( function( mkr ){
            let res=true;
            Object.keys( Filters ).forEach( name => {
                /* this is the important bit ! */
                res = res && Filters[ name ]===mkr.data[ name ];
            });
            return res;
        });
        
        /*
            with the returned array of matched markers we
            now set their visibility so that they are visible.
        */
        filtered.forEach( mkr=>{
            mkr.setVisible( true );
            bounds.extend( mkr.position );
        });
        
        if( !bounds.isEmpty() ) map.fitBounds( bounds );
    };				
    
    
    
    Object.keys( projectData ).forEach(k=>{
        let json=projectData[ k ];
        let args={
            position: { lat:Number( json.lat ), lng:Number( json.lng ) },
            title:json.project_title,
            data:json,/* This is ALL the json data for this marker - this is used in the filter!! */
            map:map
        };
        let marker=new google.maps.Marker( args );
        google.maps.event.addListener( marker, 'click', clickhandler );
        
        markers.push( marker );
    });
    
    

  
  
    //assign change event handlers to select menus
    qa('.filter').forEach(n=>{
        n.addEventListener( 'change', changehandler );
    });
}