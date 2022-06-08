import React from 'react';
import axios from 'axios';

class EditListingForm extends React.Component {
    constructor(props){
        super(props)
        this.state = Object.assign({}, this.props.listing);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFile = this.handleFile.bind(this);
        // this.setState = this.setState.bind(this);
        this.previewImage = this.previewImage.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    componentDidMount(){
        this.props.requestListing(this.props.listingId)
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = function(){
            this.setState({imageFile: file, photoUrls: fileReader.result})
        }.bind(this)
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    previewImage() {
        if (!this.state.photoUrls) {
            return (
                <div className='image-preview-container'>

                </div>
            )
        } else {
            return (
                <div className='image-preview-container'>
                    <img src={this.state.photoUrls} alt="listing" className='form-photo'/>
                </div>
            )
        }
    }

    update(field){
        return e=>{
            console.log(e.currentTarget, 'this is on generic update')
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleFormData(){
        let formData = new FormData();
        formData.append('listing[title]', this.state.title)
        formData.append('listing[body]', this.state.body)
        formData.append('listing[image]', this.state.imageFile)
        formData.append('listing[photoUrls]', this.state.photoUrls)
        formData.append('listing[price]', this.state.price)
        formData.append('listing[location]', this.state.location)
        formData.append('listing[category]', this.state.category)
        formData.append('listing[id]', this.props.listingId)
        formData.append('listing[userId]', this.props.currentUserId)
        return formData;
    }

    updateCategory(e) {
        console.log(e.currentTarget.value, 'this is category target')
        this.setState({category: e.currentTarget.value},
            () => {
                console.log(this.state.category)
            }
        )
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state, 'this is the state')
        this.props.patchListing(this.handleFormData())
            .then(this.props.history.push('/'))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className='listing-form-container' >
                <div className='form-inputs-container'>
                    <div className='form-inputs'>
                        <input 
                            type="text" 
                            value={this.state.title}
                            onChange={this.update("title")}
                            placeholder="Title"
                            className='title-input'
                            id='title'
                        />
                        <label htmlFor="title" className='title__label'>Title</label>
                        <textarea 
                            value={this.state.body}
                            onChange={this.update('body')}
                            className="description-input"
                            placeholder='body'
                        />
                        <div className='price-cat-container'>
                            <input 
                                type="number" 
                                min="1" 
                                step="any" 
                                placeholder='$0.00'
                                defaultValue={this.state.price}
                                className='price-input'
                                onChange={this.update('price')}
                            />

                            <select onChange={this.updateCategory} name="categories" defaultValue={this.state.category} id="categories">
                                <option disabled="disabled">Choose Category</option>    
                                <option value="Fruit">Fruit</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Nuts">Nuts</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Meats">Meats</option>
                                <option value="Grains">Grains</option>
                            </select>
                        </div>
               
                        
                   
                    </div>
                    <div className='image-container'>
                        {this.previewImage()}
                        <input 
                            type="file"
                            onChange={this.handleFile}
                            className="file-upload"
                        />
                    </div>
                </div>
                <button type="submit" className='btn'>Post Listing!</button>
            </form>
        )
    }
}

export default EditListingForm;