import React from "react";

const style = {
  top: {
    top: "10px"
  }
};
class Search extends React.Component {
  state = {};
  render() {
    return (
      <div className="card border border-dark" style={style.top}>
        <div className="card-body bg-dark">
          <div className="container">
            <form>
              <div className="text-center">
                <h2 className="fa fa-search text-warning"> Search</h2>
              </div>
              <div className="form-group ">
                <label className="text-warning">Email address</label>
                <input
                  type="text"
                  className="form-control border border-warning text text-warning"
                  id="search"
                  placeholder="Item Name"
                />
              </div>
              <div class="form-group">
                <label className="text-warning">Send to</label>
                <select
                  className="form-control border border-warning"
                  id="exampleFormControlSelect1"
                >
                  <option>lampung</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <button type="button" class="btn btn-outline-warning">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
