import React, {useState, useMemo} from 'react';
import './Upload.css';
import Button from '../Components/Button';
import Locations from '../Components/Locations';


const Upload = () => {

    const [dataValue, setDataValue] = useState('def');
    const options = useMemo(() => Locations[dataValue], [dataValue]);

    const onChange = ({ target: { value } }) => {
        setDataValue(value);
    };

    
    return(
        <div className='upload'>
            
            <div className="wrapper">
                <div className="title">Upload</div>
                
                

                <div className="form">
                    <div className="input_field">
                        <input type="text" placeholder="Title" className="input"/>
                        <i className="fas fa-user"></i>
                    </div>

                    <div className="input_field">
                        <select>
                            <option>-- please select --</option>
                            <option>Lost</option>
                            <option>Found</option>

                        </select>
                    </div>

                    <div className="input_field">
                        
                        <textarea placeholder="Description" className="input"></textarea>
                        <i className="fas fa-lock"></i>
                    </div>

                    <div className="input_field">
                        <input type="file" placeholder="image" className=""/>
                        
                    </div>

                    <div className="input_field">
                        <input type="text" placeholder="Email" className="input"/>
                        <i className="fas fa-lock"></i>
                    </div>

                    <div className="input_field">
                        <input type="text" placeholder="Contact Number" className="input"/>
                        <i className="fas fa-lock"></i>
                    </div>
                    

                    
                    <div className="input_field">
                        <select>
                            <option value="" selected disabled hidden>Select a Category</option>
                            <option value="animal">Animals</option>
                            <option value="boat">Boat</option>
                            <option value="bus">Bus</option>
                            <option value="car">Car</option>
                            <option value="clothes">Clothes</option>
                            
                            <option value="electronics">Electronics</option>
                            <option value="farming">Farming</option>
                            <option value="health">Health</option>
                            <option value="home">Home</option>
                            <option value="instrument">Instruments</option>
                            <option value="jetski">Jetski</option>
                            <option value="motorbike">MotorBikes</option>
                            <option value="property">Property</option>
                            <option value="quad">Quads</option>
                            <option value="scooter">Scooter</option>
                            <option value="sport">Sports</option>
                            <option value="ticket">Tickets</option>	
                            <option value="tractor">Tractor</option>
                            <option value="vintage">Vintage</option>
                        </select>
                    </div>

                    <div className="input_field">
                        <select onChange={onChange}>
                            <option value="" selected disabled hidden>Choose County</option>
                            <option value="Antrim">Antrim</option> 
                            <option value="Armagh">Armagh</option> 
                            <option value="Carlow">Carlow</option> 
                            <option value="Cavan">Cavan</option> 
                            <option value="Clare">Clare</option> 
                            <option value="Cork">Cork</option> 
                            <option value="Derry">Derry</option> 
                            <option value="Donegal">Donegal</option> 
                            <option value="Down">Down</option> 
                            <option value="Dublin">Dublin</option> 
                            <option value="Fermanagh">Fermanagh</option> 
                            <option value="Galway">Galway</option> 
                            <option value="Kerry">Kerry</option> 
                            <option value="Kildare">Kildare</option> 
                            <option value="Kilkenny">Kilkenny</option> 
                            <option value="Laois">Laois</option> 
                            <option value="Leitrim">Leitrim</option> 
                            <option value="Limerick">Limerick</option> 
                            <option value="Longford">Longford</option> 
                            <option value="Louth">Louth</option> 
                            <option value="Mayo">Mayo</option> 
                            <option value="Meath">Meath</option> 
                            <option value="Monaghan">Monaghan</option> 
                            <option value="Offaly">Offaly</option> 
                            <option value="Roscommon">Roscommon</option> 
                            <option value="Sligo">Sligo</option> 
                            <option value="Tipperary">Tipperary</option> 
                            <option value="Tyrone">Tyrone</option> 
                            <option value="Waterford">Waterford</option> 
                            <option value="Westmeath">Westmeath</option> 
                            <option value="Wexford">Wexford</option> 
                            <option value="Wicklow">Wicklow</option> 
                        </select>
                    </div>

                    <div className="input_field">
                        <select disabled={dataValue === 'def'}>
                            {[...Locations.def, ...options].map(({ name }) => (
                            <option  value={name}>
                                {name}
                            </option>
                            ))}
                        </select>
                    </div>

                    <div className='Upload-Button'>
                        <Button>Upload</Button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Upload;