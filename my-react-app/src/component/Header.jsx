import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="olx-header">
      {/* Logo */}
      <div className="olx-logo">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAPoA+gMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwECB//aAAgBAQAAAADSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj/BI+wAAADI1htJoAAi0sDl2n3UkZGsNpNAAM9QeB7or4yNYbSaAAzlCAaK/ZGsNp1jJXeLwS+wg4wPPQ2szI1htKzPO+hzPy1toMpUknTzoGYjlxqcjWG0rM8BrbQYPkbaWQsWd91kaw2kTLA92c08/PztuwwPwfoORrDaTctThpL0MB8vd50OOEOm9yNYbT5x/yHfZ9xj64tdV9fGUrCz12RrDaVmeA1toKjKjpMh8xrLXI1htKzPPbWpNbaDzIVwBZ65kaw2nKtWNnSxVzLDnkYAFhrejI1htJoAB5SUkT3yZd3Xpkaw2k0AAHLl26AyNYbSaAAAAVMcuOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/9oACgICEAMQAAAAAAAAAAAAAAAAAAAAAAAAAANlmU0rjuR3AAZfJgT0y647kdhrBpXLZym7BHauW5PWuWVs5c9C+BHc3nUT02NyO18mE9coviyOza5bM9NjcnrXIMuehsVzGsbHauO5PXYytnKyw2KhmVPRtcdyO4AAABXNk9QAAAAAAAAAAAAAAAAAAAAAAP/EADkQAAEDAQUDCAoCAgMAAAAAAAECAwQFABEgNHIQEjETFBVRUlRxkiEwMkBBQkRTc4IiM2HRcICy/9oACAEBAAE/AP8AnByXFaWUOPISrqNufwu8t25/C7y3bn8LvLdkLQ4hK0KCkkXgj3yr59zSjBTchG0e4yJsaL/av09kek2drjvBllKdVl1OevjJXbnszvL3nNkVOcj6hR1emzNcXwfZB0Wjy48kXtODTwOGr59zSjBTchG0e4TqvxbinxcsSSSSSScQJSQpJII4EWgVbfIaknwcwVfPuaUYKbkI2j19Xn3kxmj+Q+qpM/hGdP4ztq+fc0owU3IRtFn5bEXc5ZZTvW6WgfePkNuloH3j5DZiSxJSVNL3gNj82LGUEuuXG3S0D7x8ht0tA+8fIbMPtSG+UaN6byMNRlc1jEg/zV6EYrx1jCCQQQbiLQZIlRkOfPwXsq+fc0owU3IRtFq99L++2PIdiuhxs/6Is9WGRGC2vS6r5OzZa1uLUtaiVE3knbRsin8i8NZe35e58GhgixXZbm43+yuqzFLiMfIFq7S7cm3dduJu8LSKXEfBuRya+tFpMV2K6W3B4HrGCiv7klTXwcTsq+fc0owU3IRtFq99L+/qKNkU/kXhecLrzrnaWTghRkxY6G/jxWetWCfFEmMtPzpBUjBFc5KUwvqcTsq+fc0owU3IRtFqxGdfabcbF/J33jGASQACSTcALU6OuNFQ2vjeTgV7KvA4IwBksA8C6jE6AHXAOAWdo4jxGyr59zSjBTchG0bKvHjsuhbZAWvi3io0djcL4UFu/wDjEtJQpST8CRtSopUlQ4ggjxFmXUvNIcQbwtIOCQ8GGHHT8owMoLjzKO04kbKvn3NKMFNyEbRafNENoEC9xfsWWtbi1LWolRN5JxRpLsV0ONn/AERaNIRKZS6gEA4aqzyU13qX/MYKbUeaktu3lony2QtDiQtCgpJ4EHY4420krcWEpHxNqjPMtQQi8NJwUhrlJyFfBsFeyr59zSjBTchG0Wr30v7+oo2RT+ReGsRuVYDqeLWFp51k3tOKQf8ABt0pUO8qs4668reccUs9ZN+GkRixG31C5buyr59zSjBTchG0Wr30v77QCohIBJJuAFnaQ+1GDvFfFaMFGyKfyLwkAi42qMIxHb0/1L9j1VNgmU7vr/qRtq+fc0owU3IRtFqhBVN5G5wI3L7dBO95R5bdBO94T5bQaYiIStRC3Nkujoed32lhvrFugne8J8tugne8J8toMYxGA0VhVyicTzTb7am3E3pNpsB2GrtNfBfqINOdlkKN6Ge1ZptDKEttpCUpFwG2r59zSjBTchG0e4EBQIIBB4g2lUVtd6mFbh7FnoUtj22VeI9IteOvZeOuzMGW/wCwyq7rV6BaLRmm7lPnlDYAAADBV8+5pRgpuQjaPc1ssue20hXiAbcyh92a8gshlpv2G0J8ABjq+fc0owU3IRtHvkulIlPl0vFNugkd4XboJHeF26CR3hdo7IYYbaBvCBd/0M//xAAcEQACAwADAQAAAAAAAAAAAAABEAARIDAxYED/2gAIAQIBAT8A8HUrA5iEOEK5bMCHapHYRg0dhGDRY2HcuXCcAu2PguX4f//EACERAQACAwACAgMBAAAAAAAAAAECEAARMRIgQVEwMmBA/9oACAEDAQE/AP4PzM8zBG3r+FdYq+kZfDUut7PutmbLk7aIrnhY7Ml1qX60SSod9C51DmS610xNNxNW9od1J3UOZLrS6PSDcz5vbQbal1pNmeLhHPByInow+s00RXACpdf8DFXPB/h//9k=" height="40px" width="40px"></img>
      </div>

      {/* Location Dropdown */}
      <div className="location-dropdown">
        <select>
          <option>India</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <select className="category-dropdown">
          <option>All Categories</option>
        </select>
        <input type="text" placeholder='Search "Properties"' />
        <button className="search-button">🔍</button>
      </div>

      {/* Language Dropdown */}
      <div className="language-dropdown">
        <select>
          <option>ENGLISH</option>
        </select>
      </div>

      {/* Icons */}
      <div className="header-icons">
        <span>♡</span>
        <span>💬</span>
        <span>🔔</span>
        <span className="profile-icon">👤</span>
      </div>

      {/* Sell Button */}
      <button className="sell-button">+ SELL</button>
    </header>
  );
};

export default Header;