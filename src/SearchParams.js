// import { async } from "q";
import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./usebreedlist";


const ANIMALS= ["bird","cat","dog","reptile"]

const SearchParams = () =>{
    // const [location,setLocation]=useState("Seattle, WA");
    const [location,setLocation] = useState("");
   const [animal,setAnimal]=useState("");
   const [breed,setBreed]=useState("")
   const [pets,setPets]=useState([]);
    const [breeds]=useBreedList(animal);
    

    useEffect(()=>{
        requestPets();
    },[]); //eslint-disable-line react-hooks/exhaustive-deps

    // useEffect(()=>{
    //    setTimeout(()=> alert('JOAO CHUPALO'),3000);
    // },[animal])

    async function requestPets(){
        const res =  await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log(json);
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={
                e => {
                    e.preventDefault();
                    requestPets();
                }
            }>
                <label htmlFor="location">
                    Location
                    <input
                    id="location" onChange={e => setLocation(e.target.value)}
                     value={location} placeholder="Location"></input>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                    id="animal" 
                    value={animal}
                    onChange={e => setAnimal(e.target.value)}
                    onBlur={e => setAnimal(e.target.value)}>
                        <option>

                        </option>
                            {ANIMALS.map((animal) =>  (
                                    <option value={animal} key={animal}>
                                        {animal}
                                    </option>
                                    )
                                )
                            }
                    </select>
                </label>
                {/*  */}
                <label htmlFor="breed">
                    Breed
                    <select 
                    id="breed" 
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                    onBlur={e => setBreed(e.target.value)}>
                        <option>

                        </option>
                            {breeds.map((breed) =>  (
                                    <option value={breed} key={breed}>
                                        {breed}
                                    </option>
                                    )
                                )
                            }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets}/>
        </div>
    )
}


export default SearchParams;