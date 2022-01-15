import React from "react";

class Detail extends React.Component{
    componentDidMount(){ //detail에 컴포넌트가 마운트 되면
        const {location, history} = this.props; //구조분해할당으로 
        if(location.state === undefined){
            history.push('/');
            //rocation.state가 없는 경우 Home으로 이동시킨다.
        }
     }

     render(){
         const {location} = this.props;
         if(location.state){
             return <span>{location.state.title}</span>;
         }else{
             return null;
         }
     }
}

export default Detail;