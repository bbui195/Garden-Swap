import React from 'react';
import axios from 'axios';

class ListingForm extends React.Component {
    constructor(props){
        super(props)
        this.state = Object.assign({}, this.props.listing);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFile = this.handleFile.bind(this);
        // this.setState = this.setState.bind(this);
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

    update(field){
        return e=>{
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
        return formData;
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state, "hehehe")
        this.props.makeListing(this.handleFormData())
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.title}
                    onChange={this.update("title")}
                    placeholder="Title"/>
                <textarea 
                    value={this.state.body}
                    onChange={this.update('body')}
                    />
                <input 
                    type="file"
                    onChange={this.handleFile}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default ListingForm;