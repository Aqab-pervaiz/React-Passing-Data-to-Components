import React, {Component} from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'






class Like extends Component {
    state = {  } 
    render() { 
       


        return (<>
        <FontAwesomeIcon icon={this.props.movie.liked?faHeart:farHeart} style={{color:'red',cursor:'pointer'}} onClick={()=>this.props.onHeartClick(this.props.movie)}/>
        
        </>);
    }
}
 
export default Like;





// const Like = (props) => {

//    const toogleClick=()=>{
//         console.log("like is clidked");

//     }
//     return ( <>
//     <i onClick={toogleClick} className="fa fa-heart " style={{color:'#f53d00'}} ></i> 
//     <i className="fa fa-heart fa-regular" ></i>
//     <span className="material-symbols-filled" style={{fill}}>
// favorite
// </span>
//     </>
//     );
// }
 
// export default Like;