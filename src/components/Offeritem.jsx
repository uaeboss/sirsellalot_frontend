import "../styles/Offeritem.css";

const Offeritem = () => {
    return (
      <div className="offeritem">
        <form className="offerform">
            <label>Name</label>
            <input></input>
            <label>Price</label>
            <input type="number"></input>
            <label>Description</label>
            <input type="text"></input>
            <label>Pictures</label>
            <input type="file" name="pictures" multiple></input>
            <br/>
            <br/>
            <input type="submit" />
        </form>
      </div>
    );
  };
  
  export default Offeritem;