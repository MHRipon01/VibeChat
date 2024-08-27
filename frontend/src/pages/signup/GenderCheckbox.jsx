const GenderCheckbox = () => {
    return (
      <div className="flex text-white">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer`}>
            <span className="">Male</span>
            <input type="checkbox" className="checkbox border-white" />
          </label>
        </div>
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer`}>
            <span className="">Female</span>
            <input type="checkbox" className="checkbox border-white" />
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderCheckbox;
  