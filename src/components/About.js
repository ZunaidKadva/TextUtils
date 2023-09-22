import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#1a6580':'white',
        border: '2px solid',
        borderColor: props.mode==='dark'?'white':'black'
    }
   
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

    // const toggleStyle =()=>{
    //     if (myStyle.color==="black") {
    //        setmyStyle({
    //         color: 'red',
    //         backgroundColor: 'pink'
    //     }) 
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //     })
    //     }
    // }
  return (
    <div className='container'>
        <h1 className='my-3' style={{color: props.mode==='dark'?'white':'black'}}>About us</h1>
        <div className="accordion" id="accordionExample">
            <div className='accordion item'>
                <h2 className='accordion header' id='headingOne'> 
                    <button className='accordion-button collapsed' type='button' style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls='collapseOne'>
                       <strong>Analyze Your Text</strong> 
                    </button>
                </h2> 
                <div id="collapseOne" className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent="#accordionExample">
                    <div className='accordion-body' style={myStyle}>TextUtils gives you way to analyze your text quickly and efficiently.<br></br>
                        Be it word count, character count or
                    </div>
                </div>
            </div>
            <div className='accordion item'>
                <h2 className='accordion header' id='headingTwo'> 
                    <button className='accordion-button collapsed' type='button' style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls='collapseTwo'>
                       <strong>Free to use</strong>
                    </button>
                </h2> 
                <div id="collapseTwo" className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent="#accordionExample">
                    <div className='accordion-body' style={myStyle}>
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text.
                        TextUtils reportd the  number of words and characters. Thus it is suitable for writing text with word / character limit.
                    </div>
                </div>
            </div>
            <div className='accordion item'>
                <h2 className='accordion header' id='headingThree'> 
                    <button className='accordion-button collapsed' type='button' style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls='collapseThree'>
                        <strong>Browser Compatible</strong>
                    </button>
                </h2> 
                <div id="collapseThree" className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent="#accordionExample">
                    <div className='accordion-body' style={myStyle}>
                        This word counter works in any web browser such as Chrome, Firefox, Internet Explorer, Safari,Opera.
                        It suits to count characters in facebook, blogs, books, excel documents, pdf documents, essays, etc.
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
            <button onClick={toggleStyle} type="button" className="btn btn-primary">Enable Dark Mode</button>
            </div> */}
        </div>
    </div>
  )
}
