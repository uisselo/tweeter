const Layout = ({ children }) => {
  return (
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="card" style={{ width: "60em" }}>
        <div class="row g-0">
          <div class="col">
              <img
                src="https://images.unsplash.com/photo-1513754934927-4606bafe9858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                class="img-fluid rounded-start"
              />
          </div>
          <div class="col d-flex align-items-center justify-content-center">
            <div className="card-body text-center mx-5">
              <img src="https://i.imgur.com/y0RxFvS.png" width={150} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
