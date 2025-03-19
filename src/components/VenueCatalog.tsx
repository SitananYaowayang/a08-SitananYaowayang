import Link from "next/link";
import Card from "./Card";

export default async function VenueCatalog({venuesJson}:{venuesJson:Object}){
    const venuesJsonReady = await venuesJson    
    return(
        <>
        Explore {venuesJsonReady.count} models in our catalog
        
        <div style={{margin:"20px",display:"flex",
                flexDirection:"row",alignContent:"space-around",
                justifyContent:"space-around",flexWrap:"wrap"
            }}>

                {     
                    venuesJsonReady.data.map((venueItem:Object)=>(
                        <Link href={`/venue/${venueItem.id}`}
                        className="w-1/5">
                        <Card 
                            venueName={venueItem.name} 
                            imgSrc={venueItem.picture}
                        />
                        </Link>
                     ))      

               }
                
               
            </div>
        
        </>
    )
}