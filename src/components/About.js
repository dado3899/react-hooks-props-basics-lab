import React from "react";
import Links from "./Links";

function About({bio,links}) {
  let conditional
  function condFunc(){
    if(bio){
      return <p>{bio}</p>
    }
    else{
      return <></>
    }
  }

  const linkArr = []
  for(let name in links){
    console.log(name)
    console.log(links[name])
    linkArr.push(<Links link={links[name]} name={name}/>)
  }
  console.log(linkArr)

  const arr=[1,2,3]

  return (
    <div id="about">
      <h2>About Me</h2>
      {
        // If bio then show bio, else don't have ptag
        bio ? <p>{bio}</p> : <></>
      }
      {
        arr.map(item=><div>{item}</div>)
      }
      {/* {
        function (){
          if(bio){
            return <p>{bio}</p>
          }
          else{
            return <p>No bio</p>
          }
        }()
      } */}
      {
        condFunc()
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3>Links</h3>
      {linkArr}
    </div>
  );
}

export default About;
