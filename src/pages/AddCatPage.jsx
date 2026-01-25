import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCat } from "../redux/catsSlice";
import { useNavigate } from "react-router-dom";
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';

export default function AddCatPage() {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [lat, setLat] = useState(""); //latitude
    const [lng, setLng] = useState(""); //longitude
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("");
    const isValidLatLng = lat && lng && !isNaN(parseFloat(lat)) && !isNaN(parseFloat(lng));


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async(pos) => {
                const {latitude, longitude} = pos.coords;
                setLat(latitude.toString());
                setLng(longitude.toString());

              //get current adress  
              const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
              );
              const data = await res.json();
              setAddress(data.display_name || "faild to get current address.");
            },
            (err) => {
                console.error("Failed to get location info.", err);
                //fallback: Stockholm
                setLat("59.3293");
                setLng("18.0686");
            }
        );
    }, [])

   const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = {
        id: Date.now(),
        name,
        position: [parseFloat(lat), parseFloat(lng)],
        description,
    };
    dispatch(addCat(newCat));
    navigate("/"); 
   }


    return(
        <div>
            <h1>Add new cat</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Nickname:</label>
                    <input value={name} onChange={(e)=> setName(e.target.value)} required/>
                </div>
                <div>
                    <label>Description</label>
                    <input value={description} onChange={(e)=> setDescription(e.target.value)} required/>
                </div>
                 <div>
                 <label>Adress</label>
                 <input value={address} readOnly />
                <input value={lat} onChange={(e) => setLat(e.target.value)} readOnly />
                <input value={lng} onChange={(e) => setLng(e.target.value)} readOnly />
               </div>
               <div>
               {isValidLatLng && (
                <div style={{ height: "200px", marginTop: "20px" }}>
                    <MapContainer
                    center={[parseFloat(lat), parseFloat(lng)]}
                    zoom={16}
                    style={{ height: "100%", width: "100%" }}
                    scrollWheelZoom={false}
                    >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[parseFloat(lat), parseFloat(lng)]}>
                        <Popup>{address}</Popup>
                    </Marker>
                    </MapContainer>
                </div>
                )}
                </div>
                
                <button type="submit">Add new cat</button>
            </form>
        </div>
    );
   };
