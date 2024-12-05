import "../styles/Header.css";

function Header() {
  return (
    <header className="header shadow">
      <div className="logo">Veer-QUCIK</div>
      <div className="search">Search bar</div>
      <div className="cart">Cart</div>
    </header>
    // <header
    //   className="row bg-light shadow align-items-center fixed-top"
    //   style={{ height: "70px" }}
    // >
    //   <div className="col">
    //     <div className="container-fluid navbar-light d-flex justify-content-between align-items-center">
    //       <a
    //         className="navbar-brand"
    //         href="https://getbootstrap.com/docs/5.0/components/navbar/"
    //       >
    //         Veer-QUIKECOMM
    //       </a>
    //       <div className="mx-auto">
    //         <span className="navbar-text">Centered Text</span>
    //       </div>
    //       <div>
    //         <a className="nav-link px-4">Cart</a>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}

export default Header;
