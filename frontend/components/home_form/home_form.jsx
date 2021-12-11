import React from 'react'

class HomeForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            home: this.props.home,
            photos: []
        },
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const {photos} = this.state
        const formData = new FormData();
        formData.append('home[title]', this.state.home.title);
        formData.append('home[price]', this.state.home.price);
        formData.append('home[description]', this.state.home.description);
        formData.append('home[location]', this.state.home.location);
        formData.append('home[bedroom]', this.state.home.bedroom);
        formData.append('home[bathroom]', this.state.home.bathroom);
        formData.append('home[lng]', this.state.home.lng);
        formData.append('home[ltd]', this.state.home.ltd);
        formData.append('home[owner_id]', this.state.home.owner_id);
        formData.append('home[host_name]', this.state.home.host_name);
        formData.append('home[city]', this.state.home.city);

        if (this.state.photos){
            for (let i = 0; i < photos.length; i++){
                formData.append('home[photos][]', photos[i].photoFile)
            }
        }
        // debugger
        // if (this.state.photoFile){
        //     formData.append('home[photos]', this.state.photoFile)
        // }
        
        this.props.action(formData, this.props.home.id).then(
            (list) => this.props.history.push(`/homes/${list.home.id}`)
        )
    }

    // handleUpdate(field){
    //     return (e) => {
    //         this.setState({[field]: e.target.value})
    //     }
    // }

    handleFile(e){
        const files = e.currentTarget.files
        const that = this
        for(let i = 0; i < files.length; i++){
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                let photo = {photoFile: files[i], photoUrl: fileReader.result}
                that.state.photos.push(photo)
            }

            if (files[i]){
                fileReader.readAsDataURL(files[i])  
            }
        }
    }

    handleUpdate(field) {
    return e => {
        let nextHome = Object.assign({}, this.state.home);
        nextHome[field] = e.currentTarget.value;
        this.setState({ home: nextHome });
        };
    }

    render(){
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : '' 
        const {homeErrors} = this.props
        
        return(
            <div className='border-box-form'>
                {/* <h1>{this.props.formType}</h1> */}
                <div className='share'>Host your place</div>
                <form onSubmit={this.handleSubmit}>
                    <div className='update-edit'>
                        <div className='create-home-name-container'>
                            <i className="fab fa-square-info"></i>
                            <p>Host name</p>
                            <h1>
                                What is your name?
                            </h1>
                            <input className='create-home-name' 
                                type='text' 
                                onChange={this.handleUpdate('host_name')} 
                                value={this.state.home.host_name}
                            />
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.host : ''} 
                            </h2>
                        </div>

                        <div className='create-home-title-container'>
                            <p>Title</p>
                            <h1>
                                Give your place a unqiue title that will stand out.
                            </h1>
                            <input className='create-home-title' 
                                onChange={this.handleUpdate('title')} 
                                type='text' 
                                value={this.state.home.title}
                            />
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.title : ''} 
                            </h2>
                        </div>

                        <div className='create-home-price-container'>
                            <p>Price</p>
                            <h1>
                                Please enter the amount you would like to charge per night.
                            </h1>
                            <input className='create-home-price' 
                                onChange={this.handleUpdate('price')} 
                                type='text' 
                                value={this.state.home.price}
                            />
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.price : ''} 
                            </h2>
                        </div>

                        <div className='create-home-description-container'>
                            <p>Describe your place</p>
                            <h1>
                                Give a short or long description of your property and neighborhood.
                            </h1>
                            <textarea className='create-home-description' 
                                onChange={this.handleUpdate('description')}  
                                value={this.state.home.description}
                            />
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.description : ''} 
                            </h2>
                        </div>

                        <div className='create-home-location-container'>
                            <p>City</p>
                            <h1>
                                Please provide your city or town.
                            </h1>
                            <input className='create-home-location' 
                                onChange={this.handleUpdate('city')} 
                                type='text' 
                                value={this.state.home.city}
                            />
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.city : ''} 
                            </h2>
                        </div>

                        <div className='create-home-city-container'>
                            <p>Location</p>
                            <h1>
                                Please choose the city based on where your property is located. 
                                <br/>
                                (We are only hosting in the cities provided)
                            </h1>
                            <select className='create-home-city' 
                                onChange={this.handleUpdate('location')} 
                                value={this.state.home.location}>
                                <option selected disabled> </option>
                                <option value='NewYorkCity'>New York City</option>
                                <option value='Miami'>Miami</option>
                                <option value='Vancouver'>Vancouver</option>
                                <option value='LosAngeles'>Los Angeles</option>
                                <option value='Toronto'>Toronto</option>
                                <option value='Chicago'>Chicago</option>
                            </select>
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.location : ''} 
                            </h2>
                        </div>

                        <div className='create-home-bedroom-container'>
                            <p>Bedrooms</p>
                            <h1>
                                Please list how many bedrooms this place has. 
                                <br/>
                                (Make sure your input is a integer)
                            </h1>
                            <input className='create-home-bedroom' 
                                onChange={this.handleUpdate('bedroom')} 
                                type='text' 
                                value={this.state.home.bedroom}
                            />
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.bedroom : ''} 
                            </h2>
                        </div>

                        <div className='create-home-bathroom-container'>
                            <p>Bathrooms</p>
                            <h1>
                                Please list how many bathrooms this place has. 
                                <br/>
                                (Make sure your input is a integer)
                            </h1>
                            <input className='create-home-bathroom' 
                                onChange={this.handleUpdate('bathroom')} 
                                type='text' 
                                value={this.state.home.bathroom}
                            />
                        </div>

                        <div className='create-home-latitude-container'>
                            <p>Latitude</p>
                            <h1>
                                Please provide the latitude of this location.
                                <br/> 
                                (Hint: use google)
                            </h1>
                            <input className='create-home-latitude' 
                                onChange={this.handleUpdate('latitude')} 
                                type='text' 
                                value={this.state.home.latitude}
                            />
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.latitude : ''} 
                            </h2>
                        </div>
                        <div className='create-home-longitude-container'>
                            <p>Longitude</p>
                            <h1>
                                Please provide the longitude of this location. 
                                <br/> 
                                (Hint: use google)
                            </h1>
                            <input className='create-home-longitude' 
                                onChange={this.handleUpdate('longitude')} 
                                type='text' 
                                value={this.state.home.lng}
                            />
                            <h2>
                                {this.props.homeErrors.error ? this.props.homeErrors.error.lng : ''} 
                            </h2>
                        </div>


                        <div className="home-image-container">
                            <p>home Image</p>
                            <h1>
                                Please select up to 5 photos to upload in order to promote your home.
                                <br/>
                                Once these photos are uploaded you will not be able to edit these.
                            </h1>
                            <input
                                type="file"
                                name="home image"
                                accept="image/*"
                                className="home-image-wrapper"
                                onChange={this.handleFile}
                                multiple
                            />
                            <div>
                                {preview}
                            </div>
                        </div>
                    </div>
                    <div className='create-buttons'>
                        <button className='form-button' onClick={() => this.props.history.push(`/homes/${this.props.home.id}`)}>Cancel</button>
                        <button className='form-button' type='submit'>Submit {this.props.formType}</button>
                    </div>
                </form>
                
            </div>
        )
    }

}

export default HomeForm