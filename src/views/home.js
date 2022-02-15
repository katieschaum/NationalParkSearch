import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    const handleChange = e=>{
        navigate(e.target.value)
    }

    return (<form>
        <label>
          Search by State:
          <select onChange={handleChange}>
              <option value=""> Please select state</option>
          <option value="alabama">Alabama</option>
          <option value="alaska">Alaska</option>
          <option value="arizona">Arizona</option>
          <option value="arkansas">Arkansas</option>
          <option value="california">California</option>
          <option value="colorado">Colorado</option>
          <option value="connecticut">Connecticut</option>
          <option value="delaware">Delaware</option>
          <option value="florida">Florida</option>
          <option value="georgia">Georgia</option>
          <option value="hawaii">Hawaii</option>
          <option value="idaho">Idaho</option> 
          <option value="illinois">Illinois</option>
          <option value="indiana">Indiana</option>
          <option value="iowa">Iowa</option>
          <option value="kansas">Kansas</option> 
          <option value="kentucky">Kentucky</option>
          <option value="louisiana">Louisiana</option>
          <option value="maine">Maine</option>
          <option value="maryland">Maryland</option>  
          </select>
        </label>
      </form>)
}

export default Home;
