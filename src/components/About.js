import React,{useState} from 'react';

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // });
  let myStyle = {
    color: props.mode=== "dark"? "white":"#042743",
    backgroundColor:props.mode ==="dark"?"#042743":"white"
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>

      <div className="accordion" id="accordionExample">
        {/* Accordion Item #1 */}
        <div className="accordion-item">
          <h2 className="accordion-header"> 
            <button
              className="accordion-button"
              type="button"style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Analyze your text
              </button>
              </h2>
              <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>Textutils gives you away to analyze your text quickly and efficiently. Be it word count, character count</strong>
              </div>
          </div>
        </div>

        {/* Accordion Item #2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                <button
                className="accordion-button collapsed"
                type="button"style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                  Free to use
                </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                     >
                <div className="accordion-body" style={myStyle}>
                  <strong>Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ characters limits.</strong>
                </div>
          </div>
        </div>

        {/* Accordion Item #3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed" style={myStyle}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree">
                    Browser Compatible

                  </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                      <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
                    </div>
                  </div>
            </div>
        </div>
      </div>
  );
}