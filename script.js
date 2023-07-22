import React from "react";
import ReactDOM from "react-dom"

// JSX is like writing html stuffed in our js file   

// C H A L L E N G E   1 
ReactDOM.render(<h1>Hello, Teboo!</h1>, document.getElementById("root"))
ReactDOM.render(<p>I'm a Front-end Software Engineer</p>, doucment.getElementById("root"))

// or ReactDOM.render(<h1>Hello, Teboo</h1>, document.querySelector('#root'))

ReatDOM.render(
<ul>
    <li>Become the best React Dev I can be.</li>
    <li>Save for early retirement</li>
    <li>Travel the world, starting with </li>
    <li></li>
</ul>, document.querySelector("#root"))




// C H A L L E N G E  2 
//  c o m p o s a b i l i t y   o f   r e a c t   = building statue out of multiples of lego blocks 
//      1. Create your own React custom component: 
//          - call it 'MainContent' 
//          - have it return a simple <h1> that says "I'm learning Recat!" 
//          - render it below the Navbar inside the ReactDom.render() call 

function MainContent() {
    return <h1>I'm Learning React!</h1>
}

ReactDOM.render(
    <div>
        <NavBar/>
        <MainContent/> 
    </div>,
    document.getElementById("root")
)



// R E A C T    I S    D E C L A R A T I V E  = Just tell me what you want and I'll do it for you, u dont have to 
// worry about how React is going to do it . abstrated away the process. 
// opposite of declarative is imperative - which is what we've been doing with Javascript, telling it 
// step by step what to do in code. 

// Rewrite the below declarative code into imperative JS code 
ReactDOM.render(<h1 className="header">Hello, React! </h1>, document.getElementById("root")

// I M P E R A T I V E 
// const h1 = document.createElement("h1")
// h1.textContent = "Teboo is a React Developer" 
// h1.className = "header"
// document.getElementById("root").append(h1)
// console.log(h1)




// C H A L L E N G E   3 :
// Create navbar in JSX 
//      1. use semantic 'nav' element as the parent wrapper.
//      2. have an h1 element w/ the brand name of you website 
//      3. Insert <ul> for other nav elements 
//          - inside <ul> have 3 <li>s for "Pricing", "About", "Contact" 


// const navbar = (
//     <nav>
//         <h1>Teboo.dev merch</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// console.log(navbar)
// ReactDOM.render(navbar, document.getElementById("root"))
 
// e x a m p l e 
// const page = (
//     <div>                                                 // ALWAYS RENDER 1 PARENT ELEMENT IN REACT ! <div>
//         <h1 className = "header">This is JSX!</h1>          
//         <p>This is a paragraph</p>
//     </div> 
)
console.log(page);                                          // returns elemeent on console as object 
// 

ReactDOM.render(page, document.getElementById("root"))