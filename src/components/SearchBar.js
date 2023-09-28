import{Component} from "react"
import '../styles/searchBar.css';
import {addSearchResults,showSearchResults} from '../actions/index'
export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput:'',
    };
  }

  searchContacts=()=>{
     const searchInput=this.state.searchInput;
     console.log("searchInput=",searchInput);

     if(searchInput===""){
      return;
     }
     const firstCharSearchInput=searchInput.charAt(0);
     var exitContactOrGroup=null;

     console.log("firstCharSearchInput=",firstCharSearchInput);

      var searchResults =  this.props.contactsOrGroupsList.filter((contactsOrGroup) =>{
          let contactOrGroupName=contactsOrGroup.contactOrGroupName;
           if(contactOrGroupName===searchInput){
             exitContactOrGroup=contactsOrGroup;
             return false;
           }
        return  contactOrGroupName.charAt(0) === firstCharSearchInput;
      }
      );

      console.log("searchResults=",searchResults);

       if(exitContactOrGroup!==null){
        searchResults=[exitContactOrGroup,...searchResults]
       }

       console.log("finalSearchResults=",searchResults);
      this.props.dispatch(addSearchResults(searchResults));
      this.props.dispatch(showSearchResults(true));
  } 

  render(){
    return(
        <div className="SearchBar">
          <div className="search-container">
            <button id="search-btn" onClick={()=>this.searchContacts()}>Search</button>
            <input value={this.searchInput} onChange={(e)=>this.setState({searchInput:e.target.value})} placeholder="search contact..."/>
          </div>
        </div>
    )
  }
}