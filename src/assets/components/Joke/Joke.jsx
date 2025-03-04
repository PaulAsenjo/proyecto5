import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import "./Joke.css"

export const Joke = () => {
      const [joke, setJoke] = useState(null);
      const [categories, setCategories] = useState([]);
      const [selectedCategory, setSelectedCategory] = useState("Aleatorio");
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch("https://api.chucknorris.io/jokes/categories");
            if (!response.ok) {
              throw new Error("No se pudieron obtener las categorías.");
            }
            const data = await response.json();
            setCategories(data);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchCategories();
      }, []);
    
      const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
          const url = selectedCategory !== "Aleatorio"
            ? `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
            : "https://api.chucknorris.io/jokes/random";
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("No se pudo obtener la broma.");
          }
          const data = await response.json();
          setJoke(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
    
      const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      };
    
      if (loading && !categories.length) return <p>Cargando categorías...</p>;
      if (error) return <p>Error: {error.message}</p>;
    
      return (
        <div className="contenedor-select">
          {/* <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Aleatorio</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>*/}
          
          

          <Select sx={{minWidth: 140}} value={selectedCategory} onChange={handleCategoryChange}>
            <MenuItem value="Aleatorio">Aleatorio</MenuItem> 
          {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
          
          <button className="boton-style" onClick={fetchJoke}>
          <img className="img-boton" src="/boton-select.png" alt="Obtener chiste" />
          </button>
          
          {joke && <p>{joke.value}</p>}
        </div>
      );
    }
    
    


