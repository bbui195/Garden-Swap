import React from 'react';
import axios from 'axios';

class ListingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign(
            {
                submitted: false
            }, this.props.listing);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFile = this.handleFile.bind(this);
        // this.setState = this.setState.bind(this);
        this.previewImage = this.previewImage.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = function () {
            this.setState({ imageFile: file, photoUrls: fileReader.result })
        }.bind(this)
        if (file) {
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
                    <img src={this.state.photoUrls} alt="listing" className='form-photo' />
                </div>
            )
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    updateCategory(e) {
        this.setState({ category: e.currentTarget.value })
    }

    handleFormData() {
        let formData = new FormData();
        formData.append('listing[title]', this.state.title)
        formData.append('listing[body]', this.state.body)
        formData.append('listing[image]', this.state.imageFile)
        formData.append('listing[photoUrls]', this.state.photoUrls)
        formData.append('listing[price]', this.state.price)
        formData.append('listing[location]', this.state.location)
        formData.append('listing[category]', this.state.category)
        formData.append('listing[userId]', this.props.currentUserId)
        return formData;
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.submitted) {
            return;
        }
        this.setState({submitted: true});
        this.props.makeListing(this.handleFormData())
            .then(() => this.props.history.push('/'))
            .finally(() => this.setState({submitted: false}))
    }

    render() {
        return (
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
                                onChange={this.update('price')}
                                defaultValue={this.state.price}
                                placeholder='$0.00'
                                className='price-input'
                            />

                            <select onChange={this.updateCategory} name="categories" id="categories" defaultValue="disabled">
                                <option value="disabled" disabled="disabled">Choose Category</option>
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

export default ListingForm;