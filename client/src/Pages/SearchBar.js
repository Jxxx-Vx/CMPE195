import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import "./SearchBar.css";

const SearchBar = ({ panTo }) => {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete();
  
    const handleInput = (e) => {
      setValue(e.target.value);
    };
  
    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
  
      try {
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        panTo({ lat, lng });
      } catch (error) {
        console.error("Error: ", error);
      }
    };
  
    return (
      <div className="search-bar">
        <input
          className = "search-input"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search for a Location..."
          id="search" 
          type="search"  
        />
        {status === "OK" && (
          <ul className="suggestions">
            {data.map((suggestion) => {
              const { place_id, description } = suggestion;
              return (
                <li className = "removeDot" key={place_id} onClick={() => handleSelect(description)}>
                  {description}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  export default SearchBar;
  