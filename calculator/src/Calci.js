import React from 'react'

export default function math() {
    return (
        <div className="flex-container">
          <button className="num" data-num="0">0</button>
          <button className="ops" data-ops="plus">.</button>
          <button className="ops" data-ops="plus">%</button>
          <button onclick="caliculateFun()" className="ops" data-ops="plus">+</button>
          <button onclick="caliculateFun()" className="num" data-num="1">1</button> 
          <button onclick="caliculateFun()" className="num" data-num="2">2</button>
          <button onclick="caliculateFun()" className="num" data-num="3">3</button>
          <button onclick="caliculateFun()" className="ops" data-ops="minus">-</button>
          <button onclick="caliculateFun()" className="num" data-num="4">4</button>
          <button onclick="caliculateFun()" className="num" data-num="5">5</button>
          <button onclick="caliculateFun()" className="num" data-num="6">6</button> 
          <button onclick="caliculateFun()" className="ops" data-ops="times">*</button> 
          <button onclick="caliculateFun()" className="num" data-num="7">7</button>
          <button onclick="caliculateFun()" className="num" data-num="8">8</button>
          <button onclick="caliculateFun()" className="num" data-num="9">9</button> 
          <button onclick="caliculateFun()" className="ops" data-ops="divided by" >/</button>
          <button onclick="caliculateFun()" className="ops" id="clear">CE</button> 
          <button onclick="caliculateFun()" className="ops" id="LP">(</button> 
          <button onclick="caliculateFun()" className="ops" id="RP">)</button> 
          <button>=</button>
          
        </div>
    )
}
