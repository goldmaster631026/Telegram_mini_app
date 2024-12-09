const Navbar = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full max-w-3xl">
      <div className="flex justify-around w-full box-border  py-3 rounded-t-2xl border-t-2 border-blue-400 bg-blue-500">
        <a href="/shop">
          <div className="flex flex-col items-center">
            <div className="scale-150">
              <i className="bi bi-cart-fill" />
            </div>
            Shop
          </div>
        </a>
        <a href="/earncash">
          <div className="flex flex-col items-center">
            <div className="scale-150">
              <i className="bi bi-cash" />
            </div>
            Tasks
          </div>
        </a>
        <a href="/home">
          <div className="flex flex-col items-center">
            <div className="scale-150">
              <i className="bi bi-house-door-fill" />
            </div>
            Homea
          </div>
        </a>
        <a href="/friends">
          <div className="flex flex-col items-center">
            <div className="scale-150">
              <i className="bi bi-people-fill" />
            </div>
            Friends
          </div>
        </a>
        <a href="/wallet">
          <div className="flex flex-col items-center">
            <div className="scale-150">
              <i className="bi bi-wallet-fill" />
            </div>
            Wallet
          </div>
        </a>
      </div>
    </div>

  );
};

export default Navbar;
