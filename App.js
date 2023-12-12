/**
 * 
 * <div id="parent">
 *      div id="child">
 *          <h1 id="heading">I am heading</h1>
 *          <h2 id="heading2">I am heading2</h2>
 *      </div>
 *      <div id="child2">
 *       <h1 id="heading2">I am heading3</h1>
 *       <h2 id="heading4">I am heading4</h2>
 *      </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement("div",
    { id: "parent" },
    [React.createElement("div",
        { id: "child" },
        [React.createElement("h1",
            { id: "heading" },
            "I am heading"),
        React.createElement("h2",
            { id: "heading2" },
            "I am heading2")
        ]
    ),
    React.createElement("div",
        { id: "child2" },
        [React.createElement("h1",
            { id: "heading2" },
            "I am heading3"),
        React.createElement("h2",
            { id: "heading4" },
            "I am heading4")
        ]
    )
    ]
);

// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World From React"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);