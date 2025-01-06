const Photo = (props) => 
    
{
    const {albumId, id, title, url, thumbnailUrl} = props.data
    
 return(
    
   <>
   {/* {console.log(thumbnailUrl)} */}
  <div class="carousel-item active">
    <img src= {thumbnailUrl} class="d-block w-100" alt="..."/>
  </div>
  
  </>
 )
}
export default Photo